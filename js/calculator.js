// don't forget to use window.onload or put scripts on the body of your body
var total;
var memory=[];
var balance=0;


//clear
//will clear the display



var clear = function(){
  memory = 0;
  return  momery;
};
//getBalance
//will display the current balance

var getBalance = function(){
  return total;
};

//depositCash
// will add the amount currently
//in the (display) to the cash register,
//then clears the display
var depositCash=function(){
  total+=momery;
  momery=0;
  return momery;
};


//withdrawCase
//will remove the amount
//in the (display) to the cash register,
//then clears the display
var withdrawCase =function(){
      total-=momery;
      momery=0;
      return momery;
    };

var setDisplay=function(amount){
  momery = amount;
  return momery;
};