<?php
namespace app\services;

use Nette\Localization\ITranslator;

class Translator implements ITranslator {
	/** @var Language @inject */
	public $language;

	/**
	 * Translates the given string.
	 * @param  string   message
	 * @param  int      plural count
	 * @return string
	 */
	function translate($message, $count = NULL) {
		// opencart translate
		$translated = $this->language->get($message);
		if ($translated !== $message)
			return $translated;

		// nette translate
		return $message;
	}
}