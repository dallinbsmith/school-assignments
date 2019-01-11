@extends('layouts.master')

@section('content')
    <div class ="container">
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
        <div class = "text-center">    
            @foreach($posts as $post)
                <div class='col-md-5 d-inline-block m-1 pt-3 text-center rounded shadow note-card'>
                    <h2 class='post-title'>{{ $post['title'] }}</h2>
                        <div class = 'col-md-12 text-center'>
                            <p>{{ $post['content'] }}!</p>
                        </div>
                    <div class = "row">
                        <p class = "col-3 offset-1"><a href="{{ route('homepage.single', ['id' => array_search($post, $posts)]) }}"><img src="https://img.icons8.com/ios/60/000000/circled-chevron-down-filled.png"></img></a></p>
                        <p class = "col-4"><a href="{{ route('homepage.edit', ['id' => array_search($post, $posts)]) }}"><img src="<img src="<img src="https://img.icons8.com/ios/60/000000/edit.png">">"></img></a></p>
                        <p class = "col-3">
                            <a  href="{{ route('homepage.delete', ['id' => array_search($post, $posts)]) }}">
                                <img src="https://img.icons8.com/ios/60/000000/cancel-filled.png"></img>
                            </a>
                        </p>
                    </div>
                    <div class ="row bg-dark rounded-bottom p-2"></div>
                </div>    
             @endforeach
        </div>     
    </div>    
@endsection