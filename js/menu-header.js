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
  adresse: "3 rue de la Cougar, 14000 Caen",
  telephone: "07 60 07 41 37",
  email: "lauratouati.psy@gmail.com",
};

Object.keys(contentHeader).forEach((e) => {
  const name = document.querySelectorAll(`.${e} a`);
  name.forEach((element) => {
    element.innerHTML = contentHeader[e];
    if (e === "email") {
      element.href = `mailto:${contentHeader[e]}`;
    }
    if (e === "telephone") {
      element.href = `tel:${contentHeader[e]}`;
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
