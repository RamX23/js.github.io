document.querySelector(".w").addEventListener("click",fun1);
function fun1(){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
}
document.querySelector(".a").addEventListener("click",fun2);
function fun2(){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
}
document.querySelector(".s").addEventListener("click",fun3);
function fun3(){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
}
document.querySelector(".d").addEventListener("click",fun4);
function fun4(){
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
}
document.querySelector(".j").addEventListener("click",fun5);
function fun5(){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
}
document.querySelector(".k").addEventListener("click",fun6);
function fun6(){
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
}
document.querySelector(".l").addEventListener("click",fun7);
function fun7(){
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
}
document.addEventListener("keypress",function(){
    alert("key is pressed");
})