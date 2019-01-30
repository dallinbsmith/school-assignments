<?php
use Illuminate\Http\Request;

Route::group(['prefix' => 'auth'], function() {
    Route::post('postlogin', [
        'uses' => 'AuthController@postlogin',
        'as' => 'authentication.postlogin'
    ]);
    Route::post('postsignup', [
        'uses' => 'AuthController@postsignup',
        'as' => 'authentication.postsignup'
    ]);
    Route::post('posttodo', [
        'uses' => 'TestingController@store',
    ]);
    Route::post('todoindex', [
        'uses' => 'TodoController@todoindex',
    ]);
    Route::post('todoshow', [
        'uses' => 'TodoController@todoshow',
    ]);
    Route::post('tododestroy', [
        'uses' => 'TodoController@tododestroy',
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

// Route::post('user1', [
//     'uses' => 'AuthController@store'
// ]);

// Route::post('user/login', [
//     'uses' => 'AuthController@login'
// ]);


// Route::group([
//     'prefix' => 'auth'
// ], function () {
//     Route::post('login', 'AuthController@login');
//     Route::post('signup', 'AuthController@signup');
  
//     Route::group([
//       'middleware' => 'auth:api'
//     ], function() {
//         Route::get('logout', 'AuthController@logout');
//         Route::get('user', 'AuthController@user');
//     });
// });
