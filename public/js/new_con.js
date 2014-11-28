$(function(){
	$('.upload-btn').click(function() {
		var title = $('#title');
			content = $('#content');

		$.ajax({
			url: '/path/to/file',
			type: 'default GET (Other values: POST)',
			dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: {
				title: title,
				content: content
			},
		})
		.done(function(data) {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		
		
	});
})