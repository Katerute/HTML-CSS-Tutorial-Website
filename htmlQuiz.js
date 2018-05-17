function submitclick(){
	var question1 = document.htmlquiz.question1.value;
	var question2 = document.htmlquiz.question2.value;
	var question3 = document.htmlquiz.question3.value;
	var question4 = document.htmlquiz.question4.value;
	var question5 = document.htmlquiz.question5.value;
	var question6 = document.htmlquiz.question6.value;
	var question7 = document.htmlquiz.question7.value;
	var question8 = document.htmlquiz.question8.value;
	var question9 = document.htmlquiz.question9.value;
	var question10 = document.htmlquiz.question10.value;
	var question11 = document.htmlquiz.question11.value;
	var question12 = document.htmlquiz.question12.value;
	var question13 = document.htmlquiz.question13.value;
	var question14 = document.htmlquiz.question14.value;
	var question15 = document.htmlquiz.question15.value;
	var correctAnswers = 0;
	
	if (question1 == "NoClosing") {
		correctAnswers++;
	}
	if (question2 == "No") {
		correctAnswers++;
	}	
	if (question3 == "B") {
		correctAnswers++;
	}
	if (question4== "Empty" || question4== "Empty tag" || question4== "Empty element") {
		correctAnswers++;
	}
	if (question5 == "6") {
		correctAnswers++;
	}	
	if (question6 == "<h3>") {
		correctAnswers++;
	}
	if (question7 == "ol") {
		correctAnswers++;
	}
	if (question8 == "Relative") {
		correctAnswers++;
	}	
	if (question9 == "alt") {
		correctAnswers++;
	}
	if (question10 == "logical") {
		correctAnswers++;
	}
	if (question11 == "Right") {
		correctAnswers++;
	}	
	if (question12 == "Inline" || question12 == "inline" || question12 == "Inline tags") {
		correctAnswers++;
	}
	if (question13 == "No") {
		correctAnswers++;
	}
	if (question14 == "Yes") {
		correctAnswers++;
	}	
	if (question15 == "Outside") {
		correctAnswers++;
	}
	
	var messages = ["Brilliant!","Great job!", "Well Done!","Not bad!", "Revise ones again!"];
	var points;

	if (correct <= 2) {
		points = 4;
	}
	
	if (correct >2  && correct <= 6) {
		points = 3;
	}
	if (correct > 6 && correct <= 11) {
		points = 2;
	}
	
	if (correct > 11 && correct < 15) {
		points = 1;
	}

	if (correct == 315) {
		points = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[points];
	document.getElementById("number_correct").innerHTML = "You got " + correctAnswers + " correct.";
	
}