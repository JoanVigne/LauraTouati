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
    profession: "Psychologue",
    services: ["Consultation psychologique", "Séance Reiki"],
    diplome: "Master de psychologie clinique et psychopathologie",
    universite: "Université Paul Valéry Montpellier 3",
  },
  contact: {
    adresse1: "15 avenue du six Juin, 14000 CAEN",
    codePostal1: "14000",
    ville1: "Caen",
    adresse2: "5 rue Buquet, 14000 CAEN",
    codePostal2: "14000",
    ville2: "Caen",
    telephone: "06 67 44 79 16",
    email: "ltouati.psychologue@gmail.com",
    prix: "60€ TTC",
    numeroAdeli: "149314999",
  },
};

// les horaires dispo ne sont pas dynamiques dans la section dans index.html
// les MAPS ne sont pas dynamiques, il faut changer le HTML <iframe> googlemap

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
    telephone: data.contact.telephone,
    email: data.contact.email,
  });
  document.body.appendChild(scriptTag);
}

function generateSchemaLocalBusiness(data) {
  const scriptTag = document.createElement("script");
  scriptTag.type = "application/ld+json";
  scriptTag.innerHTML = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: `${data.identite.prenom} ${data.identite.nom}`,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: data.contact.adresse1,
        addressLocality: data.contact.ville1,
        postalCode: data.contact.codePostal1,
      },
      {
        "@type": "PostalAddress",
        streetAddress: data.contact.adresse2,
        addressLocality: data.contact.ville2,
        postalCode: data.contact.codePostal2,
      },
    ],
    telephone: data.contact.telephone,
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
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: data.identite.services[1],
            serviceType: data.identite.services[1],
          },
        },
      ],
    },
  });

  document.body.appendChild(scriptTag);
}
