(function() {

	$('a').on('click',function() {
		var user = $(this).attr('id');
		// console.log(user);

		$('#tweets').html('<img src="ajax-loader.gif">');


		$.ajax({
			url: 'twitter-JSON.php',
			data: {
				user: user
			},
			success: function(response) {
				$('#tweets').html(response);
			},
			error: function(err1, err2, err3) {
				console.log(err1, err2, err3);
			}
		});
	});

	$('#tweets').on('click', 'li', function() {
		$(this).addClass('read');
		// console.log('Added as read');
	});
	
})();