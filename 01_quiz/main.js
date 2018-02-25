function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var question16 = document.quiz.question16.value;
    var question17 = document.quiz.question17.value;
    var correct = 0;

    if (question1 == "Balance_Sheet.")
    {correct++;}
    if (question2 == "Income_Statement.")
    {correct++;}
    if (question3 == "Cash_Is_Received.")
    {correct++;}
    if (question4 == "Cash Is Paid.")
    {correct++;}
    if (question5 == "asset")
    {correct++;}
    if (question6 == "asset")
    {correct++;}
    if (question7 == "Current Market Value.")
    {correct++;}
    if (question8 == "asset")
    {correct++;}
    if (question9 == "asset")
    {correct++;}
    if (question10 == "Two.")
    {correct++;}
    if (question11 == "asset")
    {correct++;}
    if (question12 == "asset")
    {correct++;}
    if (question13 == "Debit.")
    {correct++;}
    if (question14 == "Debit.")
    {correct++;}
    if (question15 == "Debit.")
    {correct++;}
    if (question16 == "Debit.")
    {correct++;}
    if (question17 == "Debit.")
    {correct++;}


    var messages = ["Great Job!","That's just okay","You really need to do better"];
    var pictures=["img/success.gif","img/notbad.gif","img/fail.gif"];
    var range;
    if (correct < 9) {range=2};
    if (correct > 10 && correct < 13) {range=1};
    if (correct > 14) {range=0};

    document.getElementById("after_submit").style.visibility="visible";


    document.getElementById("message").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="You got"+correct+"correct.";
    document.getElementById("pictures").src=pictures[range];
}