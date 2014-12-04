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

	public function code($gift_code = ""){
		if( empty($gift_code) ){
			$post = $this->input->post();
			$gift_code = $post["code"];
		}

		$client = $this->client_model->get(array("gift_code"=>$gift_code));
		$client = $client[0];
		
		echo json_encode($client);
	}

	public function createcodes(){
		$clients = $this->client_model->get();

		foreach ($clients as $client) {
			$code = crypt(uniqid(rand(),1)); 
			$code = strip_tags(stripslashes($code)); 
			$code = str_replace(".","",$code); 
			$code = strrev(str_replace("/","",$code)); 
			$code = substr($code,0,4); 
			$code = strtoupper($code);

			$this->client_model->update(array(
				"id"=>$client->id,
				"gift_code"=>$code
			));
		}

		$duplicates = $this->client_model->duplicates("gift_code");

		echo $duplicates == 0 ? "NO DUPLICATES FOUND" : $duplicates. " DUPLICATE CODES FOUND";
	}
}