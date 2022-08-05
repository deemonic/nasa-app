<?php

namespace App\Http\Controllers\API;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\NasaSearchRequest;
use Illuminate\Support\Facades\Validator;

class NasaController extends Controller
{
    public function search(NasaSearchRequest $request)
    {
        
        // Call the NASA api
        $client = new Client();
        $res = $client->request('GET', 'https://images-api.nasa.gov/search', [
            'query' => [
                'q' => $request->q,
                'media_type' => isset($request->media_type) ? $request->media_type : '',
            ],
            
        ]);

        $res->getStatusCode();
 
        $res->getHeader('content-type')[0];

        $body = json_decode($res->getBody());
        
        // Return the response
        return response()->json(($body), 200);
        
    }
}
