{{-- @extends('layouts.master')

@section('content')
    @include('partials.errors')
    <div class="row">
        <div class="col-md-12">
            <form action="{{ route('homepage.update') }}" method="post">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input
                            type="text"
                            class="form-control"
                            id="title"
                            name="title"
                            value="{{ $post['title'] }}">
                </div>
                <div class="form-group">
                    <label for="content">Content</label>
                    <input
                            type="text"
                            class="form-control"
                            id="content"
                            name="content"
                            value="{{ $post['content'] }}">
                </div>
                {{ csrf_field() }}
                
                <input type="hidden" name="id" value="{{ $todoId }}">
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
@endsection --}}

@extends('layouts.master')

@section('content')
    @include('partials.errors')
    <div class="row">
            <div class="col-md-12 mt-4 text-center">
                <form action="{{ route('homepage.update')}}" method="post">
                    <div class='col-md-5 d-inline-block m-3 pt-3 rounded shadow note-card'>
                            <div class = "row">
                                <div class ="col-2 pt-2 pl-4">
                                    <img src="https://img.icons8.com/ios/40/000000/new-file.png"></img>
                                </div> 
                                <div class ="col-10">
                                        <div class="form-group">
                                                <label class="post-title" for="title">Title</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="title"
                                                    name="title"
                                                    value="{{ $post['title'] }}">
                                            </div>
                                            <div class="form-group">
                                                <label class = "post-content" for="content">Content</label>
                                                <input type="text" class="form-control form-control-content" id="content" value="{{ $post['content'] }}" name="content" cols="40" rows="5"></input>
                                            </div>  
                                        <div class = 'pt-1 pr-3 text-left post-content'>
                                        </div>     
                                        <div class = "row mt-3 mb-4 text-center">
                                            <div class ="col-6">
                                                <button type="submit" class="btn btn-primary form-button">Post</button>
                                            </div>
                                            <div class ="col-6">
                                                <button type="submit" class="btn btn-primary form-button">Post</button>
                                            </div>
                                        </div>
                                        <input type="hidden" name="id" value="{{ $postId }}">
                                        {{ csrf_field() }}
                               </div>
                            </div> 
                        </div>
                </form>
            </div>
        </div>
@endsection