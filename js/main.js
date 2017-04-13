var surveyArray = new Array

/
function submitForm() {
	
	var checks = document.getElementsByClassName("question1")
	var selects = document.getElementsByClassName("question2")
	var radios = document.getElementsByClassName("question3")

	var results = document.getElementById("results")

	var checkboxesArray = []
	var answer1, answer2, answer3

	for(var i = 0; i < checks.length; i++) {
		if(checks[i].checked) {
			checkboxesArray.push(checks[i].value)
		}
		console.log(checkboxesArray)
		answer1 = checkboxesArray
	}

	if(answer1.length == 0) {
		results.className = "failure"
		results.textContent = "Please answer question 1"
		return
	}

	console.log("answer 1: " + answer1)
	
	for(var i = 0; i < selects.length; i++) {

		if(selects[i].selected) {
			answer2 = selects[i].value
		}
	}

	if(answer2 == "") {
		results.className = "failure"
		results.textContent = "Please answer question 2"
		return
	}
	console.log("answer 2: " + answer2)


	for(var i = 0; i < radios.length; i++) {
		if(radios[i].checked) {
			answer3 = radios[i].value
		}
	}

	if(answer3 == undefined) {
		results.className = "failure"
		results.textContent = "Please answer question 3"
		return
	}

	console.log("answer 3: " + answer3)

	var surveyAnswers = {
		checked: answer1,
		selected: answer2,
		radio: answer3
	}

	results.className = "success"
	results.textContent = "thanks for completing the survey!"

	console.log("current survey answers: #1 " + surveyAnswers.checked + " #2 " + surveyAnswers.selected + " #3 " + surveyAnswers.radio)
	surveyArray.push(surveyAnswers)

	console.log(surveyArray)
	form.reset()
}

document.getElementById("submitButton").addEventListener("click", submitForm, false)