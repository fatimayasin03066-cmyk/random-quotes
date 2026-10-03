const quotes = [
  {
    text: "The world without Art is just 'Ehh' ",
    author: "Anonymous"
  },
  {
    text: "Inspiration exists, but it has to find you working.",
    author: "Pablo Picasso"
  },
  {
    text: "We are all golden sunflowers inside",
    author: "Anonymous"
  },
  {
    text: "I wish they can only take me as I am",
    author: "Vincent Van Gogh"
  },
  {
    text: "Will the end still be blue?",
    author: "Anonymous"
  },
  {
    text: "In the right eyes you will always be an art",
    author: "Anonymous"
  }
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("quoteBtn");
const quoteNumber = document.getElementById("quoteNumber");

// Added missing favoriteBtn selection
const favoriteBtn = document.getElementById("favoriteBtn");

button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex].text;
  author.textContent = quotes[randomIndex].author;
  localStorage.setItem("lastQuoteIndex", randomIndex);
  quoteNumber.textContent = `Quote ${randomIndex + 1} of ${quotes.length}`;
});

favoriteBtn.addEventListener("click", function() {
  if (favoriteBtn.textContent === "♥ Saved") {
    localStorage.removeItem("favoriteQuote");
    localStorage.removeItem("favoriteAuthor");
    favoriteBtn.textContent = "♡ Favorite";
  } else {
    const currentQuote = quote.textContent;
    const currentAuthor = author.textContent;
    localStorage.setItem("favoriteQuote", currentQuote);
    localStorage.setItem("favoriteAuthor", currentAuthor);
    favoriteBtn.textContent = "♥ Saved";
  }
});

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", function() {
  // Fixed template literal syntax error
  const textToCopy = `"${quote.textContent}" - ${author.textContent}`;
  
  navigator.clipboard.writeText(textToCopy);
  copyBtn.textContent = "✓ Copied";
  setTimeout(function() {
    copyBtn.textContent = "📋 Copy Quote";
  }, 1500);
});

const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", function() {
  // Fixed template literal syntax error
  const textToShare = `"${quote.textContent}" - ${author.textContent}`;
  
  navigator.clipboard.writeText(textToShare);
  shareBtn.textContent = "✓ Copied to clipboard";
  setTimeout(function() {
    shareBtn.textContent = "📤 Share Quote";
  }, 1500);
});
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "on");
        darkModeBtn.textContent = "☀ Light Mode";
    } else {
        localStorage.setItem("darkMode", "off");
        darkModeBtn.textContent = "☾ Dark Mode";
    }
});

if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀ Light Mode";
}
const lastQuote = localStorage.getItem("lastQuoteIndex");

if (lastQuote !== null) {
    quote.textContent = quotes[lastQuote].text;
    author.textContent = quotes[lastQuote].author;
    quoteNumber.textContent = `Quote ${Number(lastQuote) + 1} of ${quotes.length}`;
}
const clearFavoriteBtn = document.getElementById("clearFavoriteBtn");

clearFavoriteBtn.addEventListener("click", function() {
    localStorage.removeItem("favoriteQuote");
    localStorage.removeItem("favoriteAuthor");

    savedQuote.textContent = "";
    savedAuthor.textContent = "";

    favoriteBtn.textContent = "♡ Favorite";
});
  
    
  

  
