
var Order = require('../models/Order');
var l = require('../services/logDispatcher');


exports.orders = function (req, res) {
	res.send(orders);
};


var orders = [
	{
		id: 1864686,
		date: "2013-01-02T12:00:00",
		totalPrice: 152.60,
		currency: 'czk',
		branch: {
			name: 'Interspar Zličín',
			geolocation: {
				lat: 50.0725058,
				lon: 14.5421189
			},
			phones: [
				'+420 234 672 111',
				'+420 234 670 119'
			],
			address: {
				street: 'Nákupní 1/388',
				postcode: '102 00',
				city: 'Praha 10, Praha-Štěrboholy'
			}
		},
		items: [
			{
				qty: 3,
				price: 12.97,
				currency: 'czk',
				"product" : {
    					"id" : 146861,
    					"name" : "Čokoláda",
    					"title" : "Bílá čokoláda 120g",
    					"product_code" : "566489148",
    					"short_description" : "",
    					"description" : null,
    					"quantity" : 120,
    					"measure_unit" : "g",
    					"price" : 165.9,
    					"currency" : "czk",
    					"images" : [ {
    						"small" : "http://api.myretail.cz/images/chocolate-14861-1_small.png",
    						"medium" : "http://api.myretail.cz/images/chocolate-14861-1_medium.png",
    						"large" : "http://api.myretail.cz/images/chocolate-14861-1_large.png"
    					} ]
    				}
			},
			{
				qty: 1,
				price: -45.21,
				currency: 'czk',
				product: null
			}
		],
		offers: [
			{
				"id" : 1568,
				"title" : "Lahodná rajčátka",
				"description" : "Nepřehlédněte nabídku čtvrt kila lahodných rajčat první jakosti",
				"price" : 18.54,
				"currency" : "czk",
				"date_start" : "2013-01-02 12:00:00",
				"date_end" : "2013-01-18 18:59:59",
                "qtyLimit" : 100,
				"product" : {
					"id" : 146860,
					"name" : "Rajčata",
					"title" : "Rajčata Balení 250g",
					"product_code" : "566489138",
					"short_description" : "",
					"description" : null,
					"quantity" : 250,
					"measure_unit" : "g",
					"price" : 25.8,
					"currency" : "czk",
					"images" : [
							{
								"small" : "http://api.myretail.cz/images/tomate-250g-14860-1_small.png",
								"medium" : "http://api.myretail.cz/images/tomate-250g-14860-1_medium.png",
								"large" : "http://api.myretail.cz/images/tomate-250g-14860-1_large.png"
							},
							{
								"small" : "http://api.myretail.cz/images/tomate-250g-14860-2_small.png",
								"medium" : "http://api.myretail.cz/images/tomate-250g-14860-2_medium.png",
								"large" : "http://api.myretail.cz/images/tomate-250g-14860-2_large.png"
							} ]
				},
				"priority" : 0.890415,
				"image": {
					"small" : "http://img.weiku.com/IMG/2010/11/26/1/product/36_38_tomato_paste17318_s.jpg",
					"medium" : "http://www.countryliving.com/cm/countryliving/images/spicy-tomato-jam-3761-200.jpg",
					"large" : "http://api.myretail.cz/imagessuper_tomate-250g-14860-1_large.png"
				},
				"images" : [ {
					"small" : "http://api.myretail.cz/images/super_tomate-250g-14860-1_small.png",
					"medium" : "http://api.myretail.cz/images/super_tomate-250g-14860-1_medium.png",
					"large" : "http://api.myretail.cz/imagessuper_tomate-250g-14860-1_large.png"
				} ]
			}
		]
	},
	{
		id: 1864689,
		date: "2013-01-15T12:00:00",
		totalPrice: 292.60,
		currency: 'czk',
		branch: {
			name: 'Interspar Zličín',
			geolocation: {
				lat: 50.0725058,
				lon: 14.5421189
			},
			phones: [
				'+420 234 672 111',
				'+420 234 670 119'
			],
			address: {
				street: 'Nákupní 1/388',
				postcode: '102 00',
				city: 'Praha 10, Praha-Štěrboholy'
			}
		},
		items: [
			{
				qty: 3,
				price: 12.97,
				currency: 'czk',
				"product" : {
    					"id" : 146861,
    					"name" : "Čokoláda",
    					"title" : "Bílá čokoláda 120g",
    					"product_code" : "566489148",
    					"short_description" : "",
    					"description" : null,
    					"quantity" : 120,
    					"measure_unit" : "g",
    					"price" : 165.9,
    					"currency" : "czk",
    					"images" : [ {
    						"small" : "http://api.myretail.cz/images/chocolate-14861-1_small.png",
    						"medium" : "http://api.myretail.cz/images/chocolate-14861-1_medium.png",
    						"large" : "http://api.myretail.cz/images/chocolate-14861-1_large.png"
    					} ]
    				}
			}
		],
		offers: []
	}
];