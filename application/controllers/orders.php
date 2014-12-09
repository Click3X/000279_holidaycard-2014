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

		$already_ordered = $this->order_model->get( array("ref_client_id"=>$post["ref_client_id"], "count"=>true) );
		$order_id = $this->order_model->add($post);

		$response = array();

		if( $already_ordered && $already_ordered > 0 ){
			$response["error"] = "Sorry, that gift code has already been used.";
		}else if( !empty($order_id) && $order_id >= 0 ){
			$order_details = $this->order_model->get( array("id"=>$order_id) );
			$response["success"] = true;
			$response["details"] = $order_details;
		} else {
			$response["error"] = "We've had some trouble processing your order. Please try again later.";
		}

		echo json_encode($response);
	}
}