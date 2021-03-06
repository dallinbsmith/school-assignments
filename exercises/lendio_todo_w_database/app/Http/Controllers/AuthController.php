<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;
class AuthController extends Controller
{
    public function getSignUpContainer()
    {
        return view('authentication.signup');
    }
    public function getLoginContainer()
    {
        return view('authentication.login');
    }

    public function testunauth()
    {
        if (Auth::check()){
        return view('authentication.login');
        }
        return view('authentication.signup');
    }

    public function store(Request $request){
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
    }

    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function postsignup(Request $request)
    {
        
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $user->save();

        if ($user->save()) {
            $user->postsignup = [
                'href' => 'api/auth/user/signup',
                'method' => 'POST',
                'params' => 'email, password'
            ];
            $response = [
                'msg' => 'User created',
                'user' => $user
            ];
            return response()->json($response, 201);
        }

        $response =[
            'msg' => 'An error occurred',
            'user' => $user
        ];
        return response()->json($response, 404);

        // return redirect()->route('homepage.index')->with('info', 'Welcome' . $request->input('name'));
        // return redirect()->route('homepage.index');
        // try {
        //             if (! $token = JWTAuth::attempt($credentials)) {
        //                 return response()->json(['msg' => 'Invalid credentials'], 401);
        //             }
        //         } catch (JWTException $e) {
        //             return response()->json(['msg' => 'Could not create token'], 500);
        //         }
    }
  
    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function postLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            // 'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        // if ($request->remember_me)
        //     $token->expires_at = Carbon::now()->addWeeks(1);
        // $token->save();
        return redirect()->route('homepage.index')->with('info', 'Welcome' . $request->input('name'));
        // return response()->json([
        //     'access_token' => $tokenResult->accessToken,
        //     'token_type' => 'Bearer',
        //     'expires_at' => Carbon::parse(
        //         $tokenResult->token->expires_at
        //     )->toDateTimeString()
        // ]);
    }
  
    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function getLogout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
  
    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function getUser(Request $request)
    {
        return response()->json($request->user());
    }
}
