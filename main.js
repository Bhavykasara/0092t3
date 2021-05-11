function login() {
    score=document.getElementById("input1").value;
    localStorage.setItem("score",score);
    score2=document.getElementById("input2").value;
    localStorage.setItem("score2",score2);
    window.location="index(2).html";
}