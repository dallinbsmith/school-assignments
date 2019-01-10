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
        $posts = $post->getPosts($session);
        return view('homepage.index', ['posts' => $posts]);
    }

    public function getAdminIndex(Store $session)
    {
        $post = new Todo();
        $posts = $post->getPosts($session);
        return view('homepage.index', ['posts' => $posts]);
    }

    public function getPost(Store $session, $id)
    {
        $post = new Todo();
        $post = $post->getPost($session, $id);
        return view('homepage.post', ['post' => $post]);
    }

    public function getAdminCreate()
    {
        return view('homepage.create');
    }

    public function getAdminEdit(Store $session, $id)
    {
        $post = new Todo();
        $post = $post->getPost($session, $id);
        return view('homepage.edit', ['post' => $post, 'postId' => $id]);
    }

    public function postAdminCreate(Store $session, Request $request)
    {
        $post = new Todo();
        $post->addPost($session, $request->input('title'), $request->input('content'));
        return redirect()->route('homepage.index')->with('info', 'Todo created, Title is: ' . $request->input('title'));
    }

    public function postAdminUpdate(Store $session, Request $request)
    {
        $post = new Todo();
        $post->editPost($session, $request->input('id'), $request->input('title'), $request->input('content'));
        return redirect()->route('homepage.index')->with('info', 'Post edited, new Title is: ' . $request->input('title'));
    }
    
}