$(document).ready(function() {
	$('form').on('submit', function(event) {
    event.preventDefault(); 
    alert('enter a number 1-100 first!')

    console.log('#submit')


	var f = 3;
	var b = 5;

	var enteredNum = $(#inputNumber).val();
		if (enteredNum/3) {
			$('ul').append('<li>' + 'fizz' + '</li>');
		} else if (enteredNum/5) {
			$('ul').append('<li>' + 'buzz' + '</li>');
		} else {
			$('ul').append('<li>' + 'enteredNum' + '</li>');
		}	

});



	

