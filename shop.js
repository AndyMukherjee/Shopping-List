$(document) .ready(function(){





	$('.button') .click(function(){
		var value = $(".input").val();

		$('#shoplist').append("<li><input type='checkbox'>"+value+"<button class='button2'>Remove</button></li>");
		$(".input").val("");

	});


$('ul').on('click', 'li', function(event){

	
$(this).css("text-decoration","line-through");


	});

$('ul').on('click', '.button2', function(){

	$(this).parent().remove();
});


});


	