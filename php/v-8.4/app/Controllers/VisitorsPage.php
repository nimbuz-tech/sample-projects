<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\VisitorModel;

class VisitorsPage extends BaseController
{
    public function all()
    {
        $model = new VisitorModel();
        $visitors = $model->orderBy('created_at', 'DESC')->findAll();

        return view('visitors/all', [
            'visitors' => $visitors,
        ]);
    }

    public function total()
    {
        $model = new VisitorModel();
        $total = $model->countAll();
        $today = $model->where('DATE(created_at) = CURDATE()')->countAllResults(false);

        return view('visitors/total', [
            'total' => $total,
            'today' => $today,
        ]);
    }

    public function add()
    {
        return view('visitors/add');
    }
}
