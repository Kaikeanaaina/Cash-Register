//call this code when you want to change innerHTML
var changeDisplay= function(text){
    document.getElementById('display').innerHTML += text;
  };


document.getElementById('1').addEventListener('click',function(){
  if(operation_counter===false){
    sCreen.push(1);
    changeDisplay(1);
    memory=sCreen;
  }
  else{
    sCreen=[];
    sCreen.push(1);
    changeDisplay(1);
    memory2=sCreen;
  }

  // console.log('NEW');
  // console.log(sCreen);
  // console.log(memory + " memory");
  // console.log(balance + " balance");
});

document.getElementById('2').addEventListener('click',function(){
  if(operation_counter===false){
    sCreen.push(2);
    changeDisplay(2);
    memory=sCreen;
  }
  else{
    sCreen=[];
    sCreen.push(2);
    changeDisplay(2);
    memory2=sCreen;
  }
});

document.getElementById('3').addEventListener('click',function(){
  if(operation_counter===false){
    sCreen.push(3);
    changeDisplay(3);
    memory=sCreen;
  }
  else{
    sCreen=[];
    sCreen.push(3);
    changeDisplay(3);
    memory2=sCreen;
  }
});

document.getElementById('4').addEventListener('click',function(){
  if(operation_counter===false){
    sCreen.push(4);
    changeDisplay(4);
    memory=sCreen;
  }
  else{
    sCreen=[];
    sCreen.push(4);
    changeDisplay(4);
    memory2=sCreen;
  }
});

document.getElementById('5').addEventListener('click',function(){
  if(operation_counter===false){
    sCreen.push(5);
    changeDisplay(5);
    memory=sCreen;
  }
  else{
    sCreen=[];
    sCreen.push(5);
    changeDisplay(5);
    memory2=sCreen;
  }
});

document.getElementById('6').addEventListener('click',function(){
  if(operation_counter===false){
    sCreen.push(6);
    changeDisplay(6);
    memory=sCreen;
  }
  else{
    sCreen=[];
    sCreen.push(6);
    changeDisplay(6);
    memory2=sCreen;
  }
});

document.getElementById('7').addEventListener('click',function(){
  if(operation_counter===false){
    sCreen.push(7);
    changeDisplay(7);
    memory=sCreen;
  }
  else{
    sCreen=[];
    sCreen.push(7);
    changeDisplay(7);
    memory2=sCreen;
  }
});

document.getElementById('8').addEventListener('click',function(){
  if(operation_counter===false){
    sCreen.push(8);
    changeDisplay(8);
    memory=sCreen;
  }
  else{
    sCreen=[];
    sCreen.push(8);
    changeDisplay(8);
    memory2=sCreen;
  }
});

document.getElementById('9').addEventListener('click',function(){
  if(operation_counter===false){
    sCreen.push(9);
    changeDisplay(9);
    memory=sCreen;
  }
  else{
    sCreen=[];
    sCreen.push(9);
    changeDisplay(9);
    memory2=sCreen;
  }
});

document.getElementById('0').addEventListener('click',function(){
  if(sCreen[0]===0|| sCreen[0]===null){
    return false;
  }
  else{
    if(operation_counter===false){
      sCreen.push(0);
      changeDisplay(0);
      memory=sCreen;
      console.log('kai');
    }

    else{
      sCreen=[];
      sCreen.push(0);
      changeDisplay(0);
      memory2=sCreen;
    }
  }
});

document.getElementById('doubleZero').addEventListener('click',function(){
  if(sCreen[0]===0|| sCreen[0]===null){
    return false;
  }
  else{
    if(operation_counter===false){
      sCreen.push("00");
      changeDisplay("00");
      memory=sCreen;
    }

    else{
      sCreen=[];
      sCreen.push("00");
      changeDisplay("00");
      memory2=sCreen;
    }
  }
});

document.getElementById('decimal').addEventListener('click',function(){
  if(sCreen[sCreen.length-1]==='.'){
    return false;
  }
  else{
    sCreen.push('.');
    changeDisplay('.');
  }
});

document.getElementById('clearButton').addEventListener('click',function(){
  memory= 0;
  sCreen = [];
  algebra = 0;
  balance = 0;
  operation_counter = false;
  sCreen= [];
  document.getElementById('display').innerHTML = [];
});




document.getElementById('getBalanceButton').addEventListener('click',function(){
  //document.getElementById('display').innerHTML = balance.join('');
  //var x = balance.join('');
  //console.log(x, 'is the balance');
  console.log(balance);
  console.log(typeof balance === 'string');
  var x = parseFloat(balance.replace(/,/g, ''));
  console.log(x);
});


document.getElementById('depositCashButton').addEventListener('click',function(){
  balance += sCreen;
  // balance.join(",");
  sCreen = [];
  document.getElementById('display').innerHTML = sCreen;
});

document.getElementById('withdrawCashButton').addEventListener('click',function(){
  balance -= sCreen;
  sCreen = [];
  document.getElementById('display').innerHTML = sCreen;
});

document.getElementById('divide').addEventListener('click',function(){
  memory=sCreen;
  algebra=1;
  operation_counter=true;

  document.getElementById('display').innerHTML = sCreen;
});

document.getElementById('equals').addEventListener('click',function(){
  if(algebra===1){
    console.log(memory);
    console.log(memory2);
  }

else if(algebra===2){
  console.log('this is 2');
}

else if(algebra===3){
  console.log('this is 3');
}

else if(algebra===4){
  console.log('this is 4');
}

else{
  console.log('this is you fucking up');
}

  document.getElementById('display').innerHTML = total;
});

