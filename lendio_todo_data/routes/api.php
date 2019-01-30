<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'v1'], function() {
    Route::post('login', [
        'uses' => 'AuthController@login',
    ]);
    Route::post('signup', [
        'uses' => 'AuthController@signup'
    ]);
    Route::post('posttodo', [
        'uses' => 'TodoController@store',
    ]);
    Route::post('todolist', [
        'uses' => 'TodoController@index',
    ]);
    Route::post('postsingle/{id}', [
        'uses' => 'TodoController@show',
    ]);
    Route::post('destroy/{id}', [
        'uses' => 'TodoController@destroy',
    ]);
    Route::post('update/{id}', [
        'uses' => 'TodoController@update',
    ]);
    
    Route::group([
        'middleware' => 'auth:api'
      ], function() {
        Route::get('logout', [
            'uses' => 'AuthController@getLogout',
            'as' => 'authentication.logout'
        ]);
        Route::get('user', [
            'uses' => 'AuthController@getUser',
            'as' => 'authentication.user'
        ]);
      });
});

// Route::resource('todo', 'TodoController', [
//     'except' => ['edit', 'create']
// ]);

// Route::resource('todo/registration', 'RegistrationController', [
//     'only' => ['store', 'destroy']
// ]);

// Route::post('user', [
//     'uses' => 'AuthController@store'
// ]);

// Route::post('user/login', [
//     'uses' => 'AuthController@login'
// ]);
