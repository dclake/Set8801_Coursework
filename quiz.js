let question_count = 3;
let passing_score = 50;
var question_number = 1;
var current_question = question_number - 1;
var click;
var answers = [];
var choice = '';
var score = 0;
var score_percentage = 0;

var div_results = document.getElementById("results");
var div_question_number = document.getElementById("question_number");
var div_header = document.getElementById("question_header");
var div_question_text = document.getElementById('question_text');
var div_choice_text = document.getElementById('choice_text');
var div_explanation = document.getElementById('explanation');
var div_next = document.getElementById("next");
var div_review = document.getElementById("review");
var div_again = document.getElementById("again");
var div_home = document.getElementById("home");



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

function playQuiz() {
    var A = document.getElementById("ID1");
    var B = document.getElementById("ID2");
    var C = document.getElementById("ID3");
    var D = document.getElementById("ID4");
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
    div_next.onclick = function nextButton() {
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
    div_next.onclick = function nextButton() {
        if (questionState == "answered") {
            if (question_number == question_count) {
                document.getElementsByClassName(
                    'next').disabled = true;
                    showResults();
            } else {
                question_number++;
                current_question++;
                setNo();
            }
        } else {
            alert("You must answer the question first!")
        }
    }
    div_again.onclick = function againButton(){
        console.log("again pressed");
        resetQuiz();
    }
    
}
function setNo() {
    hideResultButtons();
    questionCounter();
    showQuestions();
    showChoices();
    playQuiz();
    clearExplanation();
}
function questionCounter() {
    count = question_number + "/" + question_count;
    div_question_number.innerHTML = count;
}
function showQuestions() {
    question = questions[current_question].question;
    div_question_text.innerHTML = question;
}
function showChoices() {
    let choice_text = "";
    let data_number = 1;
    div_choice_text.innerHTML = choice_text;

    for (let choice_position = 0; choice_position < questions[current_question].choices.length; choice_position++) {
        choice_text = '<div id = ID' + data_number + '> <li class="choice "' + 'data-number=' + data_number + '">' + 
        questions[current_question].choices[choice_position] + '</li> </div>';
        div_choice_text.style.backgroundColor = "white";
        div_choice_text.innerHTML += choice_text;
        data_number++;
    }
}
function checkAnswer() {
    correct_answer = questions[current_question].answer;
    let linkText = "Read More"
    var readMoreLink = questions[current_question].readMore;
    var result = "<a href='" + readMoreLink + "' target='_blank'>" + linkText + "</a>";
    var explanation = questions[current_question].explanation + " " + result;
    var buttonClicked = "#ID" + choice;

    if (choice == correct_answer) {
        document.querySelector(buttonClicked).style.backgroundColor = "green"
        score ++;
    } else {
        document.querySelector(buttonClicked).style.backgroundColor = "red"
    }
    div_explanation.innerHTML = explanation;
}
function clearExplanation(){
    var showEplanation = document.getElementById('explanation');
    showEplanation.innerHTML = "";
}
function showResults(){
    div_header.innerHTML = "Results";
    clearBox();
    calculateScore();
    checkWin();
}
function resetQuiz(){
    question_number = 1;
    current_question = question_number;
    div_results.style.visibility = "hidden";
    div_results.style.display = "none";
    div_header.style.visibility ="hidden";
    div_header.style.display = "none";
    showNextButton ();
    setNo();
}
function calculateScore(){
    score_percentage = (score/question_count) * 100;
}
function checkWin(){
    if (score_percentage > passing_score){
        result_text = "Congrats" + "!" + "<br>" + "You really know Saint Lucia!" +
        "<p>You got " + score + "/" + question_count + "<br>" + score_percentage + "%</p>";
    }
    else{
        result_text = "Sorry" + "!" + "<br>" + "You need to learn more about Saint Lucia!" +
        "<p>You got " + score + "/" + question_count + "<br>" + score_percentage + "%</p>";
    }
    div_results.innerHTML = result_text;
    hideNextButton();
    showResultButtons();
}
function clearBox(){
    div_question_number.innerHTML ="";
    div_question_text.innerHTML = "";
    div_choice_text.innerHTML = "";
    clearExplanation();
}
function hideResultButtons(){
    div_review.style.visibility = "hidden";
    div_again.style.visibility = "hidden";
    div_home.style.visibility = "hidden";
    div_review.style.display = "none";
    div_again.style.display = "none";
    div_home.style.display = "none";
}
function showResultButtons(){
    div_review.style.visibility = "visible"
    div_again.style.visibility = "visible";
    div_home.style.visibility = "visible";
    div_review.style.display = "block";
    div_again.style.display = "block";
    div_home.style.display = "block";
}
function hideNextButton(){
    div_next.style.visibility = "hidden";
    div_next.style.display = "none"
}
function showNextButton(){
    div_next.style.visibility = "visible";
    div_next.style.display = "block"
}

