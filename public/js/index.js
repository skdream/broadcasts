$(function(){
	$('body').on('click','#arrow',function(){
		$(this).removeClass('down').addClass('top');
		blockShow();
	})

	$('body').on('click', '.top', function(event) {
		event.preventDefault();
		$.unblockUI();
		$(this).removeClass('top').addClass('down');
	});
	
	$('body').on('click', '.ul-wrap li span', function(event) {
		event.preventDefault();
		$('#pd-show').text($(this).text());
		console.log($('#pd-show').text());
		$.unblockUI();
	});
})

function blockShow(){
$.blockUI({
		message: $("#select").html(),
		onBlock:function(){
			$('.blockOverlay').click($.unblockUI); 
			$('#arrow').removeClass('top').addClass('down');
		},
		css: {
		padding:0,
		marginLeft: '-115px'
		}
	});
}
