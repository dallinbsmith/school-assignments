<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Todo;

class TodoController extends Controller
{
    public function __construct()
    {

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function todoindex()
    {
        $todos = Todo::all();
        foreach ($todos as $todo) {
            $todo->view_todo = [
                'href' => 'api/auth/todo/' . $meeting->id,
                'method'=> 'GET'
            ];
        }

        $response = [
            'msg' => 'List of all Todos',
            'todos' => $todos
        ];
        return response()->json($response,200); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function todostore(Request $request)
    {
        $title = $request->input('title');
        $content = $request->input('content');
        $user_id = $request->input('user_id');

        $todo = new Todo([
            'title' => $title,
            'content' => $content
        ]);
        if ($todo->save()){
            $todo->users()->attach($user_id);
            $todo->view_todo = [
                'href' => 'api/auth/todo/' . $todo->id,
                'method' => 'GET'
            ];
            $todo = [
                'msg' => 'Todo created',
                'todo' => $todo
            ];
            return response()->json($todo,201);
        }

        // $todo = [
        //     'title' => $title,
        //     'content' => $content,
        //     'user_id' => $user_id,
        //     'view_todo' => [
        //         'href' => 'api/auth/todo/1',
        //         'method' => 'GET'
        //     ]
        // ];

        // $response = [
        //     'msg' => 'Todo created',
        //     'todo' => $todo,
        // ];
        // return response()->json($response,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function todoshow($id)
    {
        $todo = Todo::with('users')->where('id', $id)->firstOrFail();
        $todo->view_todos = [
            'href' => 'api/auth/meeting',
            'method'=> 'GET'
        ];

        $response = [
            'msg' => 'Todo information',
            'todo' => $todo
        ];
        return response()->json($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, $id)
    // {
    //     $title = $request->input('title');
    //     $content = $request->input('content');
    //     $user_id = $request->input('user_id');
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function tododestroy($id)
    {
        $response = [
            'msg' => 'todo deleted',
            'create' => [
                'href' => 'api/auth/todo',
                'method' => 'POST',
                'params' => 'title, content, time'
                ]
            ];

        return response()->json($response, 200);
    }
}
