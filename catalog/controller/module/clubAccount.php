<?php

use app\BaseController;

class ControllerModuleClubAccount extends BaseController {

	/** @var app\services\Customer @inject */
	public $customer;
	
	public function index() {
		$this->template->name = $this->customer->getFirstName();

		$this->renderLayout();
	}
}