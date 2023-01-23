var nameList=["mukhid","raheman","mushrraf","faizan","shoeb","imran"];

function personList(){
var numberofpeople=nameList.length
console.log(numberofpeople)
var randompersionpositin=Math.floor(Math.random() * numberofpeople);
var randomposition=nameList[randompersionpositin];
console.log(randomposition);
console.log( randomposition + "is going to buy luch today");

}
personList();
