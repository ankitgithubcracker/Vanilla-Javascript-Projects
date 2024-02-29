const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const name = document.querySelector("#name").value;
    if(nameValidation() && emailValidation() && passwordValidation() && confirmPassValidation() && passwordMatch()){
        alert("Your form is submitted successfully...")
    }
    name.innerHTML = " ";
    
});

// <=========== Registration Form Validation ============>

// <============ Name validation ===========>

let nameValidation = () =>{
    const name = document.querySelector("#name").value;
    const nameError = document.querySelector("#nameError");
    const regName = /^[a-zA-Z .]{3,20}$/;

    if(name.length === 0){
        nameError.innerHTML = `<i class="fa-solid fa-xmark"></i> Please enter Name`;
        return false;
    }
    if(!name.match(regName)){
        nameError.innerHTML = `<i class="fa-solid fa-xmark"></i> Please enter fullname`;
        return false;
    }else{
        nameError.innerHTML = `<i class="fa-solid fa-check"></i>`;
        return true;
    }
}


//<=============  Email Validation  ========> 

let emailValidation = () =>{
    const email = document.querySelector("#email").value;
    const emailError = document.querySelector("#emailError");
    const regEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.length === 0){
        emailError.innerHTML = `<i class="fa-solid fa-xmark"></i> Email is required`;
        return false;
    }
    if(!email.match(regEmail)){
        emailError.innerHTML = `<i class="fa-solid fa-xmark"></i> Enter valid Email`;
        return false;
    }else{
        emailError.innerHTML = `<i class="fa-solid fa-check"></i>`;
        return true;
    }
}

let passwordValidation = () => {
    const password = document.querySelector("#password").value;
    const passError = document.querySelector("#passError");
    const regPass = /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;

    if(password.length === 0){
        passError.innerHTML = `<i class="fa-solid fa-xmark"></i> Password is required`;
        return false;
    }
    if(!password.match(regPass)){
        passError.innerHTML = `<i class="fa-solid fa-xmark"></i>Uppercase(A-Z),Lowercase(a-z), Numeric(0-9) & Special Character(!,@,#,$) required`;
        return false;
    }else{
        passError.innerHTML = `<i class="fa-solid fa-check"></i>`;
        return true;
    }
}

let confirmPassValidation = () => {
    const confirmPass = document.querySelector("#confirmPass").value;
    const confirmError = document.querySelector("#confirmError");
    const regConfirmPass = /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;

    if(confirmPass.length === 0){
        confirmError.innerHTML = `<i class="fa-solid fa-xmark"></i> Password is required`;
        return false;
    }
    if(!confirmPass.match(regConfirmPass)){
        confirmError.innerHTML = `<i class="fa-solid fa-xmark"></i>Uppercase(A-Z),Lowercase(a-z), Numeric(0-9) & Special Character(!,@,#,$) required`;
        return false;
    }else{
        confirmError.innerHTML = `<i class="fa-solid fa-check"></i>`;
        return true;
    }
}

const passwordMatch = () =>{
    const confirmPass = document.querySelector("#confirmPass").value;
    const confirmError = document.querySelector("#confirmError");
    const password = document.querySelector("#password").value;

    if(password !== confirmPass){
        confirmError.innerHTML = `Password not confirmed`
        return false;
    }else{
        return true;
    }
}