<?php

namespace App;

class Todo
{
    public function getTodos($session)
    {
        if (!$session->has('posts')) {
            $this->createDummyData($session);
        }
        return $session->get('posts');
    }

    public function getTodo($session, $id)
    {
        if (!$session->has('posts')) {
            $this->createDummyData();
        }
        return $session->get('posts')[$id];
    }

    public function addTodo($session, $title, $content)
    {
        if (!$session->has('posts')) {
            $this->createDummyData();
        }
        $todos = $session->get('posts');
        array_push($todos, ['title' => $title, 'content' => $content]);
        $session->put('posts', $todos);
    }

    public function editTodo($session, $id, $title, $content)
    {
         $todos = $session->get('posts');
        $todos[$id] = ['title' => $title, 'content' => $content];
        $session->put('posts', $todos);
    }

    public function deleteTodo($session, $id)
    {
         $todos = $session->get('posts');
        unset($todos[$id]);
        $session->put('posts', $todos);
    }

    private function createDummyData($session)
    {
        $todos = [
            [
                'title' => 'To Start Click New Todo',
            ]
        ];
        $session->put('posts', $todos);
    }
}