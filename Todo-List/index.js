const item = document.querySelector('#item');
const todoBox = document.querySelector('#todo-box');
const plus = document.querySelector('#plus');

plus.addEventListener("click",function(){   
    if(item.value.length == 0){
        alert("Please enter something in todo...");
    }
    else
    {
        addTodo(item.value);
        item.value="";
    }
});

function addTodo(item){
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fa-sharp fa-solid fa-xmark"></i>
    `;
    todoBox.appendChild(listItem);

    listItem.addEventListener("click",function(){
        this.classList.toggle("done")
    });

    listItem.querySelector("i").addEventListener("click",
    function(){
        var confirmBox = confirm("Are you sure to remove todo!!!")
        if(confirmBox == true){
            listItem.remove();
        }
    })
};