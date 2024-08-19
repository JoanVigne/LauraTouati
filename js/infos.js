/*   Vérifier sur Schema.org les balises à chaque modification des infos */
/* Dans navigateur, inspecter, Elements script type=application/ld+json */
const infos = {
  dispo: {
    Lundis: "",
    Mardis: "09:30-19:00",
    Mercredis: "09:30-19:00",
    Jeudis: "09:30-19:00",
    Vendredis: "09:30-19:00",
    Samedis: "09:30-19:00",
    Dimanches: "",
  },
  identite: {
    type: "Person",
    nom: "Touati",
    prenom: "Laura",
    profession: "Psychologue Clinicienne",
    services: ["Consultation psychologique", "Séance Reiki"],
    diplome: "Master de psychologie clinique et psychopathologie",
    universite: "Université Paul Valéry Montpellier 3",
  },
  contact: {
    adresses: [{ adresse1: "15 avenue du six Juin, 14000 CAEN" }],
    city: "Caen",
    codePostal: "14000",
    telephones: ["06 67 44 79 16"],
    email: "ltouati.psychologue@gmail.com",
    prix: "60 euros",
    numeroAdeli: "149314999",
  },
};

// les horaires dispo ne sont pas dynamiques dans index.html class="rdv-section"
// les MAPS ne sont pas dynamiques, il faut changer le HTML <iframe> googlemap
// sur la page Reiki, les jours et l'adresse ne sont pas dynamique.

// Genere le schema.org avec les data de infos
// separation de type Person et type LocalBusiness
function generateSchemaPerson(data) {
  const scriptTag = document.createElement("script");
  scriptTag.type = "application/ld+json";
  scriptTag.innerHTML = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Person",
    name: `${data.identite.prenom} ${data.identite.nom}`,
    jobTitle: data.identite.profession,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: data.identite.universite,
    },
    telephone: data.contact.telephones[0],
    email: data.contact.email,
  });
  document.body.appendChild(scriptTag);
}

function generateSchemaLocalBusiness(data) {
  const scriptTag = document.createElement("script");
  scriptTag.type = "application/ld+json";

  const addresses = data.contact.adresses.map((adresse) => ({
    "@type": "PostalAddress",
    streetAddress: adresse.adresse1,
    addressLocality: data.contact.city, // Use the city field directly
    postalCode: data.contact.codePostal, // Use the postal code field directly
  }));

  scriptTag.innerHTML = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: `${data.identite.prenom} ${data.identite.nom}`,
    address: addresses,
    telephone: data.contact.telephones[0],
    email: data.contact.email,
    priceRange: data.contact.prix,
    openingHours: [
      /*  "Mo " +
        data.dispo.Lundis + */
      "Tu " +
        data.dispo.Mardis +
        ", We " +
        data.dispo.Mercredis +
        ", Th " +
        data.dispo.Jeudis +
        ", Fr " +
        data.dispo.Vendredis +
        ", Sa " +
        data.dispo.Samedis /* +
        ", Su " +
        data.dispo.Dimanches */,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: data.identite.services[0],
            serviceType: data.identite.services[0],
          },
        },
        /*  {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: data.identite.services[1],
            serviceType: data.identite.services[1],
          },
        }, */
      ],
    },
  });

  document.body.appendChild(scriptTag);
}
