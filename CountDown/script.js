const endTime = document.querySelector("#endTime");
const input = document.querySelectorAll("input");
const main = document.querySelector("main");
const newYear = new Date().getFullYear() + 1
const endTimes = `Jan 01 ${newYear} 00:00:00`;
endTime.textContent = endTimes;



// console.log(Math.floor((diff/1000)%60));
function clock() {
    const oldTime = new Date(endTimes);
    const newTime = new Date();
    const diff = oldTime - newTime;

    const day = input[0];
    const hrs = input[1];
    const min = input[2];
    const sec = input[3];


    if (diff < 0) {
        return;
    }

    day.value = Math.floor(diff / 1000 / 86400);
    hrs.value = Math.floor((diff / 1000 / 3600) % 24);
    min.value = Math.floor((diff / 1000 / 60) % 60);
    sec.value = Math.floor((diff / 1000) % 60);

    day.value < 10 ? day.value = "0" + day.value : day.value = day.value;
    hrs.value < 10 ? hrs.value = "0" + hrs.value : hrs.value = hrs.value;
    min.value < 10 ? min.value = "0" + min.value : min.value = min.value;
    sec.value < 10 ? sec.value = "0" + sec.value : sec.value = sec.value;

    if (day.value == 0 && hrs.value == 0 && min.value == 0 && sec.value == 0) {
        autoPlay();
    }
}

function autoPlay() {
    let audio = document.createElement("AUDIO");
    audio.classList.add("myAudio");
    audio.setAttribute("autoplay", "autoplay");
    audio.setAttribute("controls", "controls");
    audio.innerHTML = `<source src="stop.m4a" type="audio/ogg">`

    main.appendChild(audio);
    // console.log(audio);
}
setInterval(clock, 1000);
