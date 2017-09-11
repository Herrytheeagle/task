/*function best(name){
    alert(name  + " is the Chief Developer");
}
best("De Paule");*/

function quizGame(){
var passed=0;
var answer1="AKURE";
    var answer2="ADO-EKITI";
    var answer3="IKEJA";
     var answer4="CALABAR";
      var answer5="OWERRI";
        var question1= prompt ('what is the capital of Ondo state ?');
if(question1.toUpperCase() === answer1){
    passed+=1;
    alert ('correct');
}
else {
    passed===passed;
    alert('wrong,try your best in the next question');
}
var question2= prompt ('what is the capital of Ekiti state ?');
if(question2.toUpperCase() === answer2){
     passed+=1;
    alert ('correct');
}
else {
     passed===passed;
    alert('wrong,try you best in the next question');
}
var question3= prompt ('what is the capital of Lagos state ?');
if(question3.toUpperCase() === answer3){
     passed+=1;
    alert ('correct');
}
else {
     passed===passed;
    alert('wrong,try you best in the next question');
}
var question4= prompt ('what is the capital of Cross River state ?');
if(question4.toUpperCase() === answer4){
     passed+=1;
    alert ('correct');
}
else {
     passed===passed;
    alert('wrong,try you best in the next question');
}
var question5= prompt ('what is the capital of Imo state ?');
if(question5.toUpperCase() === answer5){
     passed+=1;
    alert ('Wow,correct');
}
if (passed===5) {
    alert("You have gotten a GOLD crown   ");
       document.write("You have gotten a GOLD crown   ");
}
else if (passed===4) {
    alert("You have gotten a SILVER crown");
     document.write("You have gotten a SILVER crown   ");
}
else if (passed===3) {
    alert("You have gotten a BRONZE crown");
     document.write("You have gotten a BRONZE crown   ");
}
else if(passed < 3) {
    alert("You had a poor performance..No crown yet.  ");
    document.write("You had a poor performance..No crown yet.        ");
}
else {
    alert("Thank you for attempting");
}
document.write("   You answered " + passed + " question correctly");

     return passed;
    
 }
alert ( quizGame() );
console.log( quizGame() );