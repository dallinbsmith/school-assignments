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
        $post = new Todo();
        $posts = $post->getTodos($session);
        return view('homepage.index', ['posts' => $posts]);
    }

    public function getHomeIndex(Store $session)
    {
        $post = new Todo();
        $posts = $post->getTodos($session);
        return view('homepage.index', ['posts' => $posts]);
    }

    public function getTodo(Store $session, $id)
    {
        $post = new Todo();
        $post = $post->getTodo($session, $id);
        return view('homepage.single', ['post' => $post]);
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
        $post = new Todo();
        $post->addTodo($session, $request->input('title'), $request->input('content'));
        return redirect()->route('homepage.index');
    }

    public function postHomeUpdate(Store $session, Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:5',
            'content' => 'required|min:10'
        ]);
        $post = new Todo();
        $post->editTodo($session, $request->input('id'), $request->input('title'), $request->input('content'));
        return redirect()->route('homepage.index');
    }

    public function getHomeEdit(Store $session, $id)
    {
        $post = new Todo();
        $post = $post->getTodo($session, $id);
        return view('homepage.edit', ['post' => $post, 'postId' => $id]);
    }

    public function getHomeDelete(Store $session, $id)
    {
        $post = new Todo();
        $post = $post->getTodo($session, $id);
        return view('homepage.delete', ['post' => $post, 'postId' => $id]);
    }

    public function postHomeDeleteNow(Store $session, $id)
    {
        $post = new Todo();
        $post = $post->deleteTodo($session, $id);
        return redirect()->route('homepage.index');
    }

}
