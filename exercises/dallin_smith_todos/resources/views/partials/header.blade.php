<nav class="navbar navbar-expand-lg navbar-dark navbar-main">
        <a class="navbar-brand" href="{{ route('homepage.index')}}">Todo List</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="{{ route('homepage.index')}}">Home <span class="sr-only">(current)</span></a>
            </li>

            {{-- Menu will be expanded in time --}}

            {{-- <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Something Else</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> --}}
          </ul> 
        </div>
        <div class="row pr-5">
                <div class="col-md-12">
                    <a href="{{ route('homepage.create') }}" class="btn new-todo-btn">New Todo</a>
                </div>
            </div>
</nav>