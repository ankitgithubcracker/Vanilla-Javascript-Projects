let DOB = document.querySelector('#DOB');
let ageBtn = document.querySelector('#ageBtn');
let result = document.querySelector('#result');

ageBtn.addEventListener('click', () => {
    if (DOB.value == '') {
        alert("Please enter your date of birth");
    } else { 


    const dobString = DOB.value;
    const dobYear = dobString.split("-")[0]

    let currentdate = new Date().getFullYear()

    let age = currentdate - dobYear

        result.innerHTML = `Your age is: ${age} year`;
    }
})
