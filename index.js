
var cities=['NYC', 'SF', 'LA', 'ATX', 'SYD'];
// console.log(cities[2]);
for(var i = 0; i <cities.length; i++){
	console.log(cities[i]);
	$('#cityoptions').append('<option val="'+cities[i]+'">'+cities[i]+'</option>')
}

// var input;

$('#cityoptions').on('change', function(event){
	event.preventDefault();
	//changes background color to appropriate city pic
	cities = $('#cityoptions').val();
	cities = cities.toLowerCase();
	if (cities === 'nyc'){
		$('body').css('background-image','url(images/nyc.jpg)');
	} else if(cities ==='atx'){
		$('body').css('background-image','url(images/austin.jpg)');
	} else if(cities ==='la'){
		$('body').css('background-image', 'url(images/la.jpg)');
	} else if(cities ==='sf'){
		$('body').css('background-image', 'url(images/sf.jpg)');
	} else if(cities ==='sydney'){
		$('body').css('background-image', 'url(images/sydney.jpg)');
	}
});