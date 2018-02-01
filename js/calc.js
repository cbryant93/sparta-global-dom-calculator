document.addEventListener('DOMContentLoaded', function(){
  console.log('This code was run when the page is finished loading');
});

var clear = document.getElementsByClassName('buttonClear')[0];
var nButtons = document.getElementsByClassName('buttonNum');
var operators = document.getElementsByClassName('operator');
var sumButton = document.getElementsByClassName('equals')[0];
var display = document.getElementById('screen');
var int1;
var int2;
var operator = '';
var number = '';


function addToDisplay(number, nString){
  number = number + nString;
  console.log(number);
  display.innerHTML = number;
  return number;
}



for (var i = 0; i < nButtons.length; i++) {
     var nButton = nButtons[i];
     nButton.addEventListener('click', function(event){

      number = addToDisplay(number, event.target.innerHTML) ;

     savedNumber(number);

    });
};



for ( var j = 0; j < operators.length; j++) {
var oButton = operators[j];
oButton.addEventListener('click', function(event){

  operator = addToDisplay(operator, event.target.innerHTML) ;
  number = '';


    });
};


function savedNumber(number){
  parsedNumber = parseFloat(number);
  if(!int1){
    return int1 = parsedNumber;

  }else{
    return int2 = parsedNumber;
  }
}


function calculate(num1, num2, operator){
  console.log(int1, operator, int2);

  switch (operator) {
    case '+': return num1+num2;
      break;

    case '-': return num1-num2;
      break;

    case '*': return num1*num2;
      break;

    case '/': return num1/num2;
      break;

    default: console.log('Not a operator');

  }

}

sumButton.addEventListener('click', function(event){
  var answer = calculate(int1, int2, operator)
  console.log(answer);
   answer = display.innerHTML;


})
