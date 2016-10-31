function expFunc(){
	$('#expSelectBox').hide();
	$('#expInfoBox').show();
}

function studyFunc(){
	$('#studyBox').show();
	var stim = "Detta är en string";
	$('.stim').text(stim);
}

function main(){
  $('#expInfoBox').hide();
  $('#studyBox').hide();

  $('#exp1-button').on('click', function(){
  	expFunc();
  });

  $('#next-button').on('click', function(){
  	$('#expInfoBox').hide();
  	studyFunc();
  });
}
$(document).ready(main);