let menuButton = document.querySelector(".menu-button");
const phoneNav = document.querySelector(".phone-nav");
const burgerMenu = menuButton.querySelector(".burger-menu");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  phoneNav.classList.toggle("active");
  burgerMenu.classList.toggle("rotate-burger");
}

/* console.log("INFOS : ", infos); */
/* POUR CHANGER DYNAMIQUEMENT LES ADRESSES ET TEL ET MAIL SUR TOUTES LES PAGES */
/* const contentHeader = {
  adresse1: "15 avenue du six Juin, 14000 CAEN",
  adresse2: "5 rue Buquet, 14000 CAEN",
  telephone: "06 67 44 79 16",
  email: "ltouati.psychologue@gmail.com",
}; */
const contentHeader = infos.contact;

Object.keys(contentHeader).forEach((key) => {
  const elements = document.querySelectorAll(`.${key} *`);
  // POUR METTRE UN PASSAGE A LA LIGNE SUR LES ADRESSES DANS LA SECTION CONTACT
  let passageAdresse1 = 0;
  let passageAdresse2 = 0;

  elements.forEach((element) => {
    console.log("passageAdresse2", passageAdresse2);
    element.innerHTML = contentHeader[key];
    if (key === "email") {
      element.href = `mailto:${contentHeader[key]}`;
    }
    if (key === "telephone") {
      element.href = `tel:${contentHeader[key]}`;
    }
    // POUR METTRE UN PASSAGE A LA LIGNE SUR LES ADRESSES DANS LA SECTION CONTACT
    if (key === "adresse1") {
      if (passageAdresse1 === 3) {
        let adresseModifiee = contentHeader[key].replace(", ", "<br>");
        element.innerHTML = adresseModifiee;
      } else {
        passageAdresse1++;
      }
    }
    if (key === "adresse2") {
      if (passageAdresse2 === 3) {
        let adresseModifiee = contentHeader[key].replace(", ", "<br>");
        element.innerHTML = adresseModifiee;
      } else {
        passageAdresse2++;
      }
    }
    /* if (key === "adresse1") {
      if (passageAdresse1 === 0 || passageAdresse1 === 1) {
        passageAdresse1++;
      } else {
        let adresseModifiee = contentHeader[key].replace(", ", "<br>");
        element.innerHTML = adresseModifiee;
      }
    } */
    /*     if (key === "adresse2") {
      if (passageAdresse2 === 0 || passageAdresse2 === 1) {
        passageAdresse2++;
      } else {
        let adresseModifiee = contentHeader[key].replace(", ", "<br>");
        element.innerHTML = adresseModifiee;
      }
    } */
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
