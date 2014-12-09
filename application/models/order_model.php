<?php

class Order_Model extends C3X_Model
{
	public function Order_Model()
	{
		$this->table = "orders";
		$this->pk = "id";
    	$this->fields = array(
    		'id' 						=> array("shown"=>true, 	"label"=>"ID"),
    		'design' 					=> array("shown"=>true, 	"label"=>"Design"),
    		'color' 					=> array("shown"=>true, 	"label"=>"Color"),
    		'size' 						=> array("shown"=>true, 	"label"=>"Size"),
    		'ref_client_id' 			=> array("shown"=>true, 	"label"=>"Client ID"),
    		'status'					=> array("shown"=>true, 	"label"=>"Status"),
            'address'                   => array("shown"=>true,     "label"=>"Address"),
            'state'                     => array("shown"=>true,     "label"=>"State"),
            'city'                      => array("shown"=>true,     "label"=>"City"),
            'zip'                       => array("shown"=>true,     "label"=>"Zip"),
            'created_at'                => array("shown"=>true,     "label"=>"Created At")
		);
	}
}

?>