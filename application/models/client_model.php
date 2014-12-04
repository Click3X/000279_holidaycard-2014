<?php

class Client_Model extends C3X_Model
{
	public function Client_Model()
	{
		$this->table = "clients";
		$this->pk = "id";
    	$this->fields = array(
    		'id' 						=> array("shown"=>true, 	"label"=>"ID"),
    		'first_name' 				=> array("shown"=>true, 	"label"=>"First Name"),
    		'last_name' 				=> array("shown"=>true, 	"label"=>"Last Name"),
    		'address' 					=> array("shown"=>true, 	"label"=>"Address"),
    		'city' 						=> array("shown"=>true, 	"label"=>"City"),
            'state'                     => array("shown"=>true,     "label"=>"State"),
    		'zip' 						=> array("shown"=>true, 	"label"=>"Zip"),
    		'company' 					=> array("shown"=>true, 	"label"=>"Company"),
    		'email' 					=> array("shown"=>true, 	"label"=>"Email"),
    		'phone' 					=> array("shown"=>true, 	"label"=>"Phone"),
    		'gift_code' 				=> array("shown"=>true, 	"label"=>"Gift Code")
		);
	}

	
}	

?>