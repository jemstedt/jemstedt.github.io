function expFunc(){
	$('#first-meny').hide();
	$('#exp.window').show();
}


function main(){
  $('#exp-window').hide();
  $('.projects').hide();
  $('#exp1-button').on('click', function(){
  	expFunc();
  });
}
$(document).ready(main);