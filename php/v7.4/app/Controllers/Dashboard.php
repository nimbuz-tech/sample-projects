<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\VisitorModel;

class Dashboard extends BaseController
{
    public function index()
    {
        $visitorModel = new VisitorModel();

        // Totals
        $totalVisitors = $visitorModel->countAll();

        // Today count
        $todayVisitors = $visitorModel
            ->where('DATE(created_at) = CURDATE()')
            ->countAllResults(false);

        // Recent visitors
        $recent = $visitorModel->orderBy('created_at', 'DESC')->findAll(10);

        // Last 7 days stats
        $results = $visitorModel
            ->select("DATE(created_at) as d, COUNT(*) as c")
            ->where("created_at >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)")
            ->groupBy('d')
            ->orderBy('d', 'ASC')
            ->findAll();

        $days = [];
        $counts = [];
        // build last 7 days labels
        for ($i = 6; $i >= 0; $i--) {
            $day = date('Y-m-d', strtotime("-{$i} days"));
            $days[$day] = 0;
        }

        foreach ($results as $r) {
            $days[$r['d']] = (int)$r['c'];
        }

        $labels = array_keys($days);
        $data = array_values($days);

        return view('dashboard/index', [
            'totalVisitors' => $totalVisitors,
            'todayVisitors' => $todayVisitors,
            'recent' => $recent,
            'chartLabels' => $labels,
            'chartData' => $data,
        ]);
    }
}
