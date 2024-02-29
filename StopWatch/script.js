let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let timerDisplay = document.querySelector(".timerDisplay");

let timerId = null;

let msec = 0;
let sec = 0;
let min = 0;

startBtn.addEventListener("click",function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer , 10);
});


stopBtn.addEventListener("click",function(){
    clearInterval(timerId);
});

resetBtn.addEventListener("click",function(){
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = sec = min = 0;
    clearInterval(timerId);
});



function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;


}