console.log("Hello");

let question_count = 3;
let question_number = 1;


let questions = [
    {
        id: 1,
        question: "Saint Lucia is a ________?",
        answer: "Island",
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


function questionCounter(){
    var div = document.getElementById("question_number");
    count = question_number + "/" + question_count;
    div.innerHTML += count;
}

function showChoices(){
    getChoices();
}

function showQuestions (){
    var div = document.getElementById('question_text');
    question = questions[0].question;
    div.innerHTML += question;
};
function getChoices(){
    var div = document.getElementById('choice_text');
    choice_text = questions[1].choices[0];
    console.log(choice_text);
    div.innerHTML += choice_text;
}




