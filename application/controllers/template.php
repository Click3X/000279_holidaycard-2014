<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Template extends CI_Controller {

	public function index( $templateid = "home" )
	{
		$this->load->view( "templates/".$templateid );
	}
	
}