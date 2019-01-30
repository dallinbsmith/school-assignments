<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Todo;
use App\User;
// use JWTAuth;

class RegistrationController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'todo_id' => 'required',
            'user_id' => 'required',
        ]);

        $todo_id = $request->input('todo_id');
        $user_id = $request->input('user_id');

        $todo = todo::findOrFail($todo_id);
        $user = User::findOrFail($user_id);

        $message = [
            'msg' => 'User is already registered from todo',
            'user' => $user,
            'todo' => $todo,
            'unregister' => [
                'href' => 'api/v1/todo/registration/' . $todo->id,
                'method' => 'DELETE',
            ]
        ];
        if ($todo->users()->where('users.id', $user->id)->first()) {
            return response()->json($message, 404);
        };

        $user->todos()->attach($todo);

        $response = [
            'msg' => 'User registered for todo',
            'todo' => $todo,
            'user' => $user,
            'unregister' => [
                'href' => 'api/v1/todo/registration/' . $todo->id,
                'method' => 'DELETE'
            ]
        ];

        return response()->json($response, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $todo = todo::findOrFail($id);
        if (! $user = JWTAuth::parseToken()->authenticate()) {
            return response()->json(['msg' => 'User not found'], 404);
        }
        if (!$todo->users()->where('users.id', $user->id)->first()) {
            return response()->json(['msg' => 'user not registered for todo, delete operation not successful'], 401);
        };

        $todo->users()->detach($user->id);

        $response = [
            'msg' => 'User unregistered for todo',
            'todo' => $todo,
            'user' => $user,
            'register' => [
                'href' => 'api/v1/todo/registration',
                'method' => 'POST',
                'params' => 'user_id, todo_id'
            ]
        ];

        return response()->json($response, 200);
    }
}