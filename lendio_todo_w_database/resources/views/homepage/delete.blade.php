@extends('layouts.master')

@section('content')
    @include('partials.errors')
    <div class="row">
            <div class="col-md-12 mt-4 text-center">
            <form action="{{ route('homepage.destroy', $todoId)}}" method="post">
                    <div class='col-md-5 d-inline-block m-3 pt-3 rounded shadow note-card'>
                        <div class = "row">
                             <div class ="col-2 pt-2 pl-4">
                                    <img src="https://img.icons8.com/ios/40/000000/delete-file.png"></img>
                             </div> 
                                <div class ="col-10">
                                    <div class="form-group">
                                        <h5 class="form-group mb-5 todo-content">Are you sure you wish to delete this todo?</h5>
                                        <h4 class="todo-title">{{ $todo['title'] }}</h4>
                                        <h6 class="todo-content">{{ $todo['content'] }}</h6>
                                    </div>
                                        <div class = "row mt-5 mb-4 text-center">
                                            <div class ="col-6">
                                                <a class="btn btn-primary form-button" href="{{ route('homepage.index')}}">Cancel</a>
                                            </div>
                                            <div class ="col-6">
                                               <button type="submit" class="btn btn-primary form-button">Delete</button>
                                          </div>
                                        </div>
                                {{ csrf_field() }}
                             </div>
                       </div> 
                    </div
            </form>
        </div>
    </div>
@endsection