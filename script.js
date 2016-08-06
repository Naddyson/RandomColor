var main=function(){
	var elementCount = ($('.workspace').width())*($(".workspace").height())/
		(Math.pow($('.square').width(),2));
	for (var i = 0; i < elementCount-1; i++) {
		var square = $('<div>').addClass('square').appendTo('.workspace');
		$('<div>').addClass('text').appendTo(square);
	}
	$('.square').mouseenter(function (){
		var color = colorGenerator();
		(this).style.backgroundColor=color;
		$(this).children('.text').empty();
		var tone=determineColorTone(color);
		
		$(this).children('.text').text(color);
		if (tone==='light')
			$(this).children('.text').css('color','black');
		else $(this).children('.text').css('color','white');
	});
}
function colorGenerator(){
	var symbvols="0123456789ABCDEF";
	var color="#";
	for (var i = 0; i < 6; i++) {
		color+=symbvols[Math.round(Math.random()*15)];
	}
	return color;
}
function determineColorTone(color){
	var R=parseInt(color.substring(1,3),16);
	var G=parseInt(color.substring(3,5),16);
	var B=parseInt(color.substring(5,7),16);
	var sum=R+G+B;
	
	//определяем, какого цвета больше всего
	var main;
	if (R>=G){
		if (R>=B) main='R';
			else main='B';
	}
	else if (G>=B) main='G';
		else main='B'; 

	//если сумма двух других цветов больше 255, то это светлый цвет, иначе темный
	switch (main){
		case 'R': sum=G+B;
		case 'G': sum=R+B;
		case 'B': sum=R+G;
	}

	console.log('color '+color+'R='+R+' G='+G+' B='+B+' sum = '+sum+' main='+main);
	if (sum>255) return 'light'
		else return 'dark'
	
}

determineColorTone('#642FF7');
determineColorTone('#748686');
$(document).ready(main);