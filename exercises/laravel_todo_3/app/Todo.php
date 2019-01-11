<?php

namespace App;

class Todo
{
    public function getTodos($session)
    {
        if (!$session->has('posts')) {
            $this->firstLogon($session);
        }
        return $session->get('posts');
    }

    public function getTodo($session, $id)
    {
        if (!$session->has('posts')) {
            $this->firstLogon();
        }
        return $session->get('posts')[$id];
    }

    public function addTodo($session, $title, $content)
    {
        if (!$session->has('posts')) {
            $this->firstLogon();
        }
        $posts = $session->get('posts');
        array_push($posts, ['title' => $title, 'content' => $content]);
        $session->put('posts', $posts);
    }

    public function editTodo($session, $id, $title, $content)
    {
         $posts = $session->get('posts');
        $posts[$id] = ['title' => $title, 'content' => $content];
        $session->put('posts', $posts);
    }

    public function deleteTodo($session, $id)
    {
         $posts = $session->get('posts');
        unset($posts[$id]);
        $session->put('posts', $posts);
    }

    private function firstLogon($session)
    {
        $posts = [
            [
                'title' => 'Enter your first Todo',
                'content' => 'Enter your first Todo'
            ]
        ];
        $session->put('posts', $posts);
    }
}