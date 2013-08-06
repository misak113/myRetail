<?php

/**
 * Copyright (c) 2012 Michael Žabka
 */

namespace app\services;

use Nette,
		Nette\Database\Helpers,
		Nette\Diagnostics\Debugger;
use Nette\Diagnostics\Helpers as DiagnosticsHelpers;



/**
 * Debug panel for Nette\Database.
 *
 * @author     Michael Žabka
 */
class ConnectionPanel extends Nette\Object implements Nette\Diagnostics\IBarPanel
{
	/** @var int maximum SQL length */
	static public $maxLength = 1000;

	/** @var int logged time */
	private $totalTime = 0;

	/** @var array */
	private $queries = array();

	/** @var string */
	public $name;

	/** @var bool|string explain queries? */
	public $explain = TRUE;

	/** @var bool */
	public $disabled = FALSE;
	/** @var array */
	protected $statements = array();
	/** @var object */
	protected $profiler;



	public function logQuery($profile)
	{
		if ($this->disabled) {
			return;
		}
		$source = NULL;
		foreach (debug_backtrace(FALSE) as $row) {
			if (isset($row['file']) && is_file($row['file']) && strpos($row['file'], NETTE_DIR . DIRECTORY_SEPARATOR) !== 0) {
				if (isset($row['function']) && strpos($row['function'], 'call_user_func') === 0) continue;
				if (isset($row['class']) && is_subclass_of($row['class'], '\\Nette\\Database\\Connection')) continue;
				if (isset($row['class']) && is_subclass_of($row['class'], '\\DB')) continue;
				if (isset($row['class']) && (strpos($row['class'], 'Zette') === 0 || strpos($row['class'], 'Nette') || strpos($row['class'], 'Zend') === 0)) continue;
				$source = array($row['file'], (int) $row['line']);
				break;
			}
		}
		$this->totalTime += $profile['time'];

		$query = array(
			$profile['sql'], 
			$profile['time'], 
			$profile['countRows'], $profile['countColumns'], 
			$profile['connection'], $source, 
			null, null
		);
		$this->queries[] = $query;
	}

	protected function queries() {
		return $this->queries;
	}


	public static function renderException($e)
	{
		if ($e instanceof \PDOException && isset($e->queryString)) {
			return array(
				'tab' => 'SQL',
				'panel' => Helpers::dumpSql($e->queryString),
			);
		}
	}



	public function getTab()
	{
		return '<span title="Nette\\Database ' . htmlSpecialChars($this->name) . '">'
				. '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMFSURBVHjaTJNfaFt1HMU/v+Q2v5vcXpNcm6Sts8xu2ZwU2aZFV5DiqB0IKtuDwgSZDxXnW58coqCgjyoVYTBf9iCClTKoDLG+qEwtSttpqGP+S7aW1ua6u92kubl/knt9SAyep/PwPYcD33NEFEUsLS0BnAaeBvbTgQHc1+U3AbPL/wAWgU+mp6dRAFzX/Sqfz08NDw+j6zoAiUQCTdMAcBxnxPO8EYB6vf7Q1tbWc9Vq9UXgCQUgDMOpcrlMf38/UkoAVFXlPwgh8H2frgGVSgVVVaeATgKAsbExVldXMU2zd+g4DgCappHJZBBCUCgUGB8fp1Qq0TOwbRvbtjEMg8HBQaSUqKpKMpkkmUySzWbRdR0pJa7r4nketm130s19P3Ph6/LFGRmPE4XQF1MQQuC1W5za9zZWcJN16zJ98QQAERFEAs/zEEp7W9ETA40hWUREkJIZdsJfuN2s89g9z6MqaS5dmyMjEx0hEAFhFCAEHCucLouP196RyUrR3Td6gOvbV/ns9svoMs3hnVcxb+0QZW2MvAqxEIgw0kNk0mm2N7d54MEjBQXw6raD4zost9/FCVzOFD9iYLiInta5XH2La9Y3xEQMt+XzcOopntn/HovriwDV2In7X6O+u8tV/1NK1RJPjpzFvZHEsix+c77lysY8QduhEViEhBzfO0PYDrEsq/OFv2s/o+7x+PzGHAeyRfTqUdxWk4RUuMvfy5nih2w018jIIR7d8yx3NprMr8xTq9V6bzz5I+8Tj0GbOj9FHxDEPYzdg6R+PcrO6AJ/Oescz8+weOVLcrkcExMTLCwsdAwurZ87d6v2D7rUqTfrhOIOrTDiXmOMg6MDrP3+J4fuPsILx94kd2KIRqPR6wKA8sbjXzwyOzsbTU5OYpomUkpSqRRaqKE1NV4/9B35fJ7+vgz/h+/7TI6e6jQxCILzKysrZw3DQAgB0NsEQLPZZHNzEykllUqF5eVlgiA436uy67qvmKZ50TTNl4DDXd0IkOtysztpgBJwodVq/QDw7wASbUVTkjh9jwAAAABJRU5ErkJggg==" />'
				. count($this->queries()) . ' queries'
				. ($this->totalTime ? ' / ' . sprintf('%0.1f', $this->totalTime * 1000) . 'ms' : '')
				. '</span>';
	}



