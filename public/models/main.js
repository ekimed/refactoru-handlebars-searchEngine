$(document).on('ready', function(){
	var resultsContainer = $('#results-template').html();
	var template = Handlebars.compile(resultsContainer);
	$('form').on('submit', function(){
		var value = $('.searchvalue').val();
		$.get('/search', {language: value, searchTerm: value}, function(data){
			var output = template(data);
			$('.results-container').empty();
			$('.results-container').append(output);
		});
		$('.searchvalue').val('');
		return false;
	})
})