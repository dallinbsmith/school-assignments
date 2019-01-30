<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', [
    'uses' => 'TodoController@getIndex',
    'as' => 'homepage.index'
]);

Route::get('todo/{id}', [
    'uses' => 'TodoController@getTodo',
    'as' => 'homepage.single'
]);

Route::group(['prefix' => 'homepage'], function() {
    Route::get('', [
        'uses' => 'TodoController@getHomeIndex',
        'as' => 'homepage.index'
    ]);

    Route::get('create', [
        'uses' => 'TodoController@getHomeCreate',
        'as' => 'homepage.create'
    ]);

    Route::post('create', [
        'uses' => 'TodoController@postHomeCreate',
        'as' => 'homepage.create'
    ]);

    Route::get('edit/{id}', [
        'uses' => 'TodoController@getHomeEdit',
        'as' => 'homepage.edit'
    ]);

    Route::post('edit', [
        'uses' => 'TodoController@postHomeUpdate',
        'as' => 'homepage.update'
    ]);

    Route::get('delete/{id}', [
        'uses' => 'TodoController@getHomeDelete',
        'as' => 'homepage.delete'
    ]);

    Route::post('destroy/{id}', [
        'uses' => 'TodoController@postDestroy',
        'as' => 'homepage.destroy'
    ]);
});