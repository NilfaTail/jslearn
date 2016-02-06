(function($) {
	$(function() {
		
		//$('div.err-msg').hide(); // прячем по умолчанию
				
		$(document).on('click', '#dataSend', function(event){
		
		//$('div.err-msg').hide(); //если есть, то снова прячем
		
		/*var error = "Введены некорректные данные";*/
		var username = $('.reg-group input[name="username"]').val(),
			pass = $('.reg-group input[name="password"]').val(),
			email = $('.reg-group input[name="email"]').val(),
			gender = $('.reg-group input[name="gender"]:checked').val(),
			credit_card = $('.reg-group input[name="credit_card"]').val(),
			bio = $('.reg-group textarea[name="bio"]').val()
		
		
			$.ajax({
				url: 'validator.php',
				dataType: 'html',
				type: 'POST',
				/*beforeSend: function(data){
					if (username.length < 6 || username.length >20) {
						$(".username div.err-msg").show().text(error);
					}
					if (pass.length < 6 || pass.length >20) {
						$(".password div.err-msg").show().text(error);
					}
					if (email.empty()) {
						$(".password div.err-msg").show().text(error);
					}
				},*/
				
				data: {
					'username': username,
					'password': pass,
					'email': email,
					'gender':  gender,
					'credit_card': credit_card,
					'bio': bio
				},
				
				success: function(data) {
					console.log(data);
					if ( data == "true") {
						$('#acceptData').html("<p>Валидация успешна!</p>").css("color","green");
					} else {
						$('#acceptData').html("<p>Введены невалидные данные!</p>").css("color","red");
					}
					
				}
			});
			event.preventDefault();
		})
	
	
	});
	
})(jQuery);
