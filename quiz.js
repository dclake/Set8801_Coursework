console.log("Hello");

let question_count = 3;
var question_number = 1;
var current_question = question_number-1;
var click;
console.log("Current Question: " + current_question)




var answers = [];
var choice = '';


let questions = [
    {
        id: 1,
        question: "Saint Lucia is a ________?",
        answer: 2,
        explanation: "Saint Lucia is a fertile island country in the Caribbean Sea. Its closest neighbours are the islands of Martinique, to the north, and Saint Vincent, to the south-west.",      
        readMore: "https://thecommonwealth.org/our-member-countries/saint-lucia#:~:text=Saint%20Lucia%20is%20a%20fertile,rivers%20and%20boiling%20sulphur%20springs.",
        choices: [
            "Planet",
            "Island",
            "Sports Team",
            "Mythical Location"
        ]
    },
    {
        id: 2,
        question: "What is the Capital City of Saint Lucia?",
        answer: "Castries",
        choices: [
            "Bridgetown",
            "Castries",
            "Roseau",
            "Canneries"
        ]
    },
    {
        id: 3,
        question: "What Sea boarders the western coast of Saint Lucia?",
        answer: "Caribbean Sea",
        choices: [
            "Caspian Sea",
            "Black Sea",
            "Caribbean Sea",
            "What Sea?"
        ]
    }
]

questionCounter(question_number);
showQuestions();
showChoices();
// chooseAnswer();

var A = document.getElementById("ID1");
var B = document.getElementById("ID2");
var C = document.getElementById("ID3");
var D = document.getElementById("ID4");
var next = document.getElementById("next");
var questionState = "";

function nullButtons(){
    A.onclick = null;
    B.onclick = null;
    C.onclick = null;
    D.onclick = null;
}
A.onclick = function() {
    choice = 1;
    questionState = "answered";
    checkAnswer(choice);
    nullButtons();

}
B.onclick = function() {
    choice = 2;
    questionState = "answered";
    checkAnswer(choice);

    nullButtons();
}
C.onclick = function() {
        choice = 3;
        questionState = "answered";
        checkAnswer(choice);
        nullButtons();
}
D.onclick = function() {
            choice = 4;
            questionState = "answered";
            checkAnswer(choice);
            nullButtons();
}
// next.onclick =function nextButton(){
//     console.log("Next Button Clicked")
//     if (questionState == "answered"){
//         question_number ++;
//         console.log(question_number)
//     }
//     else{
//         alert("You must answer the question first!")
//     }
// }
next.onclick= function nextButton() {
    if (questionState == "answered"){
        if (question_number == question_count) {

            // Add disabled attribute on
            // next button
            document.getElementsByClassName(
                    'next').disabled = true;
        } else {
            question_number++;
            current_question++;
            setNo();
        }
    }
    else{
        alert("You must answer the question first!")
    }
}
function setNo() {
    questionCounter();
    showQuestions();
    showChoices();
    // var div = document.getElementById("question_number");

    // Change innerhtml
    // count = question_number + "/" + question_count;

    // return no_box.innerHTML = i;
    // div.innerHTML = count;
    // resestOptions();


}
function resestOptions(){
    document.getElementById("choice_text").reset();  

}

function questionCounter(q_number){
    console.log(q_number);
    q_number = question_number;
    var div = document.getElementById("question_number");
    count = q_number + "/" + question_count;
    console.log(count);
    div.innerHTML = count;
}
function showQuestions (c_question){
    c_question = current_question;
    console.log(current_question);
    var div = document.getElementById('question_text');
    question = questions[c_question].question;
    div.innerHTML = question;
}
function showChoices(){
    getChoices();
    console.log("running");
  console.log(click);

    
}

function getChoices(c_question){
    c_question = current_question;
    // var current_question = question_number-1;
    let choice_text="";
    let data_number=1;
    var div = document.getElementById('choice_text');
    div.innerHTML = choice_text;



    
    for (let i = 0; i < questions[c_question].choices.length; i++) {
        // console.log(data_number);
    choice_text = '<div id = ID'+ data_number +'> <li class="choice "'+ 'data-number='  +data_number + '">' + questions[current_question].choices[i] + '</li> </div>';
    div.style.backgroundColor = "white";
    div.innerHTML += choice_text;
    data_number ++;
}

//document.getElementById("choice_text").addEventListener("click", checkAnswer);

}

console.log(choice);

function checkAnswer(choice){
correct_answer = questions[0].answer;
let linkText ="Read More"
var readMoreLink = questions[0].readMore;
var result = "<a href='" + readMoreLink + "' target='_blank'>" + linkText+ "</a>";




    if(choice == correct_answer) {
        console.log('correct');
        buttonClicked = "#ID" + choice;
        document.querySelector(buttonClicked).style.backgroundColor = "green"
    } else {
        console.log('wrong');
        buttonClicked = "#ID" + choice;
        document.querySelector(buttonClicked).style.backgroundColor = "red"
    }
    var explanation = questions[0].explanation + " " + result;
    var showEplanation = document.getElementById('explanation');
    
   
    showEplanation.innerHTML = explanation;
    // console.log(result);
    // function myFunction() {
    //     window.open("https://www.w3schools.com");
}
// }


