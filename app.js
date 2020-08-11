// create our questions

var questionsArray = [
{

    question : " Prolog comes under ______ ?",
    answer : "Logic Programming",
options :[
     "Logic Programming",
     "Procedural Programming",
     "OOP",
     "Functional"
]
    

       
    },
    {

        question : " A program that can execute high-level language programs ?",
        answer : " Interpreter",
        options :[
         " Compiler",
         "Interpreter ",
        " Sensor",
         "Circuitry"
]
       
    },
    {

        question : " JVM stands for ?",
        answer : "Java virtual machine",
options :[
         " Java virtual machine",

         " Java visual machine",
         " JRE virtual machine",
         "JRE visual machine",
]
    },
   {
    question : " Which of the following isn’t a characteristic of High level languages ?",
    answer : "machine code",
options :[
     "machine code",
     "platform independent",
     "interactive execution",
     "user-friendly"
]
   },
   {
    question : " The only language which the computer understands is  ?",
    answer : "Binary Language",
options :[
     " Assembly Language",

     "Binary Language",
    "BASIC",
     "C Language"
]
   },

];
////// show question
function showQuestion(e){
    var questionElement = document.getElementById("questionElement")
    questionElement.innerHTML =questionsArray[e].question


////// show option
var optionElement = document.getElementsByClassName("optionElement")
for (var i = 0; i < optionElement.length; i++){


  optionElement[i].innerHTML =questionsArray[e].options[i];
}
}
var questionCount = 0;
var score = 0;
function nextQuestion(){
 
 ///// check ans by user
//  var user_ans = document.getElementsByClassName("optionElement.active");

//  console.log(user_ans);
//  if(active[0].innerHTML == questionsArray[e].answer){
   
    // score += 10;
    //     sessionStorage.setItem("Score" , score)

//   }
   questionCount++;
validate(questionCount);
 removeActiveClass()
 showQuestion(questionCount)
//  if(questionCount == 4 ){
//     alert("Ready For Your Result Click Okay");
//     window.location.href = "reward.html";
// }

}

////// Active 

function putActiveClass(e){
    removeActiveClass()
e.classList.add("active")
   
}

function removeActiveClass(){
    var active = document.getElementsByClassName ("active")
    for(var i = 0; i< active.length; i++){

        active[i].classList.remove("active")
    }
}
function validate(e){
    var active = document.getElementsByClassName ("active")
if(active[0].innerHTML == questionsArray[e].answer){
    score += 10;
    console.log(active);
    // sessionStorage.setItem("Score" , score)
}
}

/////////////Timer
function callTimer(){
const startingMints = 5;
let time = startingMints * 60;

const timer = document.getElementById('timer');
setInterval(updateTimer,  1000);
function updateTimer(){

const mints = Math.floor(time/60);
let secs = time % 60 ; 
secs = secs < 10 ? '0' + secs : secs;

timer.innerHTML=`${mints}: ${secs}`;
time--;

if(mints == 00 && secs == 00){
    alert("Oopps!! Times Up");
    window.location.href = "reward.html";
}

}
}