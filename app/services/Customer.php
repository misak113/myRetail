<?php
namespace app\services;

use Nette\Object;
use Nette\ObjectMixin;
use Nette\Caching\Cache;
use Nette\Caching\IStorage;

class Customer extends BaseService {

	const SQL_WHERE = 'SQL_WHERE';

	/** @var Customer @inject */
	public $customer;
	/** @var Db @inject */
	public $db;
	/** @var  Nette\Caching\Cache */
	public $cache;

	public function injectCacheStorage(IStorage $cacheStorage) {
		$this->cache = new Cache($cacheStorage);
	}

	public function __call($name, $args) {
		return call_user_func_array (array($this->customer, $name), $args);

		throw new MemberAccessException('Method '.get_class($this->customer).'::$name does not exists.');
	}

	public function getStatus() {
		if ($cached = $this->cache->load('status'))
			return $cached;

		$status_query = $this->db->query("SELECT * FROM " . CUSTOMERCLUB_DB_PREFIX . "customer_status 
			JOIN " . CUSTOMERCLUB_DB_PREFIX . "customer_status_condition USING (customer_status_id);");

		// fulfill statuses
		$statuses = array();
		foreach ($status_query->rows as $row) {
			$id = $row['customer_status_id'];
			$statuses[$id]['customer_status_id'] = $id;
			$statuses[$id]['name'] = $row['name'];
			$statuses[$id]['level'] = $row['level'];
			// vše je ze začátku validní
			$statuses[$id]['valid'] = 1;
			if (!isset($statuses[$id]['conditions']))
				$statuses[$id]['conditions'] = array();

			// conditions
			$cond_id = $row['customer_status_condition_id'];
			$statuses[$id]['conditions'][$cond_id] = array(
				'type' => $row['type'],
				'condition' => $row['condition'],
			);
		}

		// controll status validity
		foreach ($statuses as $id => &$status) {
			foreach ($status['conditions'] as $cond_id => $condition) {
				switch ($condition['type']) {
					case self::SQL_WHERE:
						$sql = $condition['condition'];
						$sql = str_replace(':customer_id', $this->getId(), $sql);
						$sql = str_replace('%DB_PREFIX%', DB_PREFIX, $sql);
						$sql = str_replace('%CUSTOMERCLUB_DB_PREFIX%', CUSTOMERCLUB_DB_PREFIX, $sql);
						$condition_query = $this->db->query($sql);
						$status['valid'] &= $condition_query->row['valid'];
						break;
					default:
						throw new NotImplementedException('Condition type '.$condition['type'].' of customer status is not implemented yet.');
						break;
				}
			}
		}

		// the lowest status
		$higherStatus = array(
			'customer_status_id' => null,
			'name' => 'nothing',
			'level' => 0,
			'valid' => 1,
			'conditions' => array(),
		);
		// find higher status validity
		foreach ($statuses as $id => &$status) {
			if (!$status['valid'])
				continue;

			if ($status['level'] >= $higherStatus['level'])
				$higherStatus = $status;
		}

		$this->cache->save('status', $higherStatus, array(
		    Cache::EXPIRE => '+ 1 seconds'//'+ 10 minutes',
		));
		return $higherStatus;
	}

}