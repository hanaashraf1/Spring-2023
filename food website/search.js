const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');


// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


// get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    let bgColor;
    if (searchInputTxt === 'beef') {
        bgColor = '#DAB0A1';
    } else if (searchInputTxt === 'chicken') {
        bgColor = 'beige';
    } else if (searchInputTxt === 'broccoli') {
        bgColor = '#C0E3C0';
    }
    else if (searchInputTxt === 'tomato') {
    bgColor = '#D9A9A9';
    }
    else if (searchInputTxt === 'sugar') {
        bgColor = 'white';
    }
    else if (searchInputTxt === 'eggs') {
            bgColor = '#EFDE96';
     }
     else if (searchInputTxt === 'milk') {
     bgColor = '#E6E4E2';
  }
     else if (searchInputTxt === 'onion') {
     bgColor = '#E4D9D8';
     }
     else if (searchInputTxt === 'lemon') {
      bgColor = '#FAF5A7';

     }else if (searchInputTxt === 'lime') {
     bgColor = '#B9E5B3';
     }
     else if (searchInputTxt === 'bread') {
        bgColor = '#D99C80';
        }
        else if (searchInputTxt === 'salmon') {
            bgColor = '#FAD3C3';
            }
            else if (searchInputTxt === 'rice') {
                bgColor = '#FAFAE9';
                }
                else if (searchInputTxt === 'potato') {
                    bgColor = '#F0EBBB';
                    }
               

    document.body.style.backgroundColor = bgColor; // set the background color
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "we dont have anything with that ingredient, but don't give up. Try something else!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}


// get recipe of the meal
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

// create a modal
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}