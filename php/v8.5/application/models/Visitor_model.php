<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Visitor_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
    }

    public function get_all()
    {
        return $this->db->order_by('id', 'DESC')->get('visitors')->result();
    }

    public function get($id)
    {
        return $this->db->get_where('visitors', array('id' => $id))->row();
    }

    public function insert($data)
    {
        $this->db->insert('visitors', $data);
        return $this->db->insert_id();
    }

    public function update($id, $data)
    {
        return $this->db->where('id', $id)->update('visitors', $data);
    }

    public function delete($id)
    {
        return $this->db->where('id', $id)->delete('visitors');
    }

}

