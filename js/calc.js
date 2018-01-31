document.addEventListener('DOMContentLoaded', function(){
  console.log('This code was run when the page is finished loading');
});

var screen = document.getElementById('screen');
var buttons = document.getElementsByClassName('buttonNum');
var operator = document.getElementsByClassName('operator');
var clear = document.getElementsByClassName('buttonClear');
var sum = document.getElementsByClassName('equals');

function displayData(text){
 return  screen.innerHTML = text;
}

for (i = 0; i < buttons.length; i++) {

     // Find number number clicked
     //store number
    //replace display with number

    buttons[i].addEventListener('click', function(){
      console.log(event.target.innerHTML);
    } )


}

for ( j = 0; j < operator.length; j++) {
    //find operator clicked
    //store operator
    //add operator to display
}

function storeNumber(number){


}



var Num1
var Num2
