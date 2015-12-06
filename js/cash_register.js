//call this code when you want to change innerHTML
var changeDisplay= function(text){
    document.getElementById('display').innerHTML += text;
  };


document.getElementById('1').addEventListener('click',function(){
  memory.push(1);
  changeDisplay(1);
});

document.getElementById('2').addEventListener('click',function(){
  memory.push(2);
  changeDisplay(2);
});

document.getElementById('3').addEventListener('click',function(){
  memory.push(3);
  changeDisplay(3);
});

document.getElementById('4').addEventListener('click',function(){
  memory.push(4);
  changeDisplay(4);
});

document.getElementById('5').addEventListener('click',function(){
  memory.push(5);
  changeDisplay(5);
});

document.getElementById('6').addEventListener('click',function(){
  memory.push(6);
  changeDisplay(6);
});

document.getElementById('7').addEventListener('click',function(){
  memory.push(7);
  changeDisplay(7);
});

document.getElementById('8').addEventListener('click',function(){
  memory.push(8);
  changeDisplay(8);
});

document.getElementById('9').addEventListener('click',function(){
  memory.push(9);
  changeDisplay(9);
});

document.getElementById('0').addEventListener('click',function(){
  memory.push(0);
  changeDisplay(0);
});

document.getElementById('doubleZero').addEventListener('click',function(){
  memory.push('00');
  changeDisplay('00');
});

document.getElementById('decimal').addEventListener('click',function(){
  memory.push('00');
  changeDisplay('00');
});

document.getElementById('clearButton').addEventListener('click',function(){
  total = 0;
  document.getElementById('display').innerHTML = total;
});

document.getElementById('getBalanceButton').addEventListener('click',function(){
  document.getElementById('display').innerHTML = total;
});

