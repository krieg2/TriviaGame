var timerSeconds = 30;
var intervalId;
var currentQuestion;
var questions = ["Jay-Z, Busta Rhymes, DMX, and Notorious B.I.G. all went to the same..."];
var answers = [["High school",
               "Gym",
               "Barber shop",
               "Costco"],
               ["1","2","3","4"]];
var correctAnswers = [0];

$(document).ready(function() {

    $("#start").on("click", function() {

        $("#start").hide();
        $("#remain").html("Time Remaining: <span id='time'></span> Seconds");
        currentQuestion = 0;
        $("#question").text(questions[currentQuestion]);
        $("#answer_1").text(answers[currentQuestion][0]);
        $("#answer_2").text(answers[currentQuestion][1]);
        $("#answer_3").text(answers[currentQuestion][2]);
        $("#answer_4").text(answers[currentQuestion][3]);
        $("#time").text(timerSeconds);
        intervalId = setInterval(countDown, 1000);
    });

    $(".answer").on("click", function() {

        clearInterval(intervalId);
        var idx = answers[currentQuestion].indexOf($(this).text());

        clearQuestions();
        
        if(idx === correctAnswers[currentQuestion]){
            $("#question").text("Correct!");
        } else{
        	$("#question").text("Nope!");
        }
    });

    function countDown(){

    	timerSeconds--;
        $("#time").text(timerSeconds);
        if(timerSeconds === 0){
            clearInterval(intervalId);
        }
    }

    function clearQuestions(){

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
});
