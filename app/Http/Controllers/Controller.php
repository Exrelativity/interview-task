<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Inertia\Inertia;


class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected $model;

    protected $template;

    public function baseIndex(Request $request)
    {
        try {
            $query = forward_static_call([$this->model, 'all'])
                ->orderByDesc('updated_at')
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


    public function baseCreate(Request $request)
    {
        $message = $request->session()->get('message');

        if ($request->wantsJson()) {
            return ['message' => $message];
        }

        return Inertia::render("{$this->template}/Create");
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  Formrequest  $storeRequest
     * 
     */
    public function baseStore(FormRequest $storeRequest)
    {
        // Check if the request wants a JSON response.
        $wantsJson = $storeRequest->wantsJson();
        $validated = $this->stripEmptyCustom($storeRequest->validated());
        try {
            $data = forward_static_call([$this->model, 'Create'], $validated);
            $message = "Entry has been saved.";

            if ($wantsJson) {
                return response()->json(['page_data' => $data, 'message' => $message], 201);
            } else {
                return redirect()->back()->with("message", $message);
            }
        } catch (\Exception $e) {
            if ($wantsJson) {
                return response()->json(['error' => $e->getMessage()], 500);
            } else {
                return redirect()->back()->with("error", "An error occurred while saving the entry. {$e->getMessage()}");
            }
        }
    }


    public function baseShow(Request $request, $id)
    {

        $message = $request->session()->get('message');
        try {
            $data = forward_static_call([$this->model, "find"], $id);
            if (!$data) {
                throw new \Exception("Resource not found.");
            }

            if ($request->wantsJson()) {
                return ["page_data" => $data];
            } else {
                return Inertia::render("{$this->template}/Read", ["page_data" => $data, "message" => $message]);
            }
        } catch (\Exception $e) {
            $errorMessage = $e->getMessage();

            if ($request->wantsJson()) {
                return ["error" => $errorMessage];
            } else {
                return redirect()->back()->with("error", $errorMessage);
            }
        }
    }

    /**
     * Show the form for editing the specified resource.
     * @param  \Illuminate\Foundation\Http\FormRequest $request;
     * 
     */
    public function baseEdit(Request $request, $id)
    {
        $message = $request->session()->get('message');
        try {
            $data = forward_static_call([$this->model, 'find'], $id);
            if (!$data) {
                throw new \Exception("Resource not found.");
            }

            return $request->wantsJson()
                ? ['page_data' => $data, 'message' => $message]
                : Inertia::render("{$this->template}/Edit", ['page_data' => $data, 'message' => $message]);
        } catch (\Exception $e) {
            $errorMessage = $e->getMessage();

            if ($request->wantsJson()) {
                return ['error' => $errorMessage];
            }
            return redirect()->back()->with("error", $errorMessage);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Foundation\Http\FormRequest $request;
     *
     * 
     */

    public function baseUpdate(FormRequest $updateRequest, $id)
    {
        $message = $updateRequest->session()->get('message');
        $validated = $this->stripEmptyCustom($updateRequest->validated());
        try {
            $data = forward_static_call([$this->model, 'find'],  $id)->update($validated);
            $message = "Entry has been updated";
            if ($updateRequest->wantsJson()) {
                return ["page_data" => $data, "message" => $message];
            }

            return redirect()->back()->with("message", $message);
        } catch (\Exception $e) {
            if ($updateRequest->wantsJson()) {
                return ["error" => $e->getMessage()];
            }

            return redirect()->back()->with("error", $e->getMessage());
        }
    }

    public function stripEmptyCustom($data)
    {
        foreach ($data as $key => $value) {
            if (is_array($data[$key])) {
                $data[$key] = $this->stripEmptyCustom($data[$key]);
            }

            if (empty($value)) {
                unset($data[$key]);
            }
        }

        return $data;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Foundation\Http\FormRequest $request;
     * 
     */
    public function baseDestroy(Request $request, $id)
    {
        $model = forward_static_call([$this->model, 'find'], $id);

        if (!$model) {
            $message = "Item not found";
        } else {
            $message = "Item has been deleted";
            $model->delete();
        }

        if ($request->wantsJson()) {
            return ["message" => $message];
        }

        return redirect()->back()->with("message", $message);
    }
}
