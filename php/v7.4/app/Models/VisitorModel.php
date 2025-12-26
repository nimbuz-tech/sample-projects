<?php

namespace App\Models;

use CodeIgniter\Model;

class VisitorModel extends Model
{
    protected $table = 'visitors';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name', 'phone', 'purpose', 'vehicle', 'created_at'];
    protected $useTimestamps = false;
}
