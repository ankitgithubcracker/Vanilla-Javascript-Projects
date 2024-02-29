let hr = document.querySelector("#hours");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

function ShowTime(){

    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotaation = (30*hh) + mm/2;
    let mRotaation = 6*mm;
    let sRotaation = 6*ss;

    hr.style.transform = `rotate(${hRotaation}deg)`
    min.style.transform = `rotate(${mRotaation}deg)`
    sec.style.transform = `rotate(${sRotaation}deg)`


}
setInterval(ShowTime,1000);