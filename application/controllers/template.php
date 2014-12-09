<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Template extends CI_Controller {

	public function index( $templateid = "home" )
	{
		$data = array();

		if($templateid == "tshirt"){
			$this->load->model("state_model"); 
		    $data["states"] = $this->state_model->get();

		    $this->load->model("tshirt_model");
			$data["tshirts"] = $this->tshirt_model->get();
		}

		$this->load->view( "templates/".$templateid, $data );
	}
	
}