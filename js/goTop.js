let buttonToTop = document.createElement("a");
buttonToTop.setAttribute("id", "goTop");
document.body.append(buttonToTop);
buttonToTop.setAttribute("href", "#");
let arrowTop = document.createElement("img");
if (document.title === "Laura Touati Psychologue - Accueil") {
  arrowTop.setAttribute("src", "./assets/icons/goTop.png");
} else {
  arrowTop.setAttribute("src", "../assets/icons/goTop.png");
}
arrowTop.setAttribute("alt", "Fleche vers le haut");
buttonToTop.append(arrowTop);

function btnReveal() {
  if (window.scrollY >= 300) {
    buttonToTop.classList.add("is-visible");
  } else {
    buttonToTop.classList.remove("is-visible");
  }
}
window.addEventListener("scroll", btnReveal);

function testbuttonToTop() {}
