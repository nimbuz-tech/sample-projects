<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class VisitorsSeeder extends Seeder
{
    public function run()
    {
        // Make seeder idempotent: clear table before inserting
        $builder = $this->db->table('visitors');
        // Use truncate for a full clean; if you have FK constraints enable the commented lines
        $builder->truncate();
        // If you encounter FK issues, uncomment the following lines:
        // $this->db->query('SET FOREIGN_KEY_CHECKS = 0');
        // $builder->truncate();
        // $this->db->query('SET FOREIGN_KEY_CHECKS = 1');

        $data = [
            [
                'name' => 'John Doe',
                'phone' => '555-0101',
                'purpose' => 'Delivery',
                'vehicle' => 'ABC-123',
                'created_at' => date('Y-m-d H:i:s'),
            ],
            [
                'name' => 'Jane Smith',
                'phone' => '555-0202',
                'purpose' => 'Maintenance',
                'vehicle' => '',
                'created_at' => date('Y-m-d H:i:s'),
            ],
        ];

        $builder->insertBatch($data);
    }
}
