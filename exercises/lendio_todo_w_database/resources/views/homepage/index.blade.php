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
        <div class = "text-center auto mt-5">    
            @foreach($todos as $todo)
                <div class='col-lg-5 d-inline-block m-3 pt-3 rounded shadow note-card'>
                    <div class = "row">
                        <div class ="col-2 pt-2 pl-3">
                            <img src="https://img.icons8.com/ios/40/000000/document.png"></img>
                        </div> 
                        <div class ="col-10">
                            <h5 class='mt-2 text-left pr-3 todo-title'>{{ $todo['title'] }}</h5>   
                                <div class = 'pt-1 pr-3 text-left todo-content todo-content-height'>
                                    <p>{{ $todo['content'] }}</p>
                                </div>     
                                <div class = "row mt-4 mb-2 mr-2">
                                    <p class = "col-4"><a href="{{ route('homepage.single', ['id' => array_search($todo, $todos)]) }}"><img src="https://img.icons8.com/ios/60/000000/circled-chevron-down-filled.png"></img></a></p>
                                    <p class = "col-4">
                                        <a href="{{ route('homepage.edit', ['id' => array_search($todo, $todos)]) }}">
                                            <svg class ="edit-button" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 224 224" width="53" height="53" style="fill: rgb(0, 0, 0);"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"/><path d="M112,224c-61.85589,0 -112,-50.14411 -112,-112v0c0,-61.85589 50.14411,-112 112,-112v0c61.85589,0 112,50.14411 112,112v0c0,61.85589 -50.14411,112 -112,112z" fill="#000000"/><g fill="#ffffff"><g id="surface1"><path d="M155.02214,57.38981c-2.95873,0 -5.90817,1.15937 -8.162,3.4132l-1.9292,1.9292l16.324,16.324c-0.00927,0.00927 1.9292,-1.9292 1.9292,-1.9292c4.51693,-4.51693 4.50765,-11.81635 0,-16.324c-2.2631,-2.25383 -5.20327,-3.4132 -8.162,-3.4132zM141.29514,66.96161c-0.53795,0.0742 -1.0388,0.34317 -1.4098,0.742l-77.0196,77.0938c-0.30607,0.27825 -0.53795,0.63997 -0.6678,1.0388l-4.7488,17.808c-0.21333,0.8162 0.02783,1.67877 0.62143,2.27237c0.5936,0.5936 1.45617,0.83475 2.27237,0.62143l17.808,-4.7488c0.39883,-0.12985 0.76055,-0.36173 1.0388,-0.6678l77.0938,-77.0196c0.94605,-0.91823 0.95533,-2.43005 0.0371,-3.3761c-0.91823,-0.94605 -2.43005,-0.95533 -3.3761,-0.0371l-76.6486,76.6486l-9.646,-9.646l76.6486,-76.6486c0.71417,-0.68635 0.9275,-1.75297 0.52867,-2.66193c-0.39882,-0.90895 -1.31705,-1.47472 -2.30947,-1.41907c-0.0742,0 -0.1484,0 -0.2226,0z"/></g></g></g></svg>
                                        </a>
                                    </p>
                                    <p class = "col-4">
                                        <a  href="{{ route('homepage.delete', ['id' => array_search($todo, $todos)]) }}">
                                            <img src="https://img.icons8.com/ios/60/000000/cancel-filled.png"></img>
                                        </a>
                                    </p>
                                </div>
                       </div>
                    </div> 
                </div>   
             @endforeach
             <div class="row mt-5 text-left">
                    <div class="col-md-12">
                        <a href="{{ route('homepage.create') }}">
                            <img src="https://img.icons8.com/ios/40/000000/plus.png"></img>
                        </a>
                    </div>
                </div>
        </div>     
    </div>    
@endsection