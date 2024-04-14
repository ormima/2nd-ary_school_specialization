const items = document.querySelectorAll("b[id='item']");
const calories = [];
const mass = [];
const ingredient_mass = document.querySelectorAll("#ingredient_mass");
const res1 = document.getElementById("res1");
const buttons = document.querySelectorAll("#ingredients_button");
const ingredients_category_items = document.querySelectorAll("div.ingredients_category_items");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const ingredients_category_items = document.querySelectorAll("div.ingredients_category_items");

        ingredients_category_items.forEach((ingredient) => {
          ingredient.style.display = "none";
        });
      
        const current_ingredients_category_items = button.parentElement.parentElement.querySelector("div.ingredients_category_items");
      
        if(current_ingredients_category_items.style.display == "none"){
            current_ingredients_category_items.style.display = "flex";
        } else if(current_ingredients_category_items.style.display == "flex"){
            current_ingredients_category_items.style.display = "none";
        }
      });
  });

setInterval(calc_ingredients, 500);

function calc_ingredients(){
    const items_len = items.length;
    for (let i = 0; i < items_len; i++) {
        const item = items[i];
        const calorieValue = parseInt(item.innerText);
        calories.push(calorieValue);
        const ingr_mass = ingredient_mass[i];
        const ing_mass = parseInt(ingr_mass.value);
        mass.push(ing_mass);
      }
    let ingredients_result = parseInt('0');
    // console.log(calories[1] + " ; " + mass[1]);
    for(i = 0; i <= items_len; i++){
        ingredients_result = ingredients_result + (calories[i] * mass[i]);
    }
    // ingredients_result = toString(ingredients_result);
    // console.log(ingredients_result);
    res1.innerText = ingredients_result;
}

setInterval(calculateCalories, 500);

function calculateCalories() {
  const age = document.getElementById("your_age").value;
  const mass = document.getElementById("your_mass").value;
  const sex = document.querySelector('input[name="sex"]:checked').id;
  const meal = document.querySelector('input[name="meal"]:checked').id;

  const mealCalories = {
    breakfast: 0.25,
    desert: 0.1,
    lunch: 0.35,
    "evening meal": 0.2,
    dinner: 0.1
  };
  const sexCalories = {
    male: 0.9,
    female: 0.8
  };
  let calories = (10 * mass + 6.25 * age - 5 * sexCalories[sex]) * 1.2;
  calories *= mealCalories[meal];
  document.getElementById("res2").innerHTML = Math.round(calories) + " ";
}