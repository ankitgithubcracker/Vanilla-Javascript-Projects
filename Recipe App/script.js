const inputBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const recipeDetailContent = document.querySelector(".recipe-detail-content");
const form = document.querySelector("form");
const main = document.querySelector("main");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let searchInput = inputBox.value.trim();
    if (!searchInput) {
        recipeContainer.innerHTML = `<h2>Type the meal in search box</h2>`;
        return
    }
    fetchRecipe(searchInput);
});
// <==========OR=========>
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let searchInput = inputBox.value.trim();
    if (!searchInput) {
        recipeContainer.innerHTML = `<h2>Type the meal in search box</h2>`;
        return
    }
    fetchRecipe(searchInput);
});

window.addEventListener('load', ()=>{
    let searchInput = inputBox.value.trim();
    fetchRecipe(searchInput);
});

let fetchRecipe = async (recipeName) => {
    // Loader ......
    recipeContainer.innerHTML = `
        <div class="loader">
            <h2>Fetching Recipe....</h2>
            <div id="container">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
        </div>
    `
    try {
        // Fetching Data....
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;
        let data = await fetch(url);
        let response = await data.json();
        // console.log(response);
        recipeContainer.innerHTML = "";
        response.meals.forEach(meal => {

            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p>Belongs to <span>${meal.strCategory}</span> Category</p>
        `
            // Adding Button.....
            const button = document.createElement('button');
            button.textContent = "View Recipe"
            recipeDiv.appendChild(button);

            button.addEventListener("click", () => {
                openRecipePopup(meal);
            });

            recipeContainer.appendChild(recipeDiv);
        });
    } catch (error) {
        recipeContainer.innerHTML = `<h2>Recipe not found......</h2>
        <div class="error"></div>
        `;
    }
}
// Recipe Details Popup......
const openRecipePopup = (meal) => {
    recipeDetailContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        <h3>Ingreditents: </h3>
        <ul class="ingredientList">${fetchIngredients(meal)}</ul>
        <div>
            <h2>Instructions</h2>
            <p class="instruction">${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank" class="link"> Veiw Recipe Vedio </a>
        </div>
        
    `
    recipeDetailContent.parentElement.style.display = "block";


}

// Function to get Ingredients and measurements
const fetchIngredients = (meal) => {
    let ingredientList = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
            const measure = meal[`strMeasure${i}`];
            ingredientList += `<li>${ingredient} : ${measure} </li>`
            // console.log(measure + " " + ingredient);
        } else {
            break;
        }
    }
    return ingredientList;
}



recipeCloseBtn.addEventListener("click", () => {
    recipeDetailContent.parentElement.style.display = "none";
});

inputBox.addEventListener("click",()=>{
    recipeDetailContent.parentElement.style.display = "none";
});


