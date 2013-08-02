<?php

use app\BaseController;

class ControllerModuleClubAccount extends BaseController {

	/** @var array @persistent */
	protected $json_data;

	public function index() {
		$this->json_data = json_decode(file_get_contents('php://input'), true);
		if ($this->request->server['REQUEST_METHOD'] == 'POST' && $this->json_data['action'] == 'save') 
			return $this->handleSave();

		$this->language->load('module/clubAccount');
		$this->document->setTitle($this->t('heading_title'));

		$this->document->addScript('https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js');
		$this->document->addScript('view/javascript/module/clubAccount.js');

		$this->template->modules = $this->config->get('clubAccount_module');
		$this->load->model('design/layout');
		$this->template->layouts = $this->model_design_layout->getLayouts();
		
		$this->renderLayout();
	}

	public function handleSave() {

		$this->load->model('setting/setting');
		$this->model_setting_setting->editSetting('account', $this->json_data);

		$this->sendJsonResponse(array('status' => 'ok'));
	}
}
