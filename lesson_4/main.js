(function($) {
	$(function() {
		
		$('ul.h-nav-tabs li:first').addClass('active');
		$('div.h-tabs-wrap div:first').addClass('active');
		
		$('ul.h-nav-tabs').on('click','li:not(.active)', function() {
			
			$(this)
				.addClass('active').siblings().removeClass('active')
				.parent().parent().parent().find('.h-tabs-content').removeClass('active')
				.eq($(this).index()).addClass('active');
	
		})
		
		
		$('ul.v-nav-tabs li:first').addClass('active');
		$('div.v-tabs-wrap div:first').addClass('active');
		
		$("ul.v-nav-tabs li").click(function(){
			$(this)
				.addClass('active').siblings().removeClass("active").end()
				.parent().parent().find('.v-tabs-content').removeClass('active').eq($(this).index()).addClass("active");
				
			});
		
	});
	
})(jQuery);
