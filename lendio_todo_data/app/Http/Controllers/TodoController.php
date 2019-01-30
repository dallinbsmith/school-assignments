<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Session\Store;

use App\Http\Requests;

use App\Todo;

class TodoController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth:api');
    }

// Index recieve all todos in initial database

public function createContainer()
{
    return view('todolist.create');
}

    public function index()
    {
        $todos = Todo::all();
        foreach ($todos as $todo) {
            $todosArr[] = ['title' => $todo->title, 'content' => $todo->content, 'id' => $todo->id];
            // $todo->view_todo = [
            //     'href' => 'api/v1/todo/' . $todo->id,
            //     'method' => 'GET'
            // ];
        }

        $response = [
            'msg' => 'List of all Todos',
            'todos' => $todos
        ];
        
        // return response()->json($todos, 201);
        return view('todolist.index', ['todos' => $todosArr]);
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
            'title' => 'required',
            'content' => 'required',
        ]);

        // if (! $user = JWTAuth::parseToken()->authenticate()) {
        //     return response()->json(['msg' => 'User not found'], 404);
        // }

        $title = $request->input('title');
        $content = $request->input('content');
        // $user_id = $user->id;

        $todo = new Todo([
            'title' => $title,
            'content' => $content
        ]);
        if ($todo->save()) {
            // ***THIS CODE ATTACHES THE TODO TO THE USERID****
            $todo->users()->attach($user_id);

            // $todo->view_todo = [
            //     'href' => 'api/v1/todo/' . $todo->id,
            //     'method' => 'GET'
            // ];  
            // $message = [
            //     'msg' => 'todo created',
            //     'todo' => $todo
            // ];

            // return response()->json($todo, 201);

            $todos = Todo::all();
            foreach ($todos as $todo) {
                $todosArr[] = ['title' => $todo->title, 'content' => $todo->content, 'id' => $todo->id];
                // $todo->view_todo = [
                //     'href' => 'api/v1/todo/' . $todo->id,
                //     'method' => 'GET'
                // ];
            }

            return view('todolist.index', ['todos' => $todosArr]);
        }

        $response = [
            'msg' => 'Error during creation'
        ];

        return response()->json($response, 404);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $todo = Todo::with('users')->where('id', $id)->firstOrFail();
        $todo->view_todos = [
            'href' => 'api/v1/todo',
            'method' => 'GET'
        ];

        // $response = [
        //     'msg' => 'todo information',
        //     'todo' => $todo
        // ];
        // return response()->json($todo, 200);
        return response()->json($todo, 404);
        return view('todolist.single', ['todo' => $todo]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required',
        ]);

        // if (! $user = JWTAuth::parseToken()->authenticate()) {
        //     return response()->json(['msg' => 'User not found'], 404);
        // }

        $title = $request->input('title');
        $content = $request->input('content');
        // $user_id = $user->id;

        $todo = Todo::with('users')->findOrFail($id);

        // if (!$todo->users()->where('users.id', $user_id)->first()) {
        //     return response()->json(['msg' => 'user not registered for todo, update not successful'], 401);
        // };
        $todo->title = $title;
        $todo->content = $content;
        if (!$todo->update()) {
            return response()->json(['msg' => 'Error during updating'], 404);
        }

        // $todo->view_todo = [
        //     'href' => 'api/v1/todo/' . $todo->id,
        //     'method' => 'GET'
        // ];

        // $response = [
        //     'msg' => 'todo updated',
        //     'todo' => $todo
        // ];

        $todos = Todo::all();
            foreach ($todos as $todo) {
                $todosArr[] = ['title' => $todo->title, 'content' => $todo->content, 'id' => $todo->id];
                // $todo->view_todo = [
                //     'href' => 'api/v1/todo/' . $todo->id,
                //     'method' => 'GET'
                // ];
            }

            return view('todolist.index', ['todos' => $todosArr]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */

    public function delete($id)
    {
        $todo = Todo::findOrFail($id);

        // $response = [
        //     'msg' => 'todo information',
        //     'todo' => $todo
        // ];
        // return response()->json($todo, 200);
        return view('todolist.delete', ['todo' => $todo]);
    }

    public function edit($id)
    {
        $todo = Todo::findOrFail($id);

        // $response = [
        //     'msg' => 'todo information',
        //     'todo' => $todo
        // ];
        // return response()->json($todo, 200);
        return view('todolist.edit', ['todo' => $todo]);
    }

    public function destroy($id)
    {
        $todo = Todo::findOrFail($id);
        // if (! $user = JWTAuth::parseToken()->authenticate()) {
        //     return response()->json(['msg' => 'User not found'], 404);
        // }
        // if (!$todo->users()->where('users.id', $user->id)->first()) {
        //     return response()->json(['msg' => 'user not registered for todo, update not successful'], 401);
        // };
        $users = $todo->users;
        $todo->users()->detach();
        if (!$todo->delete()) {
            foreach ($users as $user) {
                $todo->users()->attach($user);
            }
            return response()->json(['msg' => 'deletion failed'], 404);
        }

        $response = [
            'msg' => 'todo deleted',
            'create' => [
                'href' => 'api/v1/todo',
                'method' => 'POST',
                'params' => 'title, content'
            ]
        ];

        $todos = Todo::all();
        foreach ($todos as $todo) {
            $todosArr[] = ['title' => $todo->title, 'content' => $todo->content, 'id' => $todo->id];
            // $todo->view_todo = [
            //     'href' => 'api/v1/todo/' . $todo->id,
            //     'method' => 'GET'
            // ];
        }

        return view('todolist.index', ['todos' => $todos]);
    }
    
}