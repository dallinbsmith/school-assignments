<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [
    'uses' => 'TodoController@index',
    'as' => 'todolist.index'
]);

Route::get('todo/{id}', [
    'uses' => 'TodoController@show',
    'as' => 'todolist.single'
]);

Route::get('login', [
    'uses' => 'AuthController@loginContainer',
    'as' => 'auth.login'
]);

Route::get('signup', [
    'uses' => 'AuthController@signupContainer',
    'as' => 'auth.signup'
]);

Route::post('login/auth', [
    'uses' => 'AuthController@login',
    'as' => 'auth.loginpost'
]);

Route::post('signup/auth', [
    'uses' => 'AuthController@signup',
    'as' => 'auth.signuppost'
]);

Route::group(['prefix' => 'todolist'], function() {

    Route::get('create', [
        'uses' => 'TodoController@createContainer',
        'as' => 'todolist.create'
    ]);

    Route::post('create', [
        'uses' => 'TodoController@store',
        'as' => 'todolist.create'
    ]);

    Route::get('edit/{id}', [
        'uses' => 'TodoController@edit',
        'as' => 'todolist.edit'
    ]);

    Route::post('update/{id}', [
        'uses' => 'TodoController@update',
        'as' => 'todolist.update'
    ]);

    Route::get('delete/{id}', [
        'uses' => 'TodoController@delete',
        'as' => 'todolist.delete'
    ]);

    Route::post('destroy/{id}', [
        'uses' => 'TodoController@destroy',
        'as' => 'todolist.destroy'
    ]);
});


//     Route::resource('todo', 'TodoController', [
//         'except' => ['edit', 'create']
//     ]);

//     Route::resource('todo/registration', 'RegistrationController', [
//         'only' => ['store', 'destroy']
//     ]);

//     Route::post('user', [
//         'uses' => 'AuthController@store'
//     ]);

//     Route::post('user/login', [
//         'uses' => 'AuthController@login'
//     ]);

// Route::middleware('jwt.auth')->get('users', function () {
//     return auth('api')->user();
// });
