<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Health extends BaseController
{
    public function index()
    {
        // Simple health check
        return $this->response->setStatusCode(200)->setBody('OK');
    }
}
