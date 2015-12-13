// don't forget to use window.onload or put scripts on the body of your body
var sCreen=[];
var memory=0;  // this is the display
var memory2=0;
var balance=0;
var operation_counter = false;


//clear
//will clear the display



var clear = function(){
  memory = 0;
  return  memory;
};
//getBalance
//will display the current balance

var getBalance = function(){
  return balance;
};

//depositCash
// will add the amount currently
//in the (display) to the cash register,
//then clears the display
var depositCash=function(){
  balance+=memory;
  memory=0;
  return memory;
};


//withdrawCase
//will remove the amount
//in the (display) to the cash register,
//then clears the display
var withdrawCase =function(){
      total-=memory;
      memory=0;
      return memory;
    };

var setDisplay=function(amount){
  memory = amount;
  return memory;
};