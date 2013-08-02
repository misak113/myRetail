<?php
namespace app\services;

use Nette\Object;
use Nette\ObjectMixin;

class Customer extends BaseService {

	/** @var Customer @inject */
	public $customer;

	public function __call($name, $args) {
		return call_user_func_array (array($this->customer, $name), $args);

		throw new MemberAccessException('Method '.get_class($this->customer).'::$name does not exists.');
	}

}