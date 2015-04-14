 $(document).ready(function() {
    console.log( 'ready!' );
	$( '.clear' ).on('click', function() {
		$('.check').closest('li').remove();
	});

	$('.clearChecked').on('click', function() {
		$('.check:checked').closest('li').remove(); 
	});

	$('form').submit(function(event) {
		var newItem =$('#enter-items').val() 
		event.preventDefault();
		if(newItem === '') {
			console.log('empty')
			return false;
		} else {
			console.log(newItem)
			$('.list-items').prepend('<li><label><input class="check" type="checkbox">'
				+ newItem + '</label><button type="delete" id="minus">-</button></li>')
			$('#enter-items').val('');
		}
	});

	$('.list-items').on('click', 'button', function() {
		$(this).parent().hide();
	});

});

