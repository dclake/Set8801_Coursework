let passing_score = 50;

var question_count = 0;
var question_number = 1;
var current_question = question_number - 1;
var click;
var answers = [];
var choice = '';
var score = 0;
var score_percentage = 0;

var div_results = document.getElementById("results");
var div_setup = document.getElementById("setup");
var div_name = document.getElementById("name");
var div_noquestion = document.getElementById("noquestions");
var div_easy = document.getElementById("easy");
var div_medium = document.getElementById("medium");
var div_hard = document.getElementById("hard");
var div_start = document.getElementById("start_button");
var div_question_number = document.getElementById("question_number");
var div_header = document.getElementById("question_header");
var div_question_text = document.getElementById('question_text');
var div_choice_text = document.getElementById('choice_text');
var div_explanation = document.getElementById('explanation');
var div_next = document.getElementById("next");
var div_review = document.getElementById("review");
var div_again = document.getElementById("again");
var div_home = document.getElementById("home");

// Question set
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
    },
    {
        id: 4,
        question: "Which is the official language of Saint Lucia?",
        answer: 1,
        explanation: "Saint Lucia’s official language is English, which is the island’s official language. During the 16th century, the British established a colony in the Caribbean, which gave rise to the language.",
        readMore: "https://www.ilovelanguages.com/what-language-do-they-speak-in-st-lucia/",
        choices: [
            "English",
            "French",
            "German",
            "Italian"
        ]
    },
    {
        id: 5,
        question: " _____ serves as a second language of many Saint Lucians.",
        answer: 3,
        explanation: "Saint Lucian Creole French (Kwéyol), also known as Patois, is a French-speaking dialect of Saint Lucia. ",
        readMore: "https://www.worldatlas.com/articles/what-languages-are-spoken-in-saint-lucia.html",
        choices: [
            "French",
            "Papiamento",
            "Patois/ Kweyol",
            "Klingon"
        ]
    },
    {
        id: 6,
        question: " This color is not present in the Saint Lucian Flag.",
        answer: 2,
        explanation: "The flag of Saint Lucia consists of a cerulean blue field charged with a yellow triangle in front of a white-edged black isosceles triangle.",
        readMore: "https://en.wikipedia.org/wiki/Flag_of_Saint_Lucia",
        choices: [
            "White",
            "Red",
            "Yellow",
            "Black"
        ]
    },
    {
        id: 7,
        question: "What is the name of Saint Lucia's international Airport?",
        answer: 3,
        explanation: "There are two airports on the island of St. Lucia. Hewanorra International Airport at Vieux Fort (UVF) is located on the southern end of the island and serves primarily international flights. George F. L. Charles Airport (SLU), formerly known as 'Vigie Airport', is located on the outskirts of Castries in the north and is used for inter-island flights.",
        readMore: "https://en.wikipedia.org/wiki/Hewanorra_International_Airport",
        choices: [
            "Argyle International Airport",
            "Grantley Adams International Airport",
            "Hewanorra International Airport",
            "Piarco International Airport"
        ]
    },
    {
        id: 8,
        question: "Saint Lucia is often referred to using the name of this famous woman from history:",
        answer: 4,
        explanation: " The tug-of-war between the Colonial powers of Enlgand & France, inspired one British historian to give Saint Lucia the nickname “Helen of the West Indies” comparing her to Helen of Troy",
        readMore: "https://eastwinds.com/simply-beautiful-saint-lucia-helen-of-the-west-indies/",
        choices: [
            "Queen Victoria",
            "Mary Magdalene",
            "Joan of Arch",
            "Helen of Troy"
        ]
    },
    {
        id: 9,
        question: "What is the locally brewed beer of Saint Lucia called?",
        answer: 1,
        explanation: "Piton is a Pilsner beer brand from the island of Saint Lucia, brewed by Windward & Leeward Brewing Limited, which is owned by Heineken.",
        readMore: "https://www.islandervillas.com/piton-beer-st-lucia.html",
        choices: [
            "Piton",
            "Carib",
            "Corona",
            "Parbo"
        ]
    },
    {
        id: 10,
        question: "Which Caribbean Island is first due south of St Lucia?",
        answer: 2,
        explanation: "Saint Lucia it is located north/northeast of the islands of Saint Vincent and the Grenadines.",
        readMore: "https://www.travelpulse.com/destinations/caribbean/st-lucia.html",
        choices: [
            "Antigua",
            "Saint Vincent",
            "Barbados",
            "Jamaica"
        ]
    },
    {
        id: 11,
        question: "The iconic twin volcanic peaks in St Lucia are known as The Pitons, but what are their names?",
        answer: 3,
        explanation: "Gros Piton is located in Soufrière, and Petit Piton a little way off in Choiseul.",
        readMore: "https://www.sandals.com/blog/pitons-st-lucia/#grospitonvspetitpitonwhatsthedifference",
        choices: [
            "Papa & Peewee Piton",
            "Little & Large Piton",
            "Gros & Petit Piton",
            "Grande & Menor Piton"
        ]
    },
    {
        id: 12,
        question: "Marigot Bay on the north coast of the island was famously the original setting for which 1967 film?",
        answer: 2,
        explanation: "The bay was used as the setting for the 1967 film adaptation of Hugh Lofting's Doctor Dolittle books. Scenes of the shipwreck, Great Pink Sea Snail, and the construction of the harness for the Giant Lunar Moth were filmed in the bay.",
        readMore: "https://www.oasismarigot.com/history-of-marigot-bay-st-lucia/",
        choices: [
            "Jungle Book",
            "Dr. Doolittle",
            "Treasure Island",
            "Bonnie and Clyde"
        ]
    },
    {
        id: 13,
        question: "When did Saint Lucia become independent?",
        answer: 1,
        explanation: "On 22 February 1979, Saint Lucia became independent, as a constitutional monarchy and member of the Commonwealth.",
        readMore: "https://www.britannica.com/place/Saint-Lucia/Independence",
        choices: [
            "22 February 1979",
            "24 May 1976",
            "29 September 1973",
            "18 December 1962"
        ]
    },  {
        id: 14,
        question: "Who was the first group of people to settle in St.Lucia?",
        answer: 4,
        explanation: "St. Lucia was first settled by Arawak Amerindians around 200 A.D., though by 800 their culture had been superseded by that of the Caribs. ",
        readMore: "http://www.geographia.com/st-lucia/lchis01.htm",
        choices: [
            "Europeans",
            "Africans",
            "Chinese",
            "Amerindians"
        ]
    },
    {
        id: 15,
        question: "St Lucia's original inhabitants called their land?",
        answer: 3,
        explanation: " There is evidence to suggest that these first inhabitants called the island Iouanalao, which meant 'Land of the Iguanas', due to the island's high number of iguanas.",
        readMore: "https://en.wikipedia.org/wiki/History_of_Saint_Lucia#Pre-colonial_period",
        choices: [
            "Party Land",
            "Carinage",
            "Iyanola",
            "Sansunson"
        ]
    },

]

