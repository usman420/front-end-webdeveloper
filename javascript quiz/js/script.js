function submitAnswers(){
	var total = 5;
	var score= 0;
	// get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	//validation
	
	for(i = 1;i<=total;i++){
		if(eval('q'+1)== null || eval('q'+i) == ''){
			alert('you missed question'+i);
			return false;
		}
	}


	
	//set correct answers 
	var answers = ["b","a","d","b","d"];
	//check answers 
	for(i = 1;i<=total;i++){
	if(eval('q'+1) == answers[i -1]){
	    score++;
	}
	}
	 
	
	
	
	var results = document.getElementById('results');
	results.innerHTML = '<h3>you scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert ('you scored ' +score+' out of '+total);
	return false;
	
}
