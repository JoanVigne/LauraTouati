let menuButton = document.querySelector(".menu-button");
const phoneNav = document.querySelector(".phone-nav");
const burgerMenu = menuButton.querySelector(".burger-menu");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  phoneNav.classList.toggle("active");
  burgerMenu.classList.toggle("rotate-burger");
}

/* POUR CHANGER DYNAMIQUEMENT LES ADRESSES ET TEL ET MAIL SUR TOUTES LES PAGES */
const contentHeader = {
  adresse1: "15 avenue du six Juin, 14000 CAEN",
  adresse2: "5 rue Buquet, 14000 CAEN",
  telephone: "06 67 44 79 16",
  email: "ltouati.psychologue@gmail.com",
};

Object.keys(contentHeader).forEach((key) => {
  const elements = document.querySelectorAll(`.${key} a`);

  elements.forEach((element) => {
    element.innerHTML = contentHeader[key];
    if (key === "email") {
      element.href = `mailto:${contentHeader[key]}`;
    }
    if (key === "telephone") {
      element.href = `tel:${contentHeader[key]}`;
    }
  });
});

// code plus simple mais plus long
/* const adresse = document.querySelectorAll(".adresse a");
adresse.forEach((e) => {
  e.innerHTML = contentHeader.adresse;
});
const telephone = document.querySelectorAll(".telephone a");
telephone.forEach((e) => {
  e.innerHTML = contentHeader.telephone;
  e.href = `tel:${contentHeader.telephone}`;
});
const email = document.querySelectorAll(".email a");
email.forEach((e) => {
  e.innerHTML = contentHeader.email;
  e.href = `mailto:${contentHeader.email}`;
}); */
