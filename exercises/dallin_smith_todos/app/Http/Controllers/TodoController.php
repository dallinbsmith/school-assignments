<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Session\Store;

class TodoController extends Controller
{
    public function getIndex(Store $session)
    {
        $todo = new Todo();
        $todos = $todo->getTodos($session);
        return view('homepage.index', ['todos' => $todos]);
    }

    public function getHomeIndex(Store $session)
    {
        $todo = new Todo();
        $todos = $todo->getTodos($session);
        return view('homepage.index', ['todos' => $todos]);
    }

    public function getTodo(Store $session, $id)
    {
        $todo = new Todo();
        $todo = $todo->getTodo($session, $id);
        return view('homepage.single', ['todo' => $todo]);
    }

    public function getHomeCreate()
    {
        return view('homepage.create');
    }

    public function postHomeCreate(Store $session, Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:5|max:20',
            'content' => 'required|min:10|max:90'
        ]);
        $todo = new Todo();
        $todo->addTodo($session, $request->input('title'), $request->input('content'));
        return redirect()->route('homepage.index');
    }

    public function postHomeUpdate(Store $session, Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:5',
            'content' => 'required|min:10'
        ]);
        $todo = new Todo();
        $todo->editTodo($session, $request->input('id'), $request->input('title'), $request->input('content'));
        return redirect()->route('homepage.index');
    }

    public function getHomeEdit(Store $session, $id)
    {
        $todo = new Todo();
        $todo = $todo->getTodo($session, $id);
        return view('homepage.edit', ['todo' => $todo, 'todoId' => $id]);
    }

    public function getHomeDelete(Store $session, $id)
    {
        $todo = new Todo();
        $todo = $todo->getTodo($session, $id);
        return view('homepage.delete', ['todo' => $todo, 'todoId' => $id]);
    }

    public function postDestroy(Store $session, $id)
    {
        $todo = new Todo();
        $todo = $todo->deleteTodo($session, $id);
        return redirect()->route('homepage.index');
    }

}
