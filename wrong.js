

// 1. 
const logoText = document.querySelector('.logo-text');
logoText.style.color = "#384241"; 

// 2. 
const header = document.querySelector('header');
header.style.justifyContent = "space-between"; 

// 3. 
header.style.borderBottom = "1px solid lightgray"; 

// 4. 
const recipeNameElement = document.getElementById('recipe-name');
recipeNameElement.innerText = "Frozen Cheesecake"; 

// 5. 
const timeContainer = document.querySelector('.time-container span.material-icons');
timeContainer.classList.add('material-icons'); 

// 6. 
const timeElement = document.querySelector('.time');
timeElement.innerText = "60+ min"; 

// 7. 
const imageElement = document.querySelector('.image-container img');
imageElement.src = "assets/frozen-cheesecake-slice.jpg"; 

// 8. 
const ingredientsContainer = document.querySelector('.ingredients-container');
ingredientsContainer.style.backgroundColor = "#f9f9f9"; 

// 9. 
const bottomIngredientsList = document.querySelector('.ingredients-list-bottom');
bottomIngredientsList.innerHTML = ""; 
bottomIngredientsList.innerHTML += "<li>15st digistivetex</li><li>Lite smör</li>"; 

// 10. 
const pasteIngredients = document.querySelectorAll('.ingredients-list-paste li');
pasteIngredients[2].innerText = "3tsk vaniljsocker"; 

// 11. 
const newIngredient = document.createElement('li');
newIngredient.innerText = "400g naturell philadelphiaost"; 
document.querySelector('.ingredients-list-paste').appendChild(newIngredient);

// 12. 
const instructionsTitle = document.querySelector('.instructions');