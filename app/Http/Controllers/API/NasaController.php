<?php

namespace App\Http\Controllers\API;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\NasaSearchRequest;

class NasaController extends Controller
{
    public function search(Request $request)
    {
        dd($request);
        // Validate the request
        //$request->validate();

        // Call the NASA api
        $client = new Client();
        $res = $client->request('GET', 'https://images-api.nasa.gov/search', [
            'query' => [
                'q' => $request->q
            ],
            
        ]);

        $res->getStatusCode();
 
        $res->getHeader('content-type')[0];

        $body = json_decode($res->getBody());
        
        // Return the response
        return response()->json(($body), 200);
        
    }
}
