var roman = function(number){

}








$(document).ready(function(){
  $('#romanForm').submit(function(event){
    event.preventDefault();
    var input = $('#romanInput').val()
    console.log(typeof(input))
    $('output').text(roman(input))
  })
});
