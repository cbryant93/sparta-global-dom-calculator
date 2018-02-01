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
var next = false;

function displayText(screen){
  display.innerHTML = screen;
}


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



    });
};



for ( var j = 0; j < operators.length; j++) {
var oButton = operators[j];
oButton.addEventListener('click', function(event){
   savedNumber(number);
   number = '';
  operator = addToDisplay(operator, event.target.innerHTML) ;
  next = true;


    });
};


function savedNumber(number){
  parsedNumber = parseFloat(number);
  if(!next){
    int1 = parsedNumber;

  }else{
    int2 = parsedNumber;
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
  savedNumber(number);
  var answer = calculate(int1, int2, operator)
  console.log(answer);
   display.innerHTML = answer;


})

clear.addEventListener('click', function(){
  num1 = 0;
  num2 = 0;
  next = false;
  operator = '';
  number = '';
  display.innerHTML = 0;


})
