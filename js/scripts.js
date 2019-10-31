

var romanDigit = function(digit){
  var digitOutput = "";
  digit = parseInt(digit);
  if (digit === 9) {
    digitOutput = 'I' + 'X';
  }
  else if (digit > 3) {
    digitOutput += 'V';
    if (digit > 4) {
      for (j=0; j < digit - 5; j++){
        digitOutput += 'I';
      }
    } else {
      digitOutput = 'I' + digitOutput;
    }
  } else {
    for (i=0; i < digit; i++) {
      digitOutput += 'I';
    }
  }
  return digitOutput;
}







  $(document).ready(function(){
    $('#romanForm').submit(function(event){
      event.preventDefault();
      var input = $('#romanInput').val();
      console.log(romanDigit(input))
      $('output').text(romanDigit(input));
    })
  });
