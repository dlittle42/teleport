console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


$(document).ready(function(){

	var bkgds = ['/images/skies/city.png',
				'/images/skies/puydesancy.jpg',
				'/images/skies/lake.jpg'
				]

	var counter=0;

	$('#cube').click(function(e){  
	  this.setAttribute('material', 'color', 'red');
	  console.log('I was clicked!');
	});


	$('#sky').click(function(e){  
	  this.setAttribute('src', '/images/skies/puydesancy.jpg');
	  console.log('I was changed!');
	});

	

	$('body').keydown(function (e) {
		console.log(counter);
		$('#sky').attr('src', bkgds[counter]);
		if (counter < bkgds.length-1){
			counter++;
		}else{
			counter=0;
		}
		
	});

});