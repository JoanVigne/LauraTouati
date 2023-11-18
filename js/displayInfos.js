let menuButton = document.querySelector(".menu-button");
const phoneNav = document.querySelector(".phone-nav");
const burgerMenu = menuButton.querySelector(".burger-menu");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  phoneNav.classList.toggle("active");
  burgerMenu.classList.toggle("rotate-burger");
}

/* infos dans infos.js */
const contactInfos = infos.contact;
Object.keys(contactInfos).forEach((key) => {
  const elements = document.querySelectorAll(`.${key} *`);
  // POUR METTRE UN PASSAGE A LA LIGNE SUR LES ADRESSES et VILLE DANS LA SECTION CONTACT
  let passageAdresse1 = 0;
  let passageAdresse2 = 0;

  elements.forEach((element) => {
    element.innerHTML = contactInfos[key];
    if (key === "email") {
      element.href = `mailto:${contactInfos[key]}`;
    }
    if (key === "telephone") {
      element.href = `tel:${contactInfos[key]}`;
    }
    // POUR METTRE UN PASSAGE A LA LIGNE SUR LES ADRESSES DANS LA SECTION CONTACT
    if (key === "adresse1") {
      if (passageAdresse1 === 3) {
        let adresseModifiee = contactInfos[key].replace(", ", "<br>");
        element.innerHTML = adresseModifiee;
      } else {
        passageAdresse1++;
      }
    }
    if (key === "adresse2") {
      if (passageAdresse2 === 3) {
        let adresseModifiee = contactInfos[key].replace(", ", "<br>");
        element.innerHTML = adresseModifiee;
      } else {
        passageAdresse2++;
      }
    }
  });
});

function generalTest() {
  testDisplayInfo(".adresse1");
  testDisplayInfo(".adresse2");
}
generalTest();
/* TEST FUNCTIONS A FAIRE DANS LA CONSOLE */
function testDisplayInfo(containerSelectAvecQuerySelectorAll) {
  console.log("Ce test donne les positions des adresses dans le DOM");
  let ToutLesElements = document.querySelectorAll(
    containerSelectAvecQuerySelectorAll
  );
  ToutLesElements.forEach((element, index) => {
    const textAdresse1 = element.firstElementChild.textContent;
    const virgule = ",";
    let positionDeCetteAdresseSurLEcran = element.parentNode;
    if (textAdresse1 === "") {
      const positionX = element.offsetLeft;
      const positionY = element.offsetTop;
      console.error("Une des adresses est vide. Détails :", {
        ParentNode: positionDeCetteAdresseSurLEcran,
        positionX: positionX,
        positionY: positionY,
        index: index,
        content: textAdresse1,
      });
      throw new error("erreur content vide");
    }
    if (textAdresse1.includes(virgule) === false) {
      console.log(
        "il y a un <br> à la place de la virgule sur cette adresse :",
        positionDeCetteAdresseSurLEcran
      );
    }
    console.log(
      "Il y a une virgule dans cette adresse :",
      positionDeCetteAdresseSurLEcran
    );
  });
}

// fake adresse pour tester l'erreur de la function testDisplayInfo();
function creerFakeAdresse() {
  let containerFakeAdresse = document.createElement("div");
  containerFakeAdresse.setAttribute("class", "adresse1");
  let a = document.createElement("a");
  containerFakeAdresse.append(a);

  document.body.append(containerFakeAdresse);
}
