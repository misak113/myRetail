
(function ($) {

	this.start = function () {
		var pullDown = $('.pull-down');
		// turn-on css
		pullDown.addClass('turn-on');

		// on scroll do
		$(window).on('move', function (ev) {
			scrollAction(ev, pullDown);
		});
		$(window).on('moveend', function (ev) {
			// do scrolled action
			scrolledAction(pullDown);
		});
		pullDown.find('.stop').unbind('click');
	};

	this.stop = function () {
		var pullDown = $('.pull-down');
		// turn-on css
		pullDown.removeClass('turn-on');

		// on scroll do
		$(window).unbind('move');
		$(window).unbind('moveend');
		pullDown.find('.stop').on('click', function (ev) {
			stopWorking(ev, pullDown);
		});
	};

	var scrollAction = function (ev, pullDown) {
		var scrollTop = getScrollUp();
			var deltaY = ev.deltaY;
		if (scrollTop == 0) {
			var marginTop = getMarginTop(pullDown);
			pullDown.css('margin-top', (marginTop+deltaY)+'px');
			scrollToTop();
			statusUpdate(pullDown);
		}
	};

	var scrolledAction = function (pullDown) {
		if (pullDown.hasClass('pulled')) {
			eventTriggerPullDown(pullDown);
			pullDown.addClass('working');
			hidePullDownAbove(pullDown);
			this.stop();
		} else if (pullDown.hasClass('down')) {
			hidePullDown(pullDown);
		}
	};

	var statusUpdate = function (pullDown) {
		var pullDownMarginTop = getMarginTop(pullDown);

		if (pullDownMarginTop > 0) {
			pullDown.addClass('pulled');
		} else {
			pullDown.removeClass('pulled');
		}

		var height = getHeightPullDown(pullDown);
		if (pullDownMarginTop > -height) {
			pullDown.addClass('down');
		} else {
			pullDown.removeClass('down');
		}
	};

	var scrollToTop = function () {
		$('html, body').scrollTop(0);
	};

	var getMarginTop = function (pullDown) {
		return pullDown.outerHeight(true) - pullDown.innerHeight();
	};

	var hidePullDown = function (pullDown) {
		var height = getHeightPullDown(pullDown);
		$(pullDown).animate({marginTop: -height}, 500);
	};
	var hidePullDownAbove = function (pullDown) {
		var height = getHeightPullDown(pullDown);
		$(pullDown).animate({marginTop: 0}, 500);
	};

	var getHeightPullDown = function (pullDown) {
		return pullDown.height();
	};

	var getScrollUp = function () {
		return $(window).scrollTop();
	};

	var stopWorking = function (ev, pullDown) {
		eventTriggerStopWorking(ev, pullDown);
		pullDown.removeClass('working');
		hidePullDown(pullDown);
		this.start();
	};

	var eventTriggerStopWorking = function (ev, pullDown) {
		pullDown.trigger('pullDownStopWorking', ev);
	};

	var eventTriggerPullDown = function (pullDown) {
		var ev = jQuery.Event("pullDown");
		ev.pullDownElement = pullDown;
		$(window).trigger('pullDown', ev);
	};


	$(document).ready(this.start);

	// add to jQuery
	$.pullDown = this;

})(jQuery);