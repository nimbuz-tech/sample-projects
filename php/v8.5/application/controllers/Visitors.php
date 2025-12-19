<?php
defined('BASEPATH') || exit('No direct script access allowed');

class Visitors extends CI_Controller
{
    /**
     * Database instance
     * Declare to avoid dynamic property creation in PHP 8.2+
     * @var CI_DB_query_builder|object|null
     */
    public $db = null;

    /**
     * Session instance
     * Declare to avoid dynamic property creation in PHP 8.2+
     * @var CI_Session|object|null
     */
    public $session = null;

    /**
     * Visitor model instance
     * Declare to avoid dynamic property creation in PHP 8.2+
     * @var Visitormodel|object|null
     */
    public $visitormodel = null;

    public function __construct()
    {
        parent::__construct();
        $this->load->model('visitormodel');
        $this->load->helper(array('url', 'form'));
        // Load env helper (provides loadEnv) and load .env if present
        $this->load->helper('env');
        // Optional: load a .env file located in views/visitors/.env (if used by this app)
        $env_path = APPPATH . 'views/visitors/.env';
        if (file_exists($env_path)) {
            loadEnv($env_path);
        }
        $this->load->library('session');
    }

    public function index()
    {
        $data['visitors'] = $this->visitormodel->get_all();
        $this->load->view('visitors/index', $data);
    }

    public function create()
    {
        if ($this->input->method() === 'post') {
            $payload = array(
                'name' => $this->input->post('name'),
                'phone' => $this->input->post('phone'),
                'purpose' => $this->input->post('purpose'),
                'vehicle' => $this->input->post('vehicle'),
                'created_at' => date('Y-m-d H:i:s'),
            );
            $this->visitormodel->insert($payload);
            $this->session->set_flashdata('message', 'Visitor added');
            redirect('visitors');
        }

        $this->load->view('visitors/form');
    }

    public function edit($id = null)
    {
        if (!$id) { show_404(); }
        if ($this->input->method() === 'post') {
            $payload = array(
                'name' => $this->input->post('name'),
                'phone' => $this->input->post('phone'),
                'purpose' => $this->input->post('purpose'),
                'vehicle' => $this->input->post('vehicle'),
            );
            $this->visitormodel->update($id, $payload);
            $this->session->set_flashdata('message', 'Visitor updated');
            redirect('visitors');
        }

        $data['visitor'] = $this->visitormodel->get($id);
        if (!$data['visitor']) { show_404(); }
        $this->load->view('visitors/form', $data);
    }

    public function delete($id = null)
    {
        if (!$id) { show_404(); }
        $this->visitormodel->delete($id);
        $this->session->set_flashdata('message', 'Visitor removed');
        redirect('visitors');
    }

}
