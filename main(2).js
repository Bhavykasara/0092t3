qt="p2";
at="p1"

$(window).on('load',function() {
    var get_value=localStorage.getItem("score");
    console.log(get_value);
    document.getElementById("score").innerHTML='<kbd>'+get_value+':'+s1+'</kbd>';
    var get_value2=localStorage.getItem("score2");
    console.log(get_value2);
    document.getElementById("score2").innerHTML='<kbd>'+get_value2+':'+s2+'</kbd>';
    document.getElementById("q").innerHTML="<kbd> Question turn: "+get_value2+'<kbd>';
    document.getElementById("a").innerHTML="<kbd> Answer turn: "+get_value+'<kbd>';
});

p1n=localStorage.getItem("score");
p2n=localStorage.getItem("score2");

var pc="p1";
var s1=0;
var s2=0;

function get() {
    var get_value=localStorage.getItem("score");
    console.log(get_value);
    document.getElementById("score").innerHTML='<kbd>'+get_value+':'+s1+'</kbd>';
}

function send() {
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;

    ml='<h2><kbd>Click on the button to add operators in the two numbers</kbd></h2><br><button onclick="multipy()" class="btn btn-primary">Multiply</button><button onclick="add()" class="btn btn-success">Add</button><button onclick="subtract()" class="btn btn-anchor">Subtract</button><button onclick="divide()" class="btn btn-info">Divide</button>';
    document.getElementById("op").innerHTML=ml;
}
function multipy() {
    o="multiply";
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;

    ml='<h2>'+number1+' x '+number2+'</h2> <br ><label> Answer- </label> <input placeholder="Enter the answer" id="ga"> <br> <button onclick="check()">Check</button';
    document.getElementById("op").innerHTML=ml;
}
function add() {
    o="add";
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;

    ml='<h2>'+number1+' + '+number2+'</h2> <br ><label> Answer- </label> <input placeholder="Enter the answer" id="ga"> <br> <button onclick="check()">Check</button';
    document.getElementById("op").innerHTML=ml;
}
function subtract() {
    o="subtract";
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;

    ml='<h2>'+number1+' - '+number2+'</h2> <br ><label> Answer- </label> <input placeholder="Enter the answer" id="ga"> <br> <button onclick="check()">Check</button';
    document.getElementById("op").innerHTML=ml;
}
function divide() {
    o="divide";
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;

    ml='<h2>'+number1+' ÷ '+number2+'</h2> <br ><label> Answer- </label> <input placeholder="Enter the answer" id="ga"> <br> <button onclick="check()">Check</button';
    document.getElementById("op").innerHTML=ml;
}
function check() {
   if (o=="multiply") {
       cans=parseInt(number1)*parseInt(number2);
   }
   else if (o=="add") {
    cans=parseInt(number1)+parseInt(number2);
   }
   else if (o=="subtract") {
    cans=parseInt(number1)-parseInt(number2);
} else if (o=="divide") {
    cans=parseInt(number1)/parseInt(number2);
}
   ans=parseInt(document.getElementById("ga").value);
   if (Math.round(cans)==ans) {
       document.getElementById("op").innerHTML='<h1> Correct answer </h1> <br> <button onclick="restart()">Continue</button';
       if (pc=="p1") {
           s1=s1+1;
           document.getElementById("score").innerHTML='<kbd>'+p1n+':'+s1;      
        }
       if (pc=="p2") {
        s2=s2+1;
        document.getElementById("score2").innerHTML='<kbd>'+p2n+':'+s2+'</kbd>';
    }
   }
   else {
      document.getElementById("op").innerHTML='<h1> Wrong answer </h1> <br>'+'<h3><kbd> The correct answer was '+Math.round(cans)+'</kbd></h3>'+'<button onclick="restart()">Continue</button';
   }
   if (pc=="p2") {
       pc="p1";
       document.getElementById("a").innerHTML='<kbd> Answer turn:'+p1n+'<kbd>';
       document.getElementById("q").innerHTML='<kbd> Question turn:'+p2n+'<kbd>';
   }
   else if (pc=="p1") {
    pc="p2";
    document.getElementById("a").innerHTML='<kbd> Answer turn:'+p2n+'<kbd>';
    document.getElementById("q").innerHTML='<kbd> Question turn:'+p1n+'<kbd>';
   }
}

function restart() {
    document.getElementById("op").innerHTML="";
}