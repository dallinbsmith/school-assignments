@extends('layouts.master')

@section('content')
    <div class = "container">
    <div class="row">
        <col-md-12>
        <h1>Ooobachacka</h1>
        @if(true)
            <p>displays if true</p>
        @else
            <p>displays if false</p>
        @endif
        <hr>
        @for($i =0; $i < 5; $i++)
            <p>{{$i + 1}} Iteration</p>
        @endfor    
        </hr>
        </col-md-12>
    </div> 
    </div>
@endsection