let inputOne = document.getElementById('input1');
let inputTwo = document.getElementById('input2');
let output = document.getElementById('answer-elem');

function Add() {
    var sum = parseInt(inputOne.value) + parseInt(inputTwo.value);
    output.innerHTML = "Sum "+sum;
}
function Sub() {
    var sum = parseInt(inputOne.value) - parseInt(inputTwo.value);
    output.innerHTML = "Subtract "+sum;
}
function Multiply() {
    var sum = parseInt(inputOne.value) * parseInt(inputTwo.value);
    output.innerHTML = "Multiply "+sum;
}
function Divide() {
    var sum = parseInt(inputOne.value) / parseInt(inputTwo.value);
    output.innerHTML = "Divide "+sum;
}

























