// Function to create the header
function createHeader(data) {
  const container = document.createElement("div");
  container.classList.add("nomEtContact");

  // Add logo image
  const logoImg = document.createElement("img");
  logoImg.classList.add("border-round");
  // catch url of the page :
  if (
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/") ||
    window.location.pathname.endsWith("/index.html")
  ) {
    console.log("sur la page d'accueil");
    logoImg.src = "./assets/Images/LOGO_Laura_Vectoriel.png";
  } else {
    console.log("PAS PAS sur la page d'accueil");
    logoImg.src = "../assets/Images/LOGO_Laura_Vectoriel.png";
  }
  logoImg.alt = "logo visage arbre";
  container.appendChild(logoImg);

  // Create identity section
  const identitySection = document.createElement("div");
  identitySection.classList.add("containerNom");
  identitySection.innerHTML = `
      <h1>${data.identite.prenom} ${data.identite.nom}</h1>
      <h2>${data.identite.profession}</h2>
      <h3>Enfants - Adolescents - Adultes</h3>
    `;
  container.appendChild(identitySection);

  // Create contact section
  const contactSection = document.createElement("div");
  contactSection.classList.add("etContact");
  let logoGps = document.createElement("img");
  logoGps.alt = "localisation";
  let logoTel = document.createElement("img");
  logoTel.alt = "telephone";
  let logoMail = document.createElement("img");
  logoMail.alt = "e-mail";
  if (
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/") ||
    window.location.pathname.endsWith("/index.html")
  ) {
    console.log("sur la page d'accueil");
    logoGps.src = "./assets/Images/Gps_logo.png";
    logoTel.src = "./assets/Images/Tel_logo.png";
    logoMail.src = "./assets/Images/Mail_logo.png";
  } else {
    console.log("PAS PAS sur la page d'accueil");
    logoGps.src = "../assets/Images/Gps_logo.png";
    logoTel.src = "../assets/Images/Tel_logo.png";
    logoMail.src = "../assets/Images/Mail_logo.png";
  }
  // Add addresses
  if (data.contact.adresses) {
    data.contact.adresses.forEach((adresse) => {
      const adresseDiv = document.createElement("div");
      adresseDiv.classList.add("adresse");
      adresseDiv.innerHTML = `
        <a href="#contact">${adresse.adresse1}</a>
      `;
      adresseDiv.appendChild(logoGps.cloneNode()); // Append a clone of the logoGps image
      contactSection.appendChild(adresseDiv);
    });
  }

  // Add phone numbers
  if (data.contact.telephones) {
    data.contact.telephones.forEach((telephone) => {
      const telephoneDiv = document.createElement("div");
      telephoneDiv.classList.add("telephone");
      telephoneDiv.innerHTML = `
        <a href="tel:${telephone}">${telephone}</a>
      `;
      telephoneDiv.appendChild(logoTel.cloneNode()); // Append a clone of the logoTel image
      contactSection.appendChild(telephoneDiv);
    });
  }

  // Add email
  const emailDiv = document.createElement("div");
  emailDiv.classList.add("email");
  emailDiv.innerHTML = `
    <a href="mailto:${data.contact.email}">${data.contact.email}</a>
  `;
  emailDiv.appendChild(logoMail.cloneNode()); // Append a clone of the logoMail image
  contactSection.appendChild(emailDiv);

  container.appendChild(contactSection);

  // Create horaires section
  if (data.horaires) {
    const horairesSection = document.createElement("div");
    horairesSection.classList.add("horaires-section");
    const horairesList = Object.entries(data.horaires)
      .map(([day, hours]) => {
        return `<p class="horaires-item">${day}: ${hours}</p>`;
      })
      .join("");
    horairesSection.innerHTML = `<h2 class="horaires-title">Horaires</h2>${horairesList}`;
    container.appendChild(horairesSection);
  }

  // Append the container to the body
  const headercontainer = document.querySelector("header");
  headercontainer.appendChild(container);
}

// Call the function to generate the header
createHeader(infos);
