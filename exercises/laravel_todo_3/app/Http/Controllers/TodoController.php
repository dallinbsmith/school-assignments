<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Session\Store;

class TodoController extends Controller
{
    public function getIndex(Store $session)
    {
        $post = new Post();
        $posts = $post->getPosts($session);
        return view('homepage.index', ['posts' => $posts]);
    }

    public function getHomeIndex(Store $session)
    {
        $post = new Post();
        $posts = $post->getPosts($session);
        return view('homepage.index', ['posts' => $posts]);
    }

    public function getPost(Store $session, $id)
    {
        $post = new Post();
        $post = $post->getPost($session, $id);
        return view('homepage.single', ['post' => $post]);
    }

    public function getHomeCreate()
    {
        return view('homepage.create');
    }

    public function getHomeEdit(Store $session, $id)
    {
        $post = new Post();
        $post = $post->getPost($session, $id);
        return view('homepage.edit', ['post' => $post, 'postId' => $id]);
    }

    public function getHomeDelete(Store $session, $id)
    {
        $post = new Post();
        $post = $post->getPost($session, $id);
        return view('homepage.delete', ['post' => $post, 'postId' => $id]);
    }

    public function postHomeDeleteUpdate(Store $session, $id)
    {
        $post = new Post();
        $post = $post->deletePost($session, $id);
        return redirect()->route('homepage.index');
    }

    public function postHomeCreate(Store $session, Request $request)
    {
        $post = new Post();
        $post->addPost($session, $request->input('title'), $request->input('content'));
        return redirect()->route('homepage.index')->with('info', 'Post created, Title is: ' . $request->input('title'));
    }

    public function postHomeUpdate(Store $session, Request $request)
    {
        $post = new Post();
        $post->editPost($session, $request->input('id'), $request->input('title'), $request->input('content'));
        return redirect()->route('homepage.index')->with('info', 'Post edited, new Title is: ' . $request->input('title'));
    }
}
