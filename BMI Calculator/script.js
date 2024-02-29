let bmiBtn = document.querySelector('#bmiBtn');
let form = document.querySelector("form");

bmiBtn.addEventListener('click', () => {
    bmiCalculate();
})

let bmiCalculate = () => {
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
    let heightError = document.querySelector('#heightError');
    let weightError = document.querySelector('#weightError');
    let result = document.querySelector('#result');

    let bmi = parseFloat((weight / ((height ** 2) / 10000))).toFixed(2);

    if (weight === "" || isNaN(weight) || weight < 0 || height === "" || isNaN(height) || height < 0) {

        alert("Enter the valid input");

        if(weight === "" || isNaN(weight) || weight < 0) {
            weightError.innerHTML = `X Enter the valid weight`
        }
        else{
            weightError.innerHTML = ""
        }
         if(height === "" || isNaN(height) || height < 0){
            heightError.innerHTML = `X Enter the valid heoght`
        }else{
            heightError.innerHTML ="";
        }
    }
    else {
        if (bmi < 18.5) {
            result.innerHTML = `Under Weight : ${bmi}`
            weightError.innerHTML = heightError.innerHTML = "";
        } else if (bmi > 18.5 && bmi < 24.9) {
            result.innerHTML = `Normal Weight : ${bmi}`
            weightError.innerHTML = heightError.innerHTML = "";
        } else if (bmi > 25 && bmi < 29.9) {
            result.innerHTML = `Over Weight : ${bmi}`
            weightError.innerHTML = heightError.innerHTML = "";
        } else if (bmi > 30 && bmi < 34.9) {
            result.innerHTML = `Obese : ${bmi}`
            weightError.innerHTML = heightError.innerHTML = "";
        } else {
            result.innerHTML = `Extremely Obese : ${bmi}`
            weightError.innerHTML = heightError.innerHTML = "";
        }
    }



}