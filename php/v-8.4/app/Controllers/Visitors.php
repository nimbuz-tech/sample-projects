<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\VisitorModel;

class Visitors extends ResourceController
{
    protected $modelName = 'App\Models\VisitorModel';
    protected $format = 'json';

    public function index()
    {
        $visitors = $this->model->orderBy('created_at', 'DESC')->findAll();
        return $this->respond($visitors);
    }

    public function show($id = null)
    {
        $visitor = $this->model->find($id);
        if (!$visitor) return $this->failNotFound('Visitor not found.');
        return $this->respond($visitor);
    }

    public function create()
    {
        $data = $this->request->getJSON(true) ?? $this->request->getPost();
        if (!$data) return $this->failValidationErrors('No input provided.');

        // Validation rules
        $rules = [
            'name' => 'required|min_length[2]|max_length[255]',
            'phone' => 'permit_empty|max_length[50]',
            'purpose' => 'permit_empty|max_length[255]',
            'vehicle' => 'permit_empty|max_length[255]',
        ];

        $validation = \Config\Services::validation();
        $validation->setRules($rules);

        if (!$validation->run($data)) {
            return $this->failValidationErrors($validation->getErrors());
        }

        $data['created_at'] = date('Y-m-d H:i:s');
        $id = $this->model->insert($data);
        $visitor = $this->model->find($id);

        return $this->respondCreated($visitor);
    }

    public function update($id = null)
    {
        $data = $this->request->getJSON(true) ?? $this->request->getRawInput();
        if (!$data) return $this->failValidationErrors('No input provided.');

        $this->model->update($id, $data);
        $visitor = $this->model->find($id);

        return $this->respond($visitor);
    }

    public function delete($id = null)
    {
        $visitor = $this->model->find($id);
        if (!$visitor) return $this->failNotFound('Visitor not found.');

        $this->model->delete($id);
        return $this->respondDeleted(['id' => $id, 'message' => 'Visitor deleted.']);
    }
}
