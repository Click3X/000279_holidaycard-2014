<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {
	public function __construct()
	{
	    parent::__construct();

	    $this->load->model("client_model");
	}

	public function index( $pageid = "home" )
	{	    
		$this->load->view( 'home_view', array( "pageid"=>$pageid ) );
	}

	public function video( $videoid ){
		$this->load->view("video_view", array("videoid"=>$videoid));
	}
}