const content = {
  dispo: {
    Lundis: ["09h à 12h"],
    Mardis: [],
    Mercredis: ["09h à 12h", "14h à 20h"],
    Jeudis: [],
    Vendredis: ["09h à 12h", "14h à 20h"],
  },
};

/* disponibilité */
/* const disponibiliteContainer = document.querySelector(".dispo");

Object.keys(content.dispo).forEach((element) => {
  if (content.dispo[element].length !== 0) {
    let jourContainer = document.createElement("div");
    jourContainer.setAttribute("class", "jour");
    let jour = document.createElement("p");
    jour.innerHTML = `${element} <br />
    ${content.dispo[element].join("<br /> ")}`;
    jourContainer.append(jour);
    disponibiliteContainer.appendChild(jourContainer);
  }
}); */

/* contact complement */
/* const transportList = document.querySelector(".transport-list");
Object.keys(content.transport).forEach((element) => {
  let li = document.createElement("li");
  li.innerHTML = content.transport[element];
  transportList.append(li);
});
const parkingAdresse = document.querySelector(".parking-adresse");
Object.keys(content.parking).forEach((element) => {
  let li = document.createElement("li");
  li.innerHTML = content.parking[element];
  parkingAdresse.append(li);
});
 */
