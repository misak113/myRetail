<?php
namespace app;

use Controller;
use Nette\Templating\FileTemplate;
use Nette\Latte\Engine as LatteEngine;
use Nette\Caching\Storages\PhpFileStorage;
use ReflectionClass;
use Nette\DI\Container;

abstract class BaseController extends Controller {

	/** @var FileTemplate */
	protected $template;
	/** @var array */
	protected $controls = array();
	/** @var Container @inject */
	protected $context;
	
	public function __construct($registry) {
		call_user_func_array('parent::__construct', func_get_args());

		// @todo
		global $container;
		$this->context = $container;

		// opencart services // @todo base id in OpencartExtension
		$this->context->addService('oc_url', $registry->get('url'));
		$this->context->addService('oc_language', $registry->get('language'));
		$this->context->addService('oc_session', $registry->get('session'));

		$this->prepareTemplate();
	}

	protected function prepareTemplate() {
		$this->template = new FileTemplate();
		$this->template->setCacheStorage(new PhpFileStorage($this->getCacheDir()));
		$this->template->registerFilter(new LatteEngine);
		$this->template->_control = $this;
		$files = array(
			$this->getViewDir().'/template/'.$this->getControllerName().'/'.$this->getActionName().'.latte',
			$this->getViewDir().'/template/'.$this->getControllerName().'.latte',

		);
		foreach ($files as $file)
			if (file_exists($file))
				return $this->template->templateFile = $file;

		throw new FileNotFoundException('File of template was not found: '.$files[0]);
	}

	protected function getControllerName() {
		$class = get_class($this);
		$ctrl = lcfirst(substr($class, 10));
		if (substr($ctrl, 0, 6) === 'module')
			$ctrl = 'module/'.lcfirst(substr($ctrl, 6));
		return $ctrl;
	}

	protected function getActionName() {
		return 'index'; // @todo default is index
	}

	protected function getViewDir() {
		return __DIR__.'/../admin/view'; // @todo
	}
	protected function getCacheDir() {
		$parameters =  $this->context->getParameters();
		return $parameters['tempDir'].'/cache';
	}

	protected function renderLayout($layoutName = 'default') {
		// latte engine register

		// default header & footer
		$this->template->header = $this->getChild('common/header');
		$this->template->footer = $this->getChild('common/footer');

		// layout file
		$fileTpl = $this->getViewDir().'/layouts/@'.$layoutName.'.latte';
		$this->template->setFile($fileTpl);
		
		// render
		$this->response->setOutput((string)$this->template);
	}

	public function getComponent($name, $args = array()) {
		if (isset($this->controls[$name]))
			return $this->controls[$name];

		$className = ucfirst($name).'Control';

		$ctrl = $this->context->createInstance($className, $args);
		$presenter = $this->context->createInstance('BasePresenter');
		$this->context->callInjects($presenter);
		$ctrl->setParent($presenter);
		$this->context->callInjects($ctrl);

		$this->controls[$name] = $ctrl;
		return $ctrl;
	}
}