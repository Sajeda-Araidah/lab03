var TypeOfFlower = prompt("What The  Type Of Flowers You Want ?");
var NoFlower = prompt("What Number of flowers?");
var respose ;


if ( NoFlower > 3){
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