console.log("Hello");

let question_count = 3;
let question_number = 1;
let current_question = question_number-1;
var click;



var answers = [];
var choice = '';


let questions = [
    {
        id: 1,
        question: "Saint Lucia is a ________?",
        answer: 2,
        explanation: "Saint Lucia is a fertile island country in the Caribbean Sea. Its closest neighbours are the islands of Martinique, to the north, and Saint Vincent, to the south-west. It was formed by volcanic activity. Its geographic features include a central ridge of mountains, many rivers and boiling sulphur springs. It is surrounded by sandy beaches.",      
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
questionCounter();
showQuestions();

showChoices();
var A = document.getElementById("ID1");
var B = document.getElementById("ID2");
var C = document.getElementById("ID3");
var D = document.getElementById("ID4");

function nullButtons(){
    A.onclick = null;
    B.onclick = null;
    C.onclick = null;
    D.onclick = null;
}
A.onclick = function() {
    choice = 1;
    checkAnswer(choice);
    nullButtons();

}
B.onclick = function() {
    choice = 2;
    checkAnswer(choice);
    nullButtons();
}
C.onclick = function() {
        choice = 3;
        checkAnswer(choice);
        nullButtons();
}
D.onclick = function() {
            choice = 4;
            checkAnswer(choice);
            nullButtons();
}

function questionCounter(){
    var div = document.getElementById("question_number");
    count = question_number + "/" + question_count;
    div.innerHTML += count;
}

function showChoices(){
    getChoices();
    console.log("running");
  console.log(click);

    
}

function showQuestions (){
    var div = document.getElementById('question_text');
    question = questions[0].question;
    div.innerHTML += question;
};
function getChoices(){
    let choice_text="";
    let data_number=1;
    
    for (let i = 0; i < questions[current_question].choices.length; i++) {
        console.log(data_number);
    var div = document.getElementById('choice_text');
    choice_text = '<div id = ID'+ data_number +'> <li class="choice "'+ 'data-number='  +data_number + '">' + questions[current_question].choices[i] + '</li> </div>';
    div.innerHTML += choice_text;
    data_number = data_number+1;
}
//document.getElementById("choice_text").addEventListener("click", checkAnswer);

}

console.log(choice);

function checkAnswer(choice){
correct_answer = questions[0].answer;

    if(choice == correct_answer) {
        console.log('correct');
        buttonClicked = "#ID" + choice;
        document.querySelector(buttonClicked).style.backgroundColor = "green"
    } else {
        console.log('wrong');
        buttonClicked = "#ID" + choice;
        document.querySelector(buttonClicked).style.backgroundColor = "red"
    }
    var explanation = '<hr>' + questions[0].explanation;
    var showEplanation = document.getElementById('explanation');
    showEplanation.innerHTML += explanation;
    console.log(explanation);
   
}


