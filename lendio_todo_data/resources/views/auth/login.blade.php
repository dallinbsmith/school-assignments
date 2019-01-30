@extends('layouts.master')

@section('content')
    @include('partials.errors')
    <div class="row">
            <div class="col-md-12 mt-4 text-center">
                <form action="{{route('auth.loginpost')}}" method="post">
                    <div class='col-md-5 d-inline-block m-3 pt-3 rounded shadow note-card'>
                            <div class = "row">
                                <div class ="col-2 pt-2 pl-4">
                                    <img src="https://img.icons8.com/ios/50/000000/edit-file.png"></img>
                                </div> 
                                <div class ="col-10">
                                            <div class="form-group">
                                                <label class = "todo-content" for="email">Email</label>
                                                <input type="text" class="form-control form-control-content" value="" name="email" cols="40" rows="5"></input>
                                            </div>  
                                            <div class="form-group">
                                                <label class = "todo-content" for="password">Password</label>
                                                <input type="text" class="form-control form-control-content" value="" name="password" cols="40" rows="5"></input>
                                            </div>   
                                        <div class = 'pt-1 pr-3 text-left todo-content'>
                                        </div>     
                                        <div class = "row mt-3 mb-4 text-center">
                                             <div class ="col-6">
                                                <a class="btn btn-primary form-button" href="">Cancel</a>
                                            </div>
                                            <div class ="col-6">
                                                <button type="submit" class="btn btn-primary form-button">Confirm</button>
                                            </div>
                                        </div>
                                        <input type="hidden" name="id" value="">
                                        {{ csrf_field() }}
                               </div>
                            </div> 
                        </div>
                </form>
            </div>
        </div>
@endsection