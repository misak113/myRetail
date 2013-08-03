<?php
namespace app\services;

use Nette\Security\User as NetteUser;
use Nette\Security\Identity;

class User extends NetteUser {

	/** @var app\services\Customer */
	public $customer;

	public function injectCustomer(Customer $customer) {
		$this->customer = $customer;
		$identity = new Identity($this->customer->getId(), array(), $this->customer);
		$storage = $this->getStorage();
		$storage->setIdentity($identity);
		$storage->setAuthenticated($this->customer->isLogged());
	}


}