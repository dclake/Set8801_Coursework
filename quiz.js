let question_count = 3;
var question_number = 1;
var current_question = question_number - 1;
var click;
var answers = [];
var choice = '';


let questions = [{
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
        answer: 3,
        explanation: "Castries, capital and chief city of Saint Lucia island state, in the eastern Caribbean Sea.",
        readMore: "https://www.britannica.com/place/Castries",
        choices: [
            "Bridgetown",
            "Roseau",
            "Castries",
            "Canneries"
        ]
    },
    {
        id: 3,
        question: "What Sea boarders the western coast of Saint Lucia?",
        answer: 3,
        explanation: "The beaches on the western side of the island front the tranquil turquoise waters of the Caribbean Sea and are favored for swimming and water sports.",
        readMore: "https://www.tripsavvy.com/st-lucias-best-beaches-1488648",
        choices: [
            "Caspian Sea",
            "Black Sea",
            "Caribbean Sea",
            "What Sea?"
        ]
    }
]
setNo();
// questionCounter(question_number);
// showQuestions();
// showChoices();
// chooseAnswer();

function playQuiz() {
    var A = document.getElementById("ID1");
    var B = document.getElementById("ID2");
    var C = document.getElementById("ID3");
    var D = document.getElementById("ID4");
    var next = document.getElementById("next");
    var questionState = "";

    function nullButtons() {
        A.onclick = null;
        B.onclick = null;
        C.onclick = null;
        D.onclick = null;
    }
    A.onclick = function () {
        choice = 1;
        questionState = "answered";
        checkAnswer(choice);
        nullButtons();

    }
    B.onclick = function () {
        choice = 2;
        questionState = "answered";
        checkAnswer(choice);

        nullButtons();
    }
    C.onclick = function () {
        choice = 3;
        questionState = "answered";
        checkAnswer(choice);
        nullButtons();
    }
    D.onclick = function () {
        choice = 4;
        questionState = "answered";
        checkAnswer(choice);
        nullButtons();
    }
   
    next.onclick = function nextButton() {
        if (questionState == "answered") {
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
        } else {
            alert("You must answer the question first!")
        }
    }
    
    function nullButtons() {
        A.onclick = null;
        B.onclick = null;
        C.onclick = null;
        D.onclick = null;
    }
    A.onclick = function () {
        choice = 1;
        questionState = "answered";
        checkAnswer(choice);
        nullButtons();

    }
    B.onclick = function () {
        choice = 2;
        questionState = "answered";
        checkAnswer(choice);

        nullButtons();
    }
    C.onclick = function () {
        choice = 3;
        questionState = "answered";
        checkAnswer(choice);
        nullButtons();
    }
    D.onclick = function () {
        choice = 4;
        questionState = "answered";
        checkAnswer(choice);
        nullButtons();
    }
    next.onclick = function nextButton() {
        if (questionState == "answered") {
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
        } else {
            alert("You must answer the question first!")
        }
    }
}

function setNo() {
    console.log("Current Question: " + (current_question))
    questionCounter();
    showQuestions();
    showChoices();
    playQuiz();
    clearExplanation();


}

// function resestOptions() {
//     document.getElementById("choice_text").reset();

// }

function questionCounter(q_number) {
    q_number = question_number;
    var div = document.getElementById("question_number");
    count = q_number + "/" + question_count;
    div.innerHTML = count;
}

function showQuestions(c_question) {
    c_question = current_question;
    var div = document.getElementById('question_text');
    question = questions[c_question].question;
    div.innerHTML = question;
}

function showChoices() {
    getChoices();
}
function getChoices(c_question) {
    c_question = current_question;
    // var current_question = question_number-1;
    let choice_text = "";
    let data_number = 1;
    var div = document.getElementById('choice_text');
    div.innerHTML = choice_text;

    for (let i = 0; i < questions[c_question].choices.length; i++) {
        choice_text = '<div id = ID' + data_number + '> <li class="choice "' + 'data-number=' + data_number + '">' + questions[current_question].choices[i] + '</li> </div>';
        div.style.backgroundColor = "white";
        div.innerHTML += choice_text;
        data_number++;
    }
}


function checkAnswer() {
    c_question = current_question;
    correct_answer = questions[c_question].answer;
    console.log("corret Answer: " + correct_answer);
    let linkText = "Read More"
    var readMoreLink = questions[current_question].readMore;
    var result = "<a href='" + readMoreLink + "' target='_blank'>" + linkText + "</a>";


    if (choice == correct_answer) {
        console.log('correct');
        buttonClicked = "#ID" + choice;
        document.querySelector(buttonClicked).style.backgroundColor = "green"
    } else {
        console.log('wrong');
        buttonClicked = "#ID" + choice;
        document.querySelector(buttonClicked).style.backgroundColor = "red"
    }
    var explanation = questions[c_question].explanation + " " + result;
    var showEplanation = document.getElementById('explanation');


    showEplanation.innerHTML = explanation;
}
function clearExplanation (){
    var showEplanation = document.getElementById('explanation');
    showEplanation.innerHTML = "";



}
