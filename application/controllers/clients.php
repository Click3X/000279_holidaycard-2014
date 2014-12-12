<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Clients extends CI_Controller {
	public function __construct()
	{
	    parent::__construct();

	    $this->load->model("client_model");
	}

	public function index()
	{	    
		$clients = $this->client_model->get();

		var_dump($clients);
	}

	public function code(){
		$post = $this->input->post();

		$client = $this->client_model->get( array("gift_code"=>$post["code"]) );
		$response = array();

		if( !empty($client) && count($client) > 0 ){
			$client = $client[0];

			$this->load->model("order_model");
			$already_ordered = $this->order_model->get( array("ref_client_id"=>$client->id, "count"=>true) );

			if( $already_ordered && $already_ordered > 0 ){
				$response = array("error"=>"Sorry, that gift code has already ben used.");
			}else{
				$response = array("success"=>true, "data"=>$client);
			}
		}else{
			$response = array("error"=>"Sorry, that's not a valid gift code.");
		}
		
		echo json_encode($response);
	}

	// public function createcodes(){
	// 	$clients = $this->client_model->get();

	// 	foreach ($clients as $client) {
	// 		$code = crypt( uniqid(rand(),1) ); 	
	// 		$code = strip_tags(stripslashes($code)); 
	// 		$code = str_replace(".","",$code); 
	// 		$code = strrev(str_replace("/","",$code)); 
	// 		$code = substr($code,0,4); 
	// 		$code = strtoupper($code);

	// 		$this->client_model->update(array(
	// 			"id"=>$client->id,
	// 			"gift_code"=>$code
	// 		));
	// 	}

	// 	$duplicates = $this->client_model->duplicates("gift_code");

	// 	echo $duplicates == 0 ? "NO DUPLICATES FOUND" : $duplicates. " DUPLICATE CODES FOUND";
	// }
}