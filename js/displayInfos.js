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
  // selectionne le premier element dans les selectors
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

/* TEST  pour savoir si un container d'adresse n'est pas vide ou mal rempli 
exemple : testDisplayInfo(".adresse1");
à faire dans la console ou ici, sur chaque page...
*/
function testDisplayInfo(containerSelectAvecQuerySelectorAll) {
  let ToutLesElements = document.querySelectorAll(
    containerSelectAvecQuerySelectorAll
  );
  console.log(ToutLesElements.length);
  // si il n'y a pas de container avec cette class :
  if (ToutLesElements.length === 0) {
    console.error("Il n'y a pas ce container sur cette page. Details: ", {
      exempleUtilisationFunction: `testDisplayInfo(".prix")`,
      raison2: "Ce container n'est pas supposé être sur cette page",
      raison3: "Les données ne sont pas au bon format",
    });
    return;
  }
  ToutLesElements.forEach((element, index) => {
    const contentOfTheFirstElementChild = element.firstElementChild.textContent;

    let positionDeCetteAdresseSurLEcran = element.parentNode;

    if (contentOfTheFirstElementChild === "") {
      const positionX = element.offsetLeft;
      const positionY = element.offsetTop;
      console.error("Une des adresses est vide. Détails :", {
        ParentNode: positionDeCetteAdresseSurLEcran,
        positionX: positionX,
        positionY: positionY,
        index: index,
        content: contentOfTheFirstElementChild,
      });
      throw new error("erreur content vide");
    }
  });
}
