var timerSeconds, intervalId, timerId;

var questionObjArr = [{question: 'Jay-Z, Busta Rhymes, DMX, and Notorious B.I.G. all went to the same...',
                       answers: ['High school', 'Gym', 'Barber shop', 'Costco'],
                       correctAnswer: 0,
                       gifID: 'FdFhE8iozVW92'},
                      {question: 'This rapper faced an animal cruelty charge in Teaneck, New Jersey in 1999.',
                       answers: ['Busta Rhymes', 'DMX', 'Flo Rida', 'Ja Rule'],
                       correctAnswer: 1,
                       gifID: 'a3loaGa7YNq7e'},
                      {question: 'This rap artist challenged L.L. Cool J in his hit single Second Round K.O.',
                       answers: ['Busta Rhymes', 'Slick Rick', 'Canibus', 'Method Man'],
                       correctAnswer: 2,
                       gifID: '3o6ZtcZnK6dKp4ke9q'},
                      {question: 'In his song titled Mosh, this artist protested against president G.W. Bush.',
                       answers: ['Limp Bizkit', 'Ludacris', 'Puff Daddy', 'Eminem'],
                       correctAnswer: 3,
                       gifID: 'cuf4xstINkczC'},
                      {question: 'This female rapper was fired from her waitress job at Red Lobster in the Bronx' +
                                 ' because of her discourtesy to customers.',
                       answers: ['Lil\' Kim', 'Missy Elliot', 'Nicki Minaj', 'Remy Ma'],
                       correctAnswer: 2,
                       gifID: 'j7plfiJAMLdLy'},
                      {question: 'Which rap artist appeared in a 2001 music video with his body shrunken but his head enlarged?',
                       answers: ['DMX', 'LL Cool J', 'Outkast', 'Ludacris'],
                       correctAnswer: 3,
                       gifID: 'RUSu65EOMX2PS'},
                      {question: 'Which rap group made the hit single Shit Can Happen?',
                       answers: ['Wu-Tang', 'Capone N Noreaga', 'D12', 'Q-Tip'],
                       correctAnswer: 2,
                       gifID: 'DNIQUP1vE82Aw'},
                      {question: 'How many pounds maximum did rapper Big Pun weigh?',
                       answers: ['698', '300', '225', '350'],
                       correctAnswer: 0,
                       gifID: '3o7TKDQOjI25GIE31S'},
                      {question: '50 Cent\'s left cheek has a mark or scar from:',
                       answers: ['dimple', 'bullet hole', 'knife stab', 'falling off stage'],
                       correctAnswer: 1,
                       gifID: 'AXOrTXrVm6CJO'},
                      {question: 'When Kanye West rhymed \'If you could feel how my face felt, you would know how Ma$e felt\'' +
                                 ' he was referring to Ma$e\'s run-in with:',
                       answers: ['Puff Daddy', 'Ghostface', '50 Cent', 'Nas'],
                       correctAnswer: 1,
                       gifID: 'pjsEjoPU6i45G'},];

var currentQuestion, countCorrect, countIncorrect, countUnanswered;

$(document).ready(function() {

    $("#start_over").hide();
    clearQuestion();

    $(".button").on("click", function() {

        initGame($(this).attr("id"));
    });

    $(".answer").on("click", function() {

        clearInterval(intervalId);
        //var idx = answers[currentQuestion].indexOf($(this).text());
        var idx = parseInt($(this).attr("value"));

        clearQuestion();
        var correctIdx = questionObjArr[currentQuestion].correctAnswer;
        if(idx === correctIdx){

            $("#question").text("Correct!");
            countCorrect++;
        } else{

        	$("#question").text("Nope!");
            countIncorrect++;
            $("#correct_answer").text(`The correct answer was: ${questionObjArr[currentQuestion].answers[correctIdx]}`);
        }

        $("#image").attr("src", `https://giphy.com/embed/${questionObjArr[currentQuestion].gifID}`);
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

            var correctIdx = questionObjArr[currentQuestion].correctAnswer;
            $("#question").text("Out of Time!");
            countUnanswered++;

            $("#image").attr("src", `https://giphy.com/embed/${questionObjArr[currentQuestion].gifID}`);
            $("#correct_answer").text(`The correct answer was: ${questionObjArr[currentQuestion].answers[correctIdx]}`);

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
        
        if(currentQuestion < questionObjArr.length){

            $("#correct_answer").html("");
            $("#image").attr("src", "");
        	  $(".answer").show();
            $("#question").text(questionObjArr[currentQuestion].question);
            $("#answer_1").text(questionObjArr[currentQuestion].answers[0]);
            $("#answer_2").text(questionObjArr[currentQuestion].answers[1]);
            $("#answer_3").text(questionObjArr[currentQuestion].answers[2]);
            $("#answer_4").text(questionObjArr[currentQuestion].answers[3]);
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
            $("#start_over").show();
        }
    }

    function initGame(buttonName){

        timerSeconds = 30;
        currentQuestion = -1;
        countCorrect = 0;
        countIncorrect = 0;
        countUnanswered = 0;

        $(`#${buttonName}`).hide();
        
        $("#remain").html("Time Remaining: <span id='time'></span> Seconds");

        $("#image").show();

        nextQuestion();
    }

});
