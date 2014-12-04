<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Template extends CI_Controller {

	public function index( $templateid = "home" )
	{
		$this->load->model("state_model"); 
	    $this->states = $this->state_model->get();

		$this->load->view( "templates/".$templateid, array("states"=>$this->states) );
	}
	
}