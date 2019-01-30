@extends('layouts.master')

@section('content')
    @include('partials.errors')
    <div class="row">
        <div class="col-md-12 mt-4 text-center">
            <form action="{{ route('authentication.postlogin') }}" method="post">
                <div class='col-md-5 d-inline-block m-3 pt-3 rounded shadow note-card'>
                        <div class = "row">
                            <div class ="col-2 pt-2 pl-4">
                                <img src="https://img.icons8.com/ios/40/000000/new-file.png"></img>
                            </div> 
                            <div class ="col-10">
                                        <div class="form-group">
                                            <label class = "todo-content" for="content">Email</label>
                                            <input type="text" class="form-control" id="email" name="email">
                                        </div> 
                                        <div class="form-group">
                                            <label class="todo-title" for="title">Password</label>
                                            <input type="text" class="form-control" id="password" name="password">
                                        </div>
                                        {{-- <div class="form-group">
                                            <label class="todo-title" for="title">Remember Me?</label>
                                            <input type="checkbox" value="true" class="form-control" id="remember_me" name="remember_me">
                                        </div>  --}}
                                    <div class = 'pt-1 pr-3 text-left todo-content'>
                                    </div>     
                                    <div class = "row mt-3 mb-4 text-center">
                                         <div class ="col-6">
                                            <a class="btn btn-primary form-button" href="{{ route('homepage.index')}}">Cancel</a>
                                        </div>
                                        <div class ="col-6">
                                            <button type="submit" class="btn btn-primary form-button">Create</button>
                                        </div>
                                    </div>
                                    {{ csrf_field() }}
                           </div>
                        </div> 
                    </div>
            </form>
        </div>
    </div>
@endsection