<?php

class Tshirt_Model extends C3X_Model
{
	public function Tshirt_Model()
	{
		$this->table = "tshirts";
		$this->pk = "id";
    	$this->fields = array(
    		'id' 						=> array("shown"=>true, 	"label"=>"ID"),
            'design_id'                 => array("shown"=>true,     "label"=>"Design ID"),
            'name'                      => array("shown"=>true,     "label"=>"Name")
		);
	}
}	

?>