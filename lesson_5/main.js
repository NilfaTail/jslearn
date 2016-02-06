(function($) {
	$(function() {

		function validationClient(object,value){

			switch (object) {
				case 'username':
					return validationUsername(value);
					break;
				case 'password':
					return validationPassword(value);
					break;
				case 'email':
					return validationEmail(value);
					break;
				case 'credit_card':
					return validationCreditCard(value);
					break;
				case 'bio':
					return validationBio(value);
					break;
				default:
					return false;
			}

			function validationUsername(v){
				return( v.match( /^([A-Za-z0-9]){6,100}$/ ) == null) ? false : true; // только буквы и цифры
			}

			function validationPassword(v) {
				return (v.match(/^(\w){6,99}$/) == null) ? false : true; //буквы, цифры, знак подчеркивания
			}

			function validationEmail(v){
				return (v.match(/^[a-z0-9]+@[a-z0-9]+\.+[a-z]{2,10}$/) == null) ? false : true; // почта, только без пуникода
			}

			function validationCreditCard(v){
				return (v.match(/^[0-9]{17,20}$/) == null) ? false : true; // только цифры, от 17 до 20
			}

			function validationBio(v){
				return ( v.length ) ? true : false; // Не пустое, любые символы
			}

		};


		$(document).on('click', '#dataSend', function(event){

			var username = $('.reg-group input[name="username"]').val(),
				password = $('.reg-group input[name="password"]').val(),
				email = $('.reg-group input[name="email"]').val(),
				gender = $('.reg-group input[name="gender"]:checked').val(),
				credit_card = $('.reg-group input[name="credit_card"]').val(),
				bio = $('.reg-group textarea[name="bio"]').val();

			$.ajax({
				url: 'validator.php',
				dataType: 'html',
				type: 'POST',
				data: {
					'username': username,
					'password': password,
					'email': email,
					'gender':  gender,
					'credit_card': credit_card,
					'bio': bio
				},
				/*beforeSend: function(){
					validationClient(username) ? console.log('ОК') : console.log("Только буквы и цифры");
					validationClient(password) ? console.log('ОК') : console.log("Только буквы, цифры и знак подчеркивания	");
				},*/
				success: function(data) {

					if ( data == "true") {
						$('#acceptData').html("<p>Ответ сервера: Валидация успешна!</p>").css("color","green");
					} else {
						$('#acceptData').html("<p>Ответ сервера: Данные невалидны!</p>").css("color","red");
					}
					
				}
			});
			event.preventDefault();
		})


		$(document).on('change', 'input[type="text"], input[type="password"], input[type="email"], textarea', function(){

			var validResult = validationClient( $(this).attr('name'), $(this).val() );

			if (validResult == true) {
				$(this).removeClass("invalid").addClass("valid");
			}
			else {
				$(this).removeClass("valid").addClass("invalid");
			}

		});
	});
	
})(jQuery);
