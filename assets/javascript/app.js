$(document).ready(function() {

    $("#start").on("click", function() {

        $("#start").hide();
        $("#remain").html("Time Remaining: <span id='time'></span> Seconds");
        $("#question").text("What?");
        $("#answer_1").text("1");
        $("#answer_2").text("1");
        $("#answer_3").text("1");
        $("#answer_4").text("1");
    });

    $("#remain").on("click", function() {
        //alert("test"); 
    });
});
