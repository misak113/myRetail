
/* JavaScript content from js/filters.js in folder common */




angular.module('filters', [])
.filter('timeLeft', function() {
  return function(input) {
	  var time = moment(input).fromNow(true);
    return time;
  };
})
.filter('salePercentage', function() {
	  return function(input) {
	    return Math.round((1 - input)*100) + '%';
	  };
	})
.filter('price', function() {
	  return function(input, currency) {
		  var curs = {czk: 'Kč', eur: '€'};
	    return (Math.round(input*100)/100+'').replace('.', ',') + ' ' + curs[currency];
	  };
	})
.filter('_', function() {
	  return function(text) {
	    return text;
	  };
	})
	
;