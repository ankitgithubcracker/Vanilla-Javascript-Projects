const main = document.querySelector("#main");
const btn = document.querySelector(".btn");
const note = document.querySelector(".box");

btn.addEventListener("click",function(){
    addNote();
});

function addNote(text = ""){
    const div = document.createElement("div");
    div.classList.add("box")
    div.innerHTML = `
        <div class="tool-bar">
            <i class=" save fa-solid fa-floppy-disk"></i>
            <i class=" trash fa-solid fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
    `;
    main.appendChild(div);
    saveNote();

    div.querySelector(".trash").addEventListener("click",function(){
        div.remove();
        saveNote();
    })
    
    div.querySelector(".save").addEventListener("click",function(){
        saveNote();
    })
}

function saveNote(){
    const notes = document.querySelectorAll(".box textarea");
    // console.log(notes);
    const data =[];
    notes.forEach(  
        function(note){
            data.push(note.value);
    })
    console.log(data);
    if (data.length == 0){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}

function onPageLoad(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    // console.log(lsNotes);
    if(lsNotes == null){
        addNote();
    }else{
        lsNotes.forEach(function(lsNotes){
            addNote(lsNotes);
        })
    }

}
onPageLoad();