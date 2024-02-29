let btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    let inp = document.querySelector("#inp").value.toString();
    const uttarnence = new SpeechSynthesisUtterance(inp)
    window.speechSynthesis.speak(uttarnence);
    
})
