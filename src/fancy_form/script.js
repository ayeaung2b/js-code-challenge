//$(function(){
	$('#form').parsley().on('field:validated', function() {
		var ok = $('.parsley-error').length === 0;
	})
  .on('form:submit', function() {
     $('#overlay').toggleClass('hidden');
	 setTimeout(function(){
		 $('#overlay').toggleClass('hidden');
		 $('#form').hide();
		 $('.bs-callout-info').toggleClass('hidden');
	 },1000)
	return false; 
  });
//});
