<?php
namespace app\services;

use DB as OpencartDB;

class DB extends OpencartDB {

	/** @var ConnectionPanel */
	protected $connectionPanel;

	public function __construct($connectionPanel) {
		call_user_func_array('parent::__construct', func_get_args());
		$this->connectionPanel = $connectionPanel;
	}

	public function setConnectionPanel($connectionPanel) {
		$this->connectionPanel = $connectionPanel;
	}

	public function query($sql) {
		$start = microtime();
		$result = parent::query($sql);
		$time = microtime()-$start;

		$profile = array(
			'sql' => $sql, 
			'time' => $time,
			'countRows' => $result->num_rows,
			'countColumns' => 0,
			'connection' => $this,
		);
		$this->connectionPanel->logQuery($profile);
		return $result;
	}
}