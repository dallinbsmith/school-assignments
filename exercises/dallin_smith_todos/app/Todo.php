<?php

namespace App;

class Todo
{
    public function getTodos($session)
    {
        if (!$session->has('todos')) {
            $this->firstLogon($session);
        }
        return $session->get('todos');
    }

    public function getTodo($session, $id)
    {
        if (!$session->has('todos')) {
            $this->firstLogon();
        }
        return $session->get('todos')[$id];
    }

    public function addTodo($session, $title, $content)
    {
        if (!$session->has('todos')) {
            $this->firstLogon();
        }
        $todos = $session->get('todos');
        array_push($todos, ['title' => $title, 'content' => $content]);
        $session->put('todos', $todos);
    }

    public function editTodo($session, $id, $title, $content)
    {
         $todos = $session->get('todos');
        $todos[$id] = ['title' => $title, 'content' => $content];
        $session->put('todos', $todos);
    }

    public function deleteTodo($session, $id)
    {
         $todos = $session->get('todos');
        unset($todos[$id]);
        $session->put('todos', $todos);
    }

    private function firstLogon($session)
    {
        $todos = [
            [
                'title' => 'Enter your first Todo',
                'content' => 'Click on the plus button below. Or the "New Todo" button in the Navigation to get started!',
            ]
        ];
        $session->put('todos', $todos);
    }
}