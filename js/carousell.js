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
    quote: ` “Le plus grand voyageur n'est pas celui qui à fait dix fois le tour du monde. <br />
  Mais celui qui à fait une seule fois le tour de lui-même.”`,
    author: `- Gandhi.`,
    imgSrc: ``,
    imgAlt: ``,
  },
];

let containerCarousell = document.querySelector(".carousell-container");
let quoteContainer = containerCarousell.querySelector(".quoteContainer");
let imgCarousell = containerCarousell.querySelector("img");
let quote = containerCarousell.querySelector("h3");
let author = containerCarousell.querySelector("i");

let indexQuotes = 0;
changeQuote();

setInterval(() => {
  if (indexQuotes >= quotes.length - 1) {
    indexQuotes = 0;
  } else {
    indexQuotes++;
  }

  changeQuote();
}, 8000);

function changeQuote() {
  quoteContainer.style.opacity = 0;
  setTimeout(() => {
    quote.innerHTML = quotes[indexQuotes].quote;
    author.innerHTML = quotes[indexQuotes].author;
    quoteContainer.style.opacity = 1;
  }, 2000);
}
