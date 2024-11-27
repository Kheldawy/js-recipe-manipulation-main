const logoColor=document.querySelector(".logo-text")
logoColor.style.color="black";

const headerAlignment=document.querySelector("header");
headerAlignment.style.justifyContent="space-between";
 
// document.querySelector("header").style.borderBottomColor = "black";
const borderColor=document.querySelector("header");
borderColor.style.borderBottomColor="black";

const recipeName=document.querySelector("#recipe-name");
recipeName.innerText="Frozen Cheescake";

const clockIcon=document.querySelector(".time-container span");
clockIcon.classList.add("material-icons");

const estimatedTime=document.querySelector(".time-container span.time")
estimatedTime.innerText="60+ min";

const imageSrc=document.querySelector(".image-container img");
imageSrc.src="assets/frozen-cheesecake-slice.jpg";

const ingredientsBackground=document.querySelector(".ingredients-container");
ingredientsBackground.style.backgroundColor="#f9f9f9";

const bottomIngredientsList=document.querySelector(".ingredients-list-bottom");
bottomIngredientsList.innerHTML= "<li>15st digistivetex</li> <li> lite smör</li>";

const pasteIngredientsList=document.querySelectorAll(".ingredients-list-paste li");
pasteIngredientsList[2].innerHTML="<li>3tsk vaniljsocker</li>";

const newIngredient=document.createElement("li");
newIngredient.innerText="400g naturell philadelphiaost";
document.querySelector(".ingredients-list-paste").appendChild(newIngredient);

const removeShadow=document.querySelector(".instructions");
removeShadow.classList.remove("shadow");

const instructionsItems=document.querySelectorAll(".instructions-list li");
instructionsItems[8].innerText="Ställ in i frysen över natten.";
instructionsItems[9].innerText="Servera och toppa med det du känner för.";