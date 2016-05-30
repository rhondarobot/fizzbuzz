$(document).ready(function() {
  $('#inputForm').on('submit', function(event) {
    event.preventDefault();  
   
     var newItem = $('#inputNumber').val();  
     if (newItem === "") {
        alert("Please enter an item first!")
  }  else {
        $('ul').append('<li>' + newItem + '</li>');   
        $('#inputNumber').val('');
  }
  })
}); 
  //will not add a blank item when alert is shown and will only add <li>s upon entering text


	