	public function getPanel()
	{
		$this->disabled = TRUE;
		$s = '';
		$h = 'htmlSpecialChars';
		$queries = $this->queries();

		foreach ($queries as $i => $query) {
			/** @var \Zend_Db_Adapter_Pdo_Abstract $connection
			 * @var Zend_Db_Statement_Pdo $stmt */
			list($sql, $time, $rows, $cols, $connection, $source, $stmt, $queryType) = $query;
			$params = array();
			if ($stmt instanceof \Zend_Db_Statement && $queryType == 32) {
				$stmt->execute();
				$data = DiagnosticsHelpers::clickableDump($stmt->fetchAll(), true);
			} else {
				$data = '-';
			}

			$explain = NULL; // EXPLAIN is called here to work SELECT FOUND_ROWS()
			if ($this->explain && preg_match('#\s*\(?\s*SELECT\s#iA', $sql) && $connection) {
				try {
					$cmd = is_string($this->explain) ? $this->explain : 'EXPLAIN';
					$explain = $connection->query("$cmd $sql");
				} catch (\PDOException $e) {}
			}

			$s .= '<tr><td>' . sprintf('%0.3f', $time * 1000);
			if ($explain) {
				static $counter;
				$counter++;
				$s .= "<br /><a href='#' class='nette-toggler' rel='#nette-DbConnectionPanel-row-$counter'>explain&nbsp;&#x25ba;</a>";
			}

			$s .= '</td><td class="nette-DbConnectionPanel-sql">' . Helpers::dumpSql(self::$maxLength ? Nette\Utils\Strings::truncate($sql, self::$maxLength) : $sql);
			if ($explain) {
				$s .= "<table id='nette-DbConnectionPanel-row-$counter' class='nette-collapsed'><tr>";
				foreach ($explain->row as $col => $foo) {
					$s .= "<th>{$h($col)}</th>";
				}
				$s .= "</tr>";
				foreach ($explain->rows as $row) {
					$s .= "<tr>";
					foreach ($row as $col) {
						$s .= "<td>{$h($col)}</td>";
					}
					$s .= "</tr>";
				}
				$s .= "</table>";
			}
			if ($source) {
				$s .= Nette\Diagnostics\Helpers::editorLink($source[0], $source[1])->class('nette-DbConnectionPanel-source');
			}

			$s .= '</td><td>';
			foreach ($params as $param) {
				$s .= Debugger::dump($param, TRUE);
			}

			$s .= '</td><td>' . $rows . '</td>';
			$s .= '</td><td>' . $cols . '</td>';
			$s .= '</td><td>' . $data . '</td></tr>';
		}

		return empty($queries) ? '' :
				'<style> #nette-debug td.nette-DbConnectionPanel-sql { background: white !important }
			#nette-debug .nette-DbConnectionPanel-source { color: #BBB !important } </style>
			<h1>Queries: ' . count($queries) . ($this->totalTime ? ', time: ' . sprintf('%0.3f', $this->totalTime * 1000) . ' ms' : '') . '</h1>
			<div class="nette-inner nette-DbConnectionPanel">
			<table>
				<tr><th>Time&nbsp;ms</th><th>SQL Statement</th><th>Params</th><th>Rows</th><th>Cols</th><th>Data</th></tr>' . $s . '
			</table>
			</div>';
	}

}