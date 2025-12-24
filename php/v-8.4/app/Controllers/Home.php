<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        // Redirect root visitors to the dashboard
        return redirect()->to(site_url('dashboard'));
    }
}
