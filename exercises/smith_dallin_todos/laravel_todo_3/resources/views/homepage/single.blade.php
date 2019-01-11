@extends('layouts.master')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <p class="quote">{{ $todo['title'] }}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <p>{{ $todo['content'] }}</p>
        </div>
    </div>
@endsection