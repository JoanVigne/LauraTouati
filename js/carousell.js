const quotes = [
  {
    quote: ` “Qui mieux que vous sait vos besoins ? <br />
    Apprendre à se connaître est le premier des soins.”`,
    author: `- Jean de la Fontaine.`,
    imgSrc: ``,
    imgAlt: ``,
  },
  {
    quote: ` “L'amour est une étoffe tissée par la nature et brodée par l'imagination.”`,
    author: `- Voltaire.`,
    imgSrc: ``,
    imgAlt: ``,
  },
  {
    quote: `“Le plus grand voyageur n'est pas celui qui à fait dix fois le tour du monde. <br />
  Mais celui qui à fait une seule fois le tour de lui-même.”`,
    author: `- Gandhi.`,
    imgSrc: ``,
    imgAlt: ``,
  },
  {
    pageTitle: `Laura Touati Psychologue - Accueil`,
    quote: `“Notre responsabilité n’est pas celle de nos maladies,
    mais celle de notre guérison”`,
    author: ``,
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
    console.log("Quote found for page title:", documentTitle);
    console.log("Quote:", quote.quote);
    console.log("Author:", quote.author);

    console.log("quoteContainer:", quoteContainer);
    console.log("quoteh3:", quoteh3);
    console.log("author:", author);

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
