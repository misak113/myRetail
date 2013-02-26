<?php
header('content-type: text/json');

$product = array(
	'id' => 146860,
	'name' => 'Rajčata',
	'title' => 'Rajčata Balení 250g',
	'product_code' => '566489138',
	'short_description' => '',
	'description' => null,
	'quantity' => 250,
	'measure_unit' => 'g',
	'price' => 25.80,
	'currency' => 'czk',
	'images' => array(
		0 => array(
			'small' => 'http://api.myretail.cz/images/tomate-250g-14860-1_small.png',
			'medium' => 'http://api.myretail.cz/images/tomate-250g-14860-1_medium.png',
			'large' => 'http://api.myretail.cz/images/tomate-250g-14860-1_large.png',
		),
		1 => array(
			'small' => 'http://api.myretail.cz/images/tomate-250g-14860-2_small.png',
			'medium' => 'http://api.myretail.cz/images/tomate-250g-14860-2_medium.png',
			'large' => 'http://api.myretail.cz/images/tomate-250g-14860-2_large.png',
		),
	),
);


$product2 = array(
	'id' => 146861,
	'name' => 'Čokoláda',
	'title' => 'Bílá čokoláda 120g',
	'product_code' => '566489148',
	'short_description' => '',
	'description' => null,
	'quantity' => 120,
	'measure_unit' => 'g',
	'price' => 65.90,
	'currency' => 'czk',
	'images' => array(
		0 => array(
			'small' => 'http://api.myretail.cz/images/chocolate-14861-1_small.png',
			'medium' => 'http://api.myretail.cz/images/chocolate-14861-1_medium.png',
			'large' => 'http://api.myretail.cz/images/chocolate-14861-1_large.png',
		),
	),
);

$offer = array(
	'id' => 1568,
	'title' => 'Lahodná rajčátka',
	'offer_description' => 'Nepřehlédněte nabídku čtvrt kila lahodných rajčat první jakosti',
	'price' => 18.54,
	'currency' => 'czk',
	'date_start' => '2012-11-02T12:00:00',
	'date_end' => '2012-11-08T18:59:59',
	'product' => $product,
	'priority' => 0.890415,
	'images' => array(
		0 => array(
			'small' => 'http://api.myretail.cz/images/super_tomate-250g-14860-1_small.png',
			'medium' => 'http://api.myretail.cz/images/super_tomate-250g-14860-1_medium.png',
			'large' => 'http://api.myretail.cz/imagessuper_tomate-250g-14860-1_large.png',
		),
	),
);


$offer2 = array(
	'id' => 1568,
	'title' => 'Bílá čokoláda',
	'offer_description' => 'Čokoláda co se rozplývá na jazyku!',
	'price' => 42.89,
	'currency' => 'czk',
	'date_start' => '2012-11-12T12:00:00',
	'date_end' => '2012-12-09T18:59:59',
	'product' => $product2,
	'priority' => 0.451437,
	'images' => array(),
);

$offers = array($offer, $offer2);

echo json_encode($offers);