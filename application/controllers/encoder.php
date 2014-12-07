<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Encoder extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		echo "Call the combine method to concatenate your videos.";
	}

	public function testcombine($_selections){
		$selections = explode("-", $_selections);

		$mp4 = $this->concatByExtension( $selections, "mp4" );
		//$webm = $this->concatByExtension( $selections, "webm" );

		$res = (object) "response";
		$res->status = ($mp4->status == "success" && $webm->status == "success") ? "success" : "error";

		$res->mp4 	= $mp4;
		// $res->webm 	= $webm;

		echo json_encode($res);
	}

	public function combine($_selections = ""){
		$post = $this->input->post();
		$selections = json_decode($post["selections"]);

		$mp4 = $this->concatByExtension( $selections, "mp4" );
		//$webm = $this->concatByExtension( $selections, "webm" );

		$res = (object) "response";
		$res->status = ($mp4->status == "success" && $webm->status == "success") ? "success" : "error";

		$res->mp4 	= $mp4;
		// $res->webm 	= $webm;

		echo json_encode($res);
 	}

	public function concatByExtension($selections, $ext = "mp4"){
		$files = array();

		array_push( $files, "'".base_url()."videos/src/".$ext."/intro.".$ext."'" );

		//write the file names to txt file
		foreach ($selections as $key => $selection) {
			array_push($files, "'".base_url()."videos/src/".$ext."/".$selection.".".$ext."'" );
		}

		array_push( $files, "'".base_url()."videos/src/".$ext."/outro.".$ext."'" );

		$sources 	= "file ".implode("\nfile ", $files);
		$filelist 	= FCPATH."videos/tmp/filelist.txt";
		$savefile 	= file_put_contents($filelist, $sources);
		
		// build the ffmpeg command and exec
		$outputfilename 		= implode("-", $selections).".".$ext;
		$audio 					= FCPATH."video/".$ext."/audio.".$ext;
		$tmppath 				= FCPATH."video/tmp/".$outputfilename;
		$outputpath 			= FCPATH."video/output/".$outputfilename;
		$output_http_location 	= base_url()."video/output/".$outputfilename;

		$response = (object) "response";

		//check if this combo already exists. if not build it.
		if( file_exists($outputpath) ){
			$response->status = "success";
			$response->video = $output_http_location;
		} else {
			$command = "ffmpeg -f concat -i ".$filelist." -c copy ".$tmppath;
			exec($command, $output, $result);			

			if($result === 0){		
				//if success on concat, add the audio.	
				$command = "ffmpeg -i ".$audio." -i ".$tmppath." -c copy -map 0:a:0 -map 1:v:0 ".$outputpath;
				exec($command, $output, $result);

				if($result === 0){
					$response->status = "success";
					$response->video = $output_http_location;
				}else{
					$response->status = "failed";
					$response->error = "failed to write final output file : ". $result;
				}

				//remove the tmp file
				unlink($tmppath);
			}else{
				$response->status = "failed";
				$response->error = "failed to write tmp file : ". $result;
			}	
		}

		return $response;
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */