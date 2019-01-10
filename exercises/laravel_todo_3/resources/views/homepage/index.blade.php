@extends('layouts.master')

@section('content')
    @if(Session::has('info'))
    <div class="row">
        <div class="col-md-12">
            <p class="alert alert-info">{{ Session::get('info') }}</p>
        </div>
    </div>
    @endif
    <div class="row">
        <div class="col-md-12">
            <a href="{{ route('homepage.create') }}" class="btn btn-success">New Post</a>
        </div>
    </div>
    <hr>
    @foreach($posts as $post)
    <div class="row">
        <div class="col-md-12 text-center">
            <h1 class="post-title">{{ $post['title'] }}</h1>
            <p>{{ $post['content'] }}!</p>
            <p><a href="{{ route('homepage.single', ['id' => array_search($post, $posts)]) }}">Read more...</a></p>
            <p><a href="{{ route('homepage.edit', ['id' => array_search($post, $posts)]) }}">Edit</a></p>
            <p><a href="{{ route('homepage.delete', ['id' => array_search($post, $posts)]) }}">Delete</a></p>

        </div>
    </div>
    <hr>
    @endforeach
@endsection