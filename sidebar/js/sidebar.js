(function (window, $) {

	// TODO
	// - check the actual
	// - add options
	// - some demos, patterns

	var Sidebar = function (target, opts) {
		this.$sidebar = $(target);
		this.$body = $(document.body);
		this.$content = this.$body.find('.jsc-sidebar-content');
		this.sidebarW = this.$sidebar.width();
		this.opts = opts;
		this.meta = this.$sidebar.data('sidebar-options');
		this.count = 0;
	};

	Sidebar.prototype = {

		defaults: {
			trigger: null,
			scrollbarDisplay: false,
			pullCb: function () {},
			pushCb: function () {}
		},

		init: function () {
			this.config = $.extend({}, this.defaults, this.opts, this.meta);

			this.$trigger = this.config.trigger ? this.$body.find(this.config.trigger) : this.$body.find('.jsc-sidebar-trigger');

			this.attachEvent();

			return this;
		},

		pushTransitionEndEvent: 'transitionEnd.push webkitTransitionEnd.push transitionend.push msTransitionEnd.push',

		pullTransitionEndEvent: 'transitionEnd.pull webkitTransitionEnd.pull transitionend.pull msTransitionEnd.pull',

		attachEvent: function () {
			this.$trigger.on('click', $.proxy(function (e) {
				this.push();
			}, this));
		},

		push: function () {
			if(this.count % 2 == 1) {
				this.$content
					.removeClass('jsc-sidebar-pull-end')
					.addClass('jsc-sidebar-push-end')
					.addClass('jsc-sidebar-pushed');
			} else {
				this.$content
					.removeClass('jsc-sidebar-pushed')
					.removeClass('jsc-sidebar-push-end')
					.addClass('jsc-sidebar-pull-end')
				;
			}
			this.count += 1;

		}
	};

	Sidebar.defaults = Sidebar.prototype.defaults;


	$.fn.sidebar = function (options) {
		return this.each(function () {
			new Sidebar(this, options).init();
		});
	};

	window.Sidebar = Sidebar;

})(window, jQuery);
