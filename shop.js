$(document) .ready(function(){




$('.input') 
	.keyup (function() {

		var value = $(this).val();
		$('li').text(value);


	});

	keyup();
	$(".button").click(function(){
		$('.input').hide(value);

	})


});

	