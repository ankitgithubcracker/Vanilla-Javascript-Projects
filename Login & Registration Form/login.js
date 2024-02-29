const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (loginEmailValidation() && loginPasswordValidation()) {
        alert("Your Login form is submitted successfully...")
    }
    document.querySelector("#email").innerHTML  = "";
});

let loginEmailValidation = () =>{
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

let loginPasswordValidation = () => {
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