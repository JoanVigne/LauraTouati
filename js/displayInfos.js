let menuButton = document.querySelector(".menu-button");
const phoneNav = document.querySelector(".phone-nav");
const burgerMenu = menuButton.querySelector(".burger-menu");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  phoneNav.classList.toggle("active");
  burgerMenu.classList.toggle("rotate-burger");
}

/* infos dans infos.js */
function displayInfoInContact() {
  const contactInfos = infos.contact;

  // Select the article element inside #contact
  const articleElement = document.querySelector("#contact article");

  // Create the ul element
  const ulElement = document.createElement("ul");

  // Create the li element for email
  const emailLi = document.createElement("li");
  emailLi.classList.add("email");
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${contactInfos.email}`;
  emailLink.innerHTML = contactInfos.email;
  emailLi.appendChild(emailLink);
  ulElement.appendChild(emailLi);

  // Create the li element for telephone
  const telephoneLi = document.createElement("li");
  telephoneLi.classList.add("telephone");
  const telephoneLink = document.createElement("a");
  telephoneLink.href = `tel:${contactInfos.telephones[0]}`;
  telephoneLink.innerHTML = contactInfos.telephones[0];
  telephoneLi.appendChild(telephoneLink);
  ulElement.appendChild(telephoneLi);

  // Loop through addresses and create li elements
  contactInfos.adresses.forEach((adresse, index) => {
    const adresseLi = document.createElement("li");
    adresseLi.classList.add(`adresse${index + 1}`);
    const adresseLink = document.createElement("a");
    adresseLink.href = "#contact";
    adresseLink.innerHTML = adresse.adresse1.replace(", ", "<br>");
    adresseLi.appendChild(adresseLink);
    ulElement.appendChild(adresseLi);
  });

  // Append the ul to the article
  articleElement.appendChild(ulElement);
}
displayInfoInContact();

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
