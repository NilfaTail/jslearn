(function($) {
	$(function() {
		
		// горизонтальные табы
		
		$('ul.h-nav-tabs li:first').addClass('active');
		$('div.h-tabs-wrap div:first').addClass('active');
		
		$('ul.h-nav-tabs').on('click','li:not(.active)', function() {
			
			$(this)
				.addClass('active').siblings().removeClass('active')
				.parent().parent().parent().find('.h-tabs-content').removeClass('active')
				.eq($(this).index()).addClass('active');
	
		})
		
		
		// вертикальные табы
		
		$(".v-tabs-content").not(":first").hide();
		
		$(".v-nav-tabs .v-nav-tab").click(function() {
			
			$(".v-nav-tabs .v-nav-tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".v-tabs-content").hide().eq($(this).index()).show(500);
			
		}).eq(0).addClass("active");
	
	
	});
	
})(jQuery);
