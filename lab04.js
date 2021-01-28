var TypeOfFlower = prompt("What The  Type Of Flowers You Want ?");
//var NoFlower = prompt("What Number of flowers?");
//var respose ;


/*if ( NoFlower > 3){
    respose ="You Will Get one more flower ";

}else if( NoFlower > 5) {

 respose ="You Will Get one more flower and DisCount 10% ";}

else if( NoFlower > 10) {

    respose ="You Will Get 5 flowers and DisCount 15% ";}
 else {
        respose ="Give me You Feed Back ";  
}

document.getElementById("ordar").innerHTML= respose;
confirm("Are you sure to buy it ?");
alert("Thank you ");*/
while (TypeOfFlower!== 'red' && TypeOfFlower !== 'yellow') {
    TypeOfFlower = prompt('what do you want red or yellow');
  }
  
  var NoFlower = '';
  
  if (TypeOfFlower === 'red') {
    NoFlower = '<img src="red.jpg"/>';
  } else if (TypeOfFlower === 'yellow') {
    NoFlower = '<img src="yellow.jpg"/>';
  }

  var NoFlower = prompt("What Number of flowers?");

var result = '';

for (var i = 0; i <  NoFlower; i++) {
  result = result + itemOrder;
}

document.getElementById("ordar").innerHTML=result;