setupQuiz();
function startQuiz() {
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("You must answer a name first!")
    } else {
        if (question_count < 1) {
            alert("You must select a level!")
        } else {
            setNameCookie(name,1);
            // localStorage.setItem("player_name",name);
            savePlayer(name,question_count);
            hideStart();
            setNo();
        }
    }
}

function setNameCookie(name,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + ";" + expires + ";path=/";
    // document.cookie = pname + "=" + value + ";" + expires + ";path=/";
    // document.cookie = question_count + ";" + expires + ";path=/";
}
function savePlayer(name,question_count){
    localStorage.setItem("player_name",name);
    localStorage.setItem("question_count",question_count);
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function setupQuiz() {
    hideResultButtons();
    hideNextButton();
    div_header.innerHTML = "Quiz Setup";
    div_easy.onclick = function () {
        question_count = 3;
        console.log("Easy");
        div_noquestion.innerHTML = question_count;
    }
    div_medium.onclick = function () {
        question_count = 8;
        console.log("Meduim");
        div_noquestion.innerHTML = question_count;
    }
    div_hard.onclick = function () {
        question_count = 15;
        console.log("Hard");
        div_noquestion.innerHTML = question_count;
    }

}

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

}

function setNo() {
    showNextButton();
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
        score++;
    } else {
        document.querySelector(buttonClicked).style.backgroundColor = "red"
    }
    div_explanation.innerHTML = explanation;
    showExplanation();
}

