const time = document.getElementById("time");
const timeFormat = document.getElementById("timeformat");
// console.log(timeFormat);

const showTime = ()=>{
    let date = new Date(); 
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    timeFormat.innerText = hrs>12 ? "PM" :"AM"


    hrs = hrs>12 ? hrs-+12 : hrs;
    hrs = hrs==24 ? hrs="00" : hrs;
    hrs = hrs<10 ? `0${hrs}` : hrs;

    min = min<10 ? `0${min}` : min; 
    sec = sec<10 ? `0${sec}` : sec; 
    
    let timer = `${hrs}:${min}:${sec}`;
    time.innerText = timer;
    
}
setInterval(showTime, 1000);