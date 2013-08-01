<?php
class ControllerModuleClubAccount extends Controller {
	
	public function __construct() {
		parent::__construct(func_get_args());

		$this->template = 'module/clubAccount.tpl';
	}

	public function index() {   
		$this->language->load('module/clubAccount');

		$this->document->setTitle($this->language->get('heading_title'));
		
			
		$this->render();
	}

	protected function breadcrumbs()
	{
		$this->data['breadcrumbs'] = array();

   		$this->data['breadcrumbs'][] = array(
       		'text'      => $this->language->get('text_home'),
			'href'      => $this->url->link('common/home', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => false
   		);

   		$this->data['breadcrumbs'][] = array(
       		'text'      => $this->language->get('text_module'),
			'href'      => $this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => ' :: '
   		);
		
   		$this->data['breadcrumbs'][] = array(
       		'text'      => $this->language->get('heading_title'),
			'href'      => $this->url->link('module/account', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => ' :: '
   		);
	}

	protected function render() {
		$this->children = array(
			'common/header',
			'common/footer'
		);
		$this->response->setOutput($this->render());
	}
}
