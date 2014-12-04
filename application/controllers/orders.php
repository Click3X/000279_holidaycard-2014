<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Orders extends CI_Controller {
	public function __construct()
	{
	    parent::__construct();

	    $this->load->model("order_model");
	}

	public function index()
	{	    
		$orders = $this->order_model->get();

		var_dump($orders);
	}

	public function add(){
		$post = $this->input->post();

		$result = $this->order_model->add($post);

		echo json_encode($result);
	}
}