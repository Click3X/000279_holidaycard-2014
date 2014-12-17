<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {
	public function __construct()
	{
	    parent::__construct();
	}

	public function index( $pageid = "home" )
	{	   
		$this->load->view( 'home_view', array( "pageid"=>$pageid ) );
	}

	public function video( $videoid ){
		$this->load->model("video_model");
		$video = $this->video_model->get( array( "id"=>$videoid ) );

		$this->load->view( "video_view", array( "videoid"=>$videoid, "video"=>$video ) );
	}
}