<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * The model of the specified controller
     */
    protected $model;

    protected $template;


    public function __construct($model = User::class)
    {

        $this->model = $model;

        $this->template = "User";
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $query = User::orderByDesc('updated_at')
                ->paginate(50);
            if ($request->wantsJson()) {
                return ['page_data' => $query];
            } else {
                $message = $request->session()->get('message');
                return Inertia::render("{$this->template}/Index", ['page_data' => $query])->with('message', $message);
            }
        } catch (\Exception $e) {
            $errorMessage = "Error fetching data: " . $e->getMessage();
            if ($request->wantsJson()) {
                return ['error' => $errorMessage];
            } else {
                return redirect()->back()->with("error", $errorMessage);
            }
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        return $this->baseCreate($request);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        //
        return $this->baseStore($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {
        //
        return $this->baseShow($request, $id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
        //
        return $this->baseEdit($request, $id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, $id)
    {
        //
        return $this->baseUpdate($request, $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        //
        return $this->baseDestroy($request, $id);
    }
}
