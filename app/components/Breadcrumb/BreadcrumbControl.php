<?php

use Nette\Application\UI\Control;
use Nette\DI\Container;

class BreadcrumbControl extends Control {

	/** @var Language @inject */
	public $language;
	/** @var Url @inject */
	public $url;
	/** @var Session @inject */
	public $session;
	
	public function render() {
		$template = $this->template;

		$template->setFile(__DIR__.'/breadcrumb.latte');

		$breadcrumbs = array();
   		$breadcrumbs[] = array(
       		'text'      => $this->language->get('text_home'),
			'href'      => $this->url->link('common/home', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => false
   		);

   		$breadcrumbs[] = array(
       		'text'      => $this->language->get('text_module'),
			'href'      => $this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => ' :: '
   		);
		
   		$breadcrumbs[] = array(
       		'text'      => $this->language->get('heading_title'),
			'href'      => $this->url->link('module/clubAccount', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => ' :: '
   		);
   		$template->breadcrumbs = $breadcrumbs;

   		$template->render();
	}
}