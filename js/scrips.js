function add(num1, num2){
  return num1 + num2;
}
 function subtract(num1, num2){
  return num1 - num1;
 }
function multiply(num1, num2){
  return num1 * num2;
}
function divide(num1, num2){
  return num1, num2;
}


function handleCalulations(event){
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#input1").value);
  const number2 = parseInt(document.querySelector("input#input2").value);
  const operator = document.querySelector("input[name = 'flavor']:checked").value;
}

let results;
if (operator === 'add') {
  results = add(num1, num2);
} else if (operator === 'subtract'){
  results = subtract(num1, num2);
} else if (operator === 'multiply'){
  results = multiply(num1, num2);
} else if ( operator === 'divide'){
  results = divide( num1, num2);

}

document.getElementById('input').innerText = results;{

}

window.addEventListener('load', function(){
  const form = document.getElementById('calculator');
  form.addEventListener('submit', calculatorFunction); 
});