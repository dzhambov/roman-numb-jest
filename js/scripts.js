var romanNums = ['I','V','X','L','C','D','M']

function romanSplit(number) {
  number = number.split("");
  console.log(number);
  number.reverse();
  console.log(number)

  for (i=0; i < number.length; i++) {
    console.log(i);
    number[i] = romanDigit(number[i]);

  }
  return number;
}


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
    for (k=0; k < digit; k++) {
      digitOutput += 'I';
    }
  }
  return digitOutput;
}







  $(document).ready(function(){
    $('#romanForm').submit(function(event){
      event.preventDefault();
      var input = $('#romanInput').val();

      // romanSplit(input);
      console.log(romanSplit(input));

      // console.log(romanDigit(input))
      // $('output').text(romanDigit(input));
    })
  });
