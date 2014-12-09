<?php

class Video_Model extends C3X_Model
{
	public function Video_Model()
	{
		$this->table = "videos";
		$this->pk = "id";
    	$this->fields = array(
    		'id' 						=> array("shown"=>true, 	"label"=>"ID"),
    		'video_id' 				    => array("shown"=>true, 	"label"=>"Video ID"),
            'created_at'                => array("shown"=>true,     "label"=>"Created At")
		);
	}

	
}	

?>