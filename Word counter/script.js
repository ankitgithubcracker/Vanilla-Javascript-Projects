let  textbox = document.querySelector("#textbox");

textbox.addEventListener("input", () =>{
    
    let text = textbox.value;
    let char = text.length;
    document.querySelector("#char").innerHTML = char;
    
    text= text.trim();
    let words = text.split(" ");
    let cleanList = words.filter((word)=>{
        return word != "";
    })
    document.querySelector("#words").innerHTML = cleanList.length;
    
});