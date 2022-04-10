let question_count = 3;
let question_number = 1;
let current_question = question_number-1;
var click;
var next = document.getElementById("next");
var div = document.getElementById("question_number");



// next.onclick =function nextButton(){
//     console.log("Next Button Clicked")
//         question_number ++;
//         loopQuestions();
// }



var div = document.getElementById("question_number");

		var no_box = document
			.querySelector('.no-box');
			
		var i = 1;

		

		next.onclick= function nextButton() {

			// End position
			if (question_number == 5) {

				// Add disabled attribute on
				// next button
				document.getElementsByClassName(
						'next').disabled = true;

				// Remove disabled attribute
				// from prev button
				document.getElementsByClassName(
						'prev').disabled = false;
			} else {
				question_number++;
				return setNo();
			}
		}

		function setNo() {

			// Change innerhtml
            count = question_number + "/" + question_count;
        
			// return no_box.innerHTML = i;
            return div.innerHTML = count;
		}


