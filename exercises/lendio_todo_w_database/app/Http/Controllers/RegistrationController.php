<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $meeting_id = $request->input('meeting_id');
       $user_id = $request->input('user_id');

       $meeting = [
           'title' => 'Title',
           'content' => 'Content',
           'view_todo' => [
               'href' => 'api/auth/todo/1',
               'method' => 'GET'
            ]
        ];

        $user = [
            'name' => 'Name'
        ];

        $response = [
            'msg' => 'User registered for todo',
            'todo' => $todo,
            'user' => $user,
            'unregister' => [
                'href' => 'api/auth/todo/1',
                'method' => 'DELETe'
                ]
            ];

        return response()->json($response,201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $meeting = [
            'title' => 'Title',
            'content' => 'Content',
            'view_todo' => [
                'href' => 'api/auth/todo/1',
                'method' => 'GET'
            ]
        ];

        $user = [
            'name' => 'Name'
        ];

        $response = [
            'msg' => 'User unregistered for todo',
            'meeting' => $meeting,
            'user' => $user,
            'register' => [
                'href' => 'api/auth/todo/registration',
                'method' => 'POST',
                'params' => 'user_id, todo_id'
            ]
        ];

        return response()->json($response,200);    
    }
}
