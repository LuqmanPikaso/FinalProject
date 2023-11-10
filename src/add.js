document.addEventListener('DOMContentLoaded', function () {
    // Fetch the list of meals for the dropdown
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;
            if (meals) {
                const selectElement = document.getElementById('search-input');

                // Populate the dropdown with meal names
                meals.forEach(meal => {
                    const option = document.createElement('option');
                    option.value = meal.strMeal;
                    option.textContent = meal.strMeal;
                    selectElement.appendChild(option);
                });
            }
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;
            if (meals) {
                // Clear previous results
                document.getElementById('meal-container').innerHTML = '';
                meals.forEach(meal => {
                    const mealContainer = document.createElement('div');
                    mealContainer.classList.add('meal-item');
                    mealContainer.innerHTML = `
                        <img class="meal-image" src="${meal.strMealThumb}" alt="Meal Image">
                        <p class="meal-name">${meal.strMeal}</p>
                        <p class="meal-category">${meal.strCategory}</p>
                        <p>Instructions: </p>
                        <p class="meal-instructions">${meal.strInstructions}</p><br>
                        <p>Here the youtube link: </p>
                        <a class="meal-youtube-link" href="${meal.strYoutube}" target="_blank">Watch on YouTube</a><br>
                        <p>Source link: </p>
                        <a class="meal-source-link" href="${meal.strSource}" target="_blank">View Source</a>
                        <p>Ingredients: </p>
                        <p class="meal-ingredients1">${meal.strIngredient1}</p>
                        <p class="meal-ingredients2">${meal.strIngredient2}</p>
                        <p class="meal-ingredients3">${meal.strIngredient3}</p>
                        <p class="meal-ingredients4">${meal.strIngredient4}</p>
                        <p class="meal-ingredients5">${meal.strIngredient5}</p>
                        <p class="meal-ingredients6">${meal.strIngredient6}</p>
                        <p class="meal-ingredients7">${meal.strIngredient7}</p>
                        <p class="meal-ingredients8">${meal.strIngredient8}</p>
                        <p class="meal-ingredients9">${meal.strIngredient9}</p>
                        <p class="meal-ingredients10">${meal.strIngredient10}</p>
                        <p class="meal-ingredients11">${meal.strIngredient11}</p>
                        <p class="meal-ingredients12">${meal.strIngredient12}</p>
                        <p class="meal-ingredients13">${meal.strIngredient13}</p>
                        <p class="meal-ingredients14">${meal.strIngredient14}</p>
                        <p class="meal-ingredients15">${meal.strIngredient15}</p>
                        <p class="meal-ingredients16">${meal.strIngredient16}</p>
                        <p class="meal-ingredients17">${meal.strIngredient17}</p>
                        <p class="meal-ingredients18">${meal.strIngredient18}</p>
                        <p class="meal-ingredients19">${meal.strIngredient19}</p>
                        <p class="meal-ingredients20">${meal.strIngredient20}</p>

                    `;
                    document.getElementById('meal-container').appendChild(mealContainer);
                });
            } else {
                document.getElementById('meal-container').innerHTML = '<p>No meals found</p>';
            }
        })
        .catch(error => console.error('Error:', error));
});

