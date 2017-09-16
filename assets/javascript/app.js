var timerSeconds = 30;
var intervalId;
var timerId;
var currentQuestion;
var questions = ["Jay-Z, Busta Rhymes, DMX, and Notorious B.I.G. all went to the same...",
                 "This rapper faced an animal cruelty charge in Teaneck, New Jersey in 1999."];
var answers = [["High school", "Gym", "Barber shop", "Costco"],
               ["Busta Rhymes", "DMX", "Flo Rida", "Ja Rule"]];
var correctAnswers = [0, 1];
var currentQuestion = -1;

$(document).ready(function() {

    clearQuestion();

    $("#start").on("click", function() {

        $("#start").hide();
        
        $("#remain").html("Time Remaining: <span id='time'></span> Seconds");

        nextQuestion();

    });

    $(".answer").on("click", function() {

        clearInterval(intervalId);
        var idx = answers[currentQuestion].indexOf($(this).text());

        clearQuestion();

        if(idx === correctAnswers[currentQuestion]){
            $("#question").text("Correct!");
        } else{
        	$("#question").text("Nope!");
        }

        timerId = setTimeout(nextQuestion, 5000);
    });

    function countDown(){

    	timerSeconds--;
        $("#time").text(timerSeconds);

        if(timerSeconds === 0){

            clearInterval(intervalId);
            clearQuestion();
            $("#question").text("Out of Time!");
            timerId = setTimeout(nextQuestion, 5000);
        }
    }

    function clearQuestion(){

    	$("#question").text("");
        $("#answer_1").text("");
        $("#answer_1").hide();
        $("#answer_2").text("");
        $("#answer_2").hide();
        $("#answer_3").text("");
        $("#answer_3").hide();
        $("#answer_4").text("");
        $("#answer_4").hide();
    }

    function nextQuestion(){

    	currentQuestion++;
    	$(".answer").show();
        $("#question").text(questions[currentQuestion]);
        $("#answer_1").text(answers[currentQuestion][0]);
        $("#answer_2").text(answers[currentQuestion][1]);
        $("#answer_3").text(answers[currentQuestion][2]);
        $("#answer_4").text(answers[currentQuestion][3]);
        $("#time").text(timerSeconds);
        intervalId = setInterval(countDown, 1000);
    }
});
