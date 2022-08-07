<?php

namespace App\Http\Controllers\API;

use GuzzleHttp\Client;
use App\Http\Controllers\Controller;
use App\Http\Requests\NasaSearchRequest;

class NasaController extends Controller
{
    /**
     * Get and return reults from a search term 
     * and media type.
     * 
     * @return json
     */
    public function search(NasaSearchRequest $request)
    {
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

        return response()->json(($body), 200);
        
    }

    /**
     * Get and return the asset by id.
     * 
     * @return json
     */
    public function show($id)
    {
         $client = new Client();

         $res = $client->request('GET', 'https://images-api.nasa.gov/asset/' . $id);
 
         $res->getStatusCode();
  
         $res->getHeader('content-type')[0];
 
         $body = json_decode($res->getBody());
         
         return response()->json(($body), 200);
    }
}
