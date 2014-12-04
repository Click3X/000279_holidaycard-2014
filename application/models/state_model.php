<?php

class State_Model extends C3X_Model
{
	public function State_Model()
	{
		$this->table = "states";
		$this->pk = "state_id";
    	$this->fields = array(
    		'state_id' 					=> array("shown"=>true, 	"label"=>"ID"),
    		'state_name' 				=> array("shown"=>true, 	"label"=>"Name"),
    		'state_abbr' 				=> array("shown"=>true, 	"label"=>"Abbr")
		);
	}
}

?>