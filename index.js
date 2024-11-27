const recipeName=document.querySelector("article h1").innerText;
console.log("Recipe Name:" , recipeName);

const recipeTag=document.querySelector("#recipe-name").tagName;
console.log("Recipe Tag: ", recipeTag);

const fontSize=window.getComputedStyle(document.querySelector(".description")).fontSize;
console.log("Font Size: " , fontSize);

const imageAtrribure=document.querySelector(".image-container img").alt;
console.log("Image Alt Attrinute: " ,imageAtrribure);

const imageElement= document.querySelector(".image-container img");
const imageInfo={
    url: imageElement.src, 
    height:imageElement.naturalHeight,
    width: imageElement.naturalWidth,
};
console.log("imageInfo: ",imageInfo);

const ingredientPaste=document.querySelectorAll(".ingredients-list-paste li").length;
console.log("ingredient has past:", ingredientPaste);

const forthElement=document.querySelectorAll(".ingredients-list-paste li") [3].innerText;
console.log("Forth Element ingredients: ",forthElement);

const instructionsList=document.querySelectorAll(".instructions-list li")
const instructionsArray=Array.from(instructionsList).map((instruction, index) =>
({
    order: index +1,
    text: instruction.innerText,
}));

console.log("instruction Array: " ,instructionsArray);