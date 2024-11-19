// 1. 
const recipeName = document.getElementById('recipe-name').innerText;
console.log("Recipe Name:", recipeName);

// 2. 
const recipeTag = document.getElementById('recipe-name').tagName;
console.log("HTML Tag for Recipe Name:", recipeTag);

// 3. 
const descriptionFontSize = window.getComputedStyle(document.querySelector('.description')).fontSize;
console.log("Font Size of Description:", descriptionFontSize);

// 4. 
const imageAlt = document.querySelector('.image-container img').alt;
console.log("Image Alt Attribute:", imageAlt);

// 5. 
const imageElement = document.querySelector('.image-container img');
const imageInfo = {
  url: imageElement.src,
  height: imageElement.naturalHeight,
  width: imageElement.naturalWidth,
};
console.log("Image Info:", imageInfo);

// 6. 
const pasteIngredientsCount = document.querySelectorAll('.ingredients-list-paste li').length;
console.log("Number of Paste Ingredients:", pasteIngredientsCount);

// 7. 
const fourthPasteIngredient = document.querySelectorAll('.ingredients-list-paste li')[3].innerText;
console.log("Fourth Paste Ingredient:", fourthPasteIngredient);

// 8. 
const instructionsList = document.querySelectorAll('.instructions-list li');
const instructionsArray = Array.from(instructionsList).map((item, index) => ({
  order: index + 1,
  text: item.innerText,
}));
console.log("Instructions Array:", instructionsArray);