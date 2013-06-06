

angular.module('filters', [])
.filter('timeLeft', function() {
  return function(input) {
  	if (!input) return 'unknown';
	  var time = moment(input).fromNow(true);
    return time;
  };
})
.filter('salePercentage', function() {
	  return function(input) {
	  	if (!input) return '-';
	    return Math.round((1 - input)*100) + '%';
	  };
	})
.filter('price', function() {
	  return function(input, currency) {
		  var curs = {czk: 'Kč', eur: '€'};
	    return (Math.round(input*100)/100+'').replace('.', ',') + ' ' + (curs[currency] || '-');
	  };
	})
.filter('formatDate', function() {
	  return function(input, format) {
	    return moment(input).format(format);
	  };
	})
.filter('_', function(_t) {
	  return function(text) {
	    return (text); // @todo _t from myRetail Translator
	  };
	})
	
;