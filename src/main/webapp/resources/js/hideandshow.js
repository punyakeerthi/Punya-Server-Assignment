$(document).ready(function() {
	$('.link').click(function() {
		$('.targetDiv').hide();
		$('#carousel').hide();
		$('#login').hide();
		$('#div' + $(this).attr('target')).show();
		$('.scroll').css({'position': 'absolute','overflow':'scroll','height': '398px','width':'97%'});
		$('.eNividascroll').css({'position': 'absolute','overflow':'scroll','height': '340px','width':'97%'});
		$('.userLinks').css({'display':'block'});
		$('.scroll').scrollTop(0);
		$('.eNividascroll').scrollTop(0);
	});

});