/* <!--  <div class="nomEtContact">
<img
  class="border-round"
  src="./assets/Images/LOGO_Laura_Vectoriel.png"
  alt="logo visage arbre"
/>
<div class="containerNom">
  <h1>Laura Touati</h1>
  <h2>Psychologue Clinicienne</h2>
  <h3>Enfants - Adolescents - Adultes</h3>
</div>

<div class="etContact">
  <div class="adresse1">
    <a href="#contact"></a>
    <img
      src="./assets/Images/Gps_logo.png"
      alt="localisation"
      class="logo"
    />
    <span class="material-symbols-outlined"> location_on </span> 
  </div>
   <div class="adresse2">
    <a href="#contact"></a>
    <img
      src="./assets/Images/Gps_logo.png"
      alt="localisation"
      class="logo"
    />
   
  </div> 
  <div class="telephone">
    <a href=""></a>
    <img
      src="./assets/Images/Tel_logo.png"
      alt="telephone"
      class="logo"
    />
   <span class="material-symbols-outlined"> call </span> 
  </div>
  <div class="email">
    <a href=""> </a>
    <img
      src="./assets/Images/Mail_logo.png"
      alt="e-mail"
      class="logo"
    />
    <span class="material-symbols-outlined"> mail </span> 
  </div>
</div>
</div> --> */
// Function to create the header
function createHeader(data) {
  const container = document.createElement("div");
  container.classList.add("nomEtContact");

  // Add logo image
  const logoImg = document.createElement("img");
  logoImg.classList.add("border-round");
  logoImg.src = "./assets/Images/LOGO_Laura_Vectoriel.png";
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

  // Add addresses
  if (data.contact.adresses) {
    data.contact.adresses.forEach((adresse) => {
      const adresseDiv = document.createElement("div");
      adresseDiv.classList.add("adresse");
      adresseDiv.innerHTML = `
      <a href="#contact">${adresse.adresse1}</a>
      <img src="./assets/Images/Gps_logo.png" alt="localisation" class="logo" />
    `;
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
      <img src="./assets/Images/Tel_logo.png" alt="telephone" class="logo" />
    `;
      contactSection.appendChild(telephoneDiv);
    });
  }

  // Add email
  const emailDiv = document.createElement("div");
  emailDiv.classList.add("email");
  emailDiv.innerHTML = `
  <a href="mailto:${data.contact.email}">${data.contact.email}</a>
  <img src="./assets/Images/Mail_logo.png" alt="e-mail" class="logo" />
`;
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
