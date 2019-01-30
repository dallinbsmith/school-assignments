@extends('layouts.master')

{{-- More to expand on this page for analyzing and assessing individual Todos --}}

@section('content')
    @include('partials.errors')
    <div class="row">
            <div class="col-md-12 mt-4 text-center">
                  <div class='col-md-5 d-inline-block m-3 pt-3 rounded shadow note-card'>
                       <div class = "row">
                          <div class ="col-12">
                              <div class="form-group">
                                  <h4 class="todo-title">{{ $todo['title'] }}</h4>
                                   <h6 class="todo-content">{{ $todo['content'] }}</h6>
                                    </div>
                                   <div class = "row mt-5 mb-4 text-center">
                                       <div class ="col-12">
                                           <a class="btn btn-primary form-button" href="{{ route('homepage.index')}}">Return</a>
                                          </div>
                                    </div>
                                {{ csrf_field() }}
                             </div>
                       </div> 
                </div
        </div>
    </div>
@endsection