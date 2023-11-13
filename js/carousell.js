const quotes = [
  {
    pageTitle: `Laura Touati Psychologue - Accueil`,
    quote: `“Notre responsabilité n’est pas celle de nos maladies,
    mais celle de notre guérison”`,
    author: ``,
    imgSrc: ``,
    imgAlt: ``,
  },
  {
    pageTitle: `À propos de Laura Touati`,
    quote: `“Seul le désir adapté à chaque instant donne de la légèreté à nos pas, de la force a nos décisions”`,
    author: `Catherine Bensaid`,
    imgSrc: ``,
    imgAlt: ``,
  },
  {
    pageTitle: `Consultations adultes`,
    quote: ` “Qui mieux que vous sait vos besoins ?
    Apprendre à se connaître est le premier des soins.”`,
    author: `Jean de la Fontaine.`,
    imgSrc: ``,
    imgAlt: ``,
  },
  {
    pageTitle: `Accompagner votre enfant`,
    quote: ` “Toi qui marche, il n'existe pas de chemin, le chemin se fait en marchant”`,
    author: `Antonio Machado`,
    imgSrc: ``,
    imgAlt: ``,
  },
  {
    pageTitle: `Soutient à la parentalité`,
    quote: ` “L'amour est une étoffe tissée par la nature et brodée par l'imagination”`,
    author: `Voltaire`,
    imgSrc: ``,
    imgAlt: ``,
  },
];

let containerCarousell = document.querySelector(".carousell-container");
let quoteContainer = containerCarousell.querySelector(".quoteContainer");
let imgCarousell = containerCarousell.querySelector("img");
let quoteh3 = containerCarousell.querySelector("h3");
let author = containerCarousell.querySelector("i");

const documentTitle = document.title;

quotes.forEach((quote) => {
  if (documentTitle === quote.pageTitle) {
    quoteh3.textContent = quote.quote;
    if (quote.author !== "") {
      author.innerHTML = quote.author;
    }
  }
});

// CAROUSEL SI ON VEUT QUELQUE CHOSE DE PLUS DYNAMIQUE :
/* let indexQuotes = 0;
changeQuote();

setInterval(() => {
  if (indexQuotes >= quotes.length - 1) {
    indexQuotes = 0;
  } else {
    indexQuotes++;
  }
  changeQuote();
  setTimeout(() => {
    changeImg();
  }, 4500);
}, 8000);

function changeQuote() {
  quoteContainer.style.opacity = 0;
  setTimeout(() => {
    quote.innerHTML = quotes[indexQuotes].quote;
    author.innerHTML = quotes[indexQuotes].author;
    quoteContainer.style.opacity = 1;
  }, 2000);
} */

/* function changeImg() {
  console.log("change image");
}
 */
