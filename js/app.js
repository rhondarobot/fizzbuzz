$(document).ready(function() {
	$('#formInput').on('submit', function(event) {
    event.preventDefault(); 
 
 	var enteredNum = $('#inputNumber').val();
 	if(enteredNum === "") {
 		alert("enter a number!");
    }
     else {
     	$('ul').append('<li>' + enteredNum + '</li>');
     	$('#inputNumber').val('');
     }
});



	

