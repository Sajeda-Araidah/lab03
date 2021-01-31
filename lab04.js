/*var TypeOfFlower = prompt("What The  Type Of Flowers You Want ?");
//var NoFlower = prompt("What Number of flowers?");
var respose ;


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
alert("Thank you ");
function  ToF (){
while (TypeOfFlower!== 'red' && TypeOfFlower !== 'yellow') {
    TypeOfFlower = prompt('what do you want red or yellow');
  }
  
  var NoFlower1 = '';
  
  if (TypeOfFlower === 'red') {
    NoFlower1 = '<img  style="width:100px ; background-color:red;" src="red.jpg"/>';
  } else if (TypeOfFlower === 'yellow') {
    NoFlower1 = '<img style="width:100px; background-color:yellow; " src="yellow.jpg"/>';
  }

  var NoFlower = prompt("What Number of flowers?");

var result =' ' ;
for (var i = 0; i <  NoFlower; i++) {
  result = result + NoFlower1;
}

document.getElementById("ordar").innerHTML=result; }


ToF ();*/

TypeOfFlower = prompt('Which color you want ');
confirm("Are you sure to buy it ?")

function TTOf() {
  if (TypeOfFlower=='red'  ){
  respose ="You Buy  " +TypeOfFlower+" flower ";
  document.getElementById("ordar").innerHTML=respose; }
  else if(TypeOfFlower=='pink') {
  respose ="You Buy  " +TypeOfFlower+" flower "; 
  document.getElementById("ordar1").innerHTML=respose;}
  else if(TypeOfFlower=='purple') {
    respose ="You Buy  " +TypeOfFlower+" flower "; 
    document.getElementById("ordar2").innerHTML=respose;}
 
  }
  
TTOf();

