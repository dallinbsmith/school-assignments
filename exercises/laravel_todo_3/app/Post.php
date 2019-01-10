<?php

namespace App;

class Post
{
    public function getPosts($session)
    {
        if (!$session->has('posts')) {
            $this->createDummyData($session);
        }
        return $session->get('posts');
    }

    public function getPost($session, $id)
    {
        if (!$session->has('posts')) {
            $this->createDummyData();
        }
        return $session->get('posts')[$id];
    }

    public function addPost($session, $title, $content)
    {
        if (!$session->has('posts')) {
            $this->createDummyData();
        }
        $posts = $session->get('posts');
        array_push($posts, ['title' => $title, 'content' => $content]);
        $session->put('posts', $posts);
    }

    public function editPost($session, $id, $title, $content)
    {
         $posts = $session->get('posts');
        $posts[$id] = ['title' => $title, 'content' => $content];
        $session->put('posts', $posts);
    }

    public function deletePost($session, $id)
    {
         $posts = $session->get('posts');
        unset($posts[$id]);
        $session->put('posts', $posts);
    }

    private function createDummyData($session)
    {
        $posts = [
            [
                'title' => 'To Start Click New Todo',
            ]
        ];
        $session->put('posts', $posts);
    }
}