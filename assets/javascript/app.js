var timerSeconds = 30;
var intervalId;
var timerId;
var currentQuestion;
var questions = ["Jay-Z, Busta Rhymes, DMX, and Notorious B.I.G. all went to the same...",
                 "This rapper faced an animal cruelty charge in Teaneck, New Jersey in 1999.",
                 "This rap artist challenged L.L. Cool J in his hit single Second Round K.O.",
                 "In his song titled Mosh, this artist protested against president G.W. Bush.",
                 "This female rapper was fired from her waitress job at Red Lobster in the Bronx" +
                 " because of her discourtesy to customers.",
                 "Which rap artist appeared in a 2001 music video with his body shrunken but his head enlarged?",
                 "Which rap group made the hit single Shit Can Happen?",
                 "How many pounds maximum did rapper Big Pun weigh?",
                 "50 Cent's left cheek has a mark or scar from:"];
var answers = [["High school", "Gym", "Barber shop", "Costco"],
               ["Busta Rhymes", "DMX", "Flo Rida", "Ja Rule"],
               ["Busta Rhymes", "Slick Rick", "Canibus", "Method Man"],
               ["Limp Bizkit", "Ludacris", "Puff Daddy", "Eminem"],
               ["Lil' Kim", "Missy Elliot", "Nicki Minaj", "Remy Ma"],
               ["DMX", "LL Cool J", "Outkast", "Ludacris"],
               ["Wu-Tang", "Capone N Noreaga", "D12", "Q-Tip"],
               ["698", "300", "225", "350"],
               ["dimple", "bullet hole", "knife stab", "falling off stage"]];
var correctAnswers = [0, 1, 2, 3, 2, 3, 2, 0, 1];
var gifIDs = ["FdFhE8iozVW92","a3loaGa7YNq7e","3o6ZtcZnK6dKp4ke9q",
              "cuf4xstINkczC", "j7plfiJAMLdLy", "RUSu65EOMX2PS",
              "DNIQUP1vE82Aw", "3o7TKDQOjI25GIE31S", "AXOrTXrVm6CJO"];
var currentQuestion = -1;
var countCorrect = 0;
var countIncorrect = 0;
var countUnanswered = 0;

$(document).ready(function() {

    clearQuestion();

    $("#start").on("click", function() {

        $("#start").hide();
        
        $("#remain").html("Time Remaining: <span id='time'></span> Seconds");

        nextQuestion();

    });

    $(".answer").on("click", function() {

        clearInterval(intervalId);
        //var idx = answers[currentQuestion].indexOf($(this).text());
        var idx = parseInt($(this).attr("value"));

        clearQuestion();
        var correctIdx = correctAnswers[currentQuestion];
        if(idx === correctIdx){
            $("#question").text("Correct!");
            countCorrect++;
        } else{
        	$("#question").text("Nope!");
            countIncorrect++;
            $("#correct_answer").text(`The correct answer was: ${answers[currentQuestion][correctIdx]}`);
        }

        $("#image").attr("src", `https://giphy.com/embed/${gifIDs[currentQuestion]}`);
        timerId = setTimeout(nextQuestion, 5000);
    });

    function countDown(){

    	timerSeconds--;
        if(timerSeconds >= 0){
            $("#time").text(timerSeconds);
        }

        if(timerSeconds <= 0){

            clearInterval(intervalId);
            clearQuestion();
            var correctIdx = correctAnswers[currentQuestion];
            $("#question").text("Out of Time!");
            countUnanswered++;
            $("#image").attr("src", `https://giphy.com/embed/${gifIDs[currentQuestion]}`);
            $("#correct_answer").text(`The correct answer was: ${answers[currentQuestion][correctIdx]}`);
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

        timerSeconds = 30;
    	currentQuestion++;
        
        if(currentQuestion < questions.length){
            $("#correct_answer").html("");
            $("#image").attr("src", "");
        	$(".answer").show();
            $("#question").text(questions[currentQuestion]);
            $("#answer_1").text(answers[currentQuestion][0]);
            $("#answer_2").text(answers[currentQuestion][1]);
            $("#answer_3").text(answers[currentQuestion][2]);
            $("#answer_4").text(answers[currentQuestion][3]);
            $("#time").text(timerSeconds);
            intervalId = setInterval(countDown, 1000);
        } else {
            var result = "All done, here's how you did!<br>";
            var results = "Correct Answers: " +
                       countCorrect + 
                       "<br>Incorrect Answers: " + 
                       countIncorrect +
                       "<br>Unaswered: " +
                       countUnanswered;
            $("#question").html(result);
            $("#image").attr("src", "");
            $("#image").hide();
            $("#correct_answer").html(results);
            $(".answer").hide();
        }
    }

});
