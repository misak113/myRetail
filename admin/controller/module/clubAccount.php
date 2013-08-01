<?php

use app\BaseController;

class ControllerModuleClubAccount extends BaseController {

	public function index() {   
		$this->language->load('module/clubAccount');
		$this->document->setTitle($this->language->get('heading_title'));
		
		$this->renderLayout();
	}
}
