<?php

class C3X_Model extends CI_Model
{
	var $table;
	var $pk;
	var $fields;

	function C3X_Model()
	{
		$this->load->database();
	}
	
	/** Utility Methods **/
	function fields(){
		return $this->fields;
	}
	
	function pk(){
		return $this->pk;
	}

	function get( $options = array() ){
		foreach ($this->fields as $key => $value) {
			if(isset($options[$key]) && $key != "pages" && $key != "categories")
				$this->db->where($key, $options[$key]);
		}
			
		if(isset($options['exclude'])){
			$this->db->where( $this->pk." NOT IN ('".implode("','", $options['exclude']). "')");
		}
			
		if(isset($options[$this->pk]))
				$this->db->where($this->pk, $options[$this->pk]);
		
		// limit / offset
		if(isset($options['limit']) && isset($options['offset']))
			$this->db->limit($options['limit'], $options['offset']);
		else if(isset($options['limit']))
			$this->db->limit($options['limit']);
		
		// sort
		if(isset($options['sortBy']) && isset($options['sortDirection']))
			$this->db->order_by($options['sortBy'], $options['sortDirection']);
		
		$query = $this->db->get($this->table);
		
		if(isset($options['count'])) return $query->num_rows();
		
		if(isset($options[$this->pk])) return $query->row(0);
			
		return $query->result();
	}
	
	function add($options = array())
	{
		$this->db->insert($this->table, $options);
		
		return $this->db->insert_id();
	}
	
	function update($options = array())
	{
		foreach ($this->fields as $key => $value) {
			if(isset($options[$key]))
				$this->db->set($key, $options[$key]);
		}

		$this->db->where($this->pk, $options[$this->pk]);
		
		$this->db->update($this->table);
		
		return $this->db->affected_rows();
	}
	
	function delete($pId)
	{
		$this->db->delete($this->table, array($this->pk => $pId)); 	
		
		return $this->db->affected_rows();
	}

	function duplicates($field){
		$query = $this->db->query("SELECT *, COUNT(*) c FROM $this->table GROUP BY $field HAVING c > 1");
		return $query->num_rows();
	}
}

?>