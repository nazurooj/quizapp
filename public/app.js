var score=0;

var ans1=document.getElementsByName('q1');
var ans2=document.getElementsByName('q2');
var ans3=document.getElementsByName('q3');
var ans4=document.getElementsByName('q4');
var ans5=document.getElementsByName('q5');


var result=document.getElementById("score");

function submit(){
    if(ans1[0].checked==true){
        score++;
    }
    if(ans2[1].checked==true){
        score++
    }
    if(ans3[3].checked==true){
        score++
    }
    if(ans4[0].checked==true){
        score++
    }
    if(ans5[1].checked==true){
        score++
    }
    alert("Your score is "+score);
}
score=0;