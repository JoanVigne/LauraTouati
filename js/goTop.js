let buttonToTop = document.createElement("a");
buttonToTop.setAttribute("id", "goTop");
document.body.append(buttonToTop);
buttonToTop.setAttribute("href", "#");

function btnReveal() {
  if (window.scrollY >= 300) {
    buttonToTop.classList.add("is-visible");
  } else {
    buttonToTop.classList.remove("is-visible");
  }
}
window.addEventListener("scroll", btnReveal);

function testbuttonToTop() {}