function clearExplanation() {
    // div_explanation.style.visibility = "hidden";
    div_explanation.style.display = "none";
}
function showExplanation() {
    // div_explanation.style.visibility = "visible";
    div_explanation.style.display = "inline";
}

function showResults() {
    div_header.style.display = "inline";
    div_header.innerHTML = "Results";
    clearBox();
    calculateScore();
    checkWin();
}

function resetQuiz() {
    question_number = 1;
    current_question = question_number;
    div_results.style.visibility = "hidden";
    div_results.style.display = "none";
    div_header.style.visibility = "hidden";
    div_header.style.display = "none";
    showNextButton();
    setNo();
}

function calculateScore() {
    score_percentage = (score / question_count) * 100;
}

function checkWin() {
    let name = document.cookie;
    // let name = localStorage.getItem(player_name);
    if (score_percentage > passing_score) {
        result_text = "Congrats " + name + "!" + "<br>" + "You really know Saint Lucia!" +
            "<p>You got " + score + "/" + question_count + "<br>" + score_percentage + "%</p>";
    } else {
        result_text = "Sorry " + name + "!" + "<br>" + "You need to learn more about Saint Lucia!" +
            "<p>You got " + score + "/" + question_count + "<br>" + score_percentage + "%</p>";
    }
    div_results.innerHTML = result_text;
    hideNextButton();
    showResultButtons();
}

function clearBox() {
    div_choice_text.style.visibility = "hidden";
    div_choice_text.style.display = "none";
    div_question_number.innerHTML = "";
    div_question_text.innerHTML = "";
    clearExplanation();
}

function hideResultButtons() {
    div_review.style.display = "none";
    div_again.style.display = "none";
    div_home.style.display = "none";
}

function showResultButtons() {
    div_review.style.display = "inline";
    div_again.style.display = "inline";
    div_home.style.display = "inline";
    div_header.style.display = "inline";

}

function hideNextButton() {
    div_next.style.visibility = "hidden";
    div_next.style.display = "none"
}

function showNextButton() {
    div_next.style.visibility = "visible";
    div_next.style.display = "inline"
    div_header.style.display = "none";

}

function hideStart() {
    div_setup.style.visibility = "hidden";
    div_setup.style.display = "none";
}
function reviewQuestions(){
    let data_number = 1;
    let question_text ="";
    let question_string = "";
    let answer_text = "";
    var answer = 0;

    hideResultButtons();
    div_header.innerHTML = "Reveiw Questions";
    div_home.style.display = "inline";
    // div_results.visibility = "hidden";
    // div_results.style.display = "none";
    for (let question_num = 0; question_num < question_count; question_num++) {
        question_text = '<p>' + data_number + '. '+
            questions[question_num].question + '<br>';
        answer =  questions[question_num].answer;   
        // console.log("Ans = "+answer);
        answer_text = "Answer: " + questions[question_num].choices[answer -1] + "<br>";
        var explanation_text = questions[question_num].explanation + " ";
        var linkText = questions[question_num].readMore;
        var readMoreLink = "<a href='" + linkText + "' target='_blank'>Read More</a></p>";

        // console.log("Ans: "+ answer_text);
            // console.log(question_text);
        question_string +=question_text + answer_text + explanation_text + readMoreLink;
        console.log(question_string);
            div_results.innerHTML += question_text;

        // div_choice_text.style.backgroundColor = "white";
        // div_choice_text.innerHTML += choice_text;
        data_number++;
    }
    div_results.innerHTML = question_string;


}