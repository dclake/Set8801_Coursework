console.log("Hello");

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
showQuestions();
function showQuestions (){
    var div = document.getElementById('question_text');
    question = questions[0].question
    div.innerHTML += question;
}


