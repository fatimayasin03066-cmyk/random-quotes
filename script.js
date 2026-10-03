// 1. Create an array of your favorite art quotes or poetic lines
const quotes = [
    "Art is not what you see, but what you make others see. – Edgar Degas",
    "Creativity takes courage. – Henri Matisse",
    "Every artist dips her brush in her own soul. – Henry Ward Beecher",
    "Colors speak all languages.",
    "The object isn't to make art, it's to be in that wonderful state which makes art. – Robert Henri",
    "Art is an echo of the creative mind.-Henri Matisse",
    "To practice any art, no matter how well or badly, is a way to make your soul grow. – Kurt Vonnegut"
    
];

// 2. Grab HTML elements using JavaScript
const quoteDisplay = document.getElementById("quoteDisplay");
const quoteBtn = document.getElementById("quoteBtn");

// 3. Add an event listener so something happens when the button is clicked
quoteBtn.addEventListener("click", function() {
    // Generate a random number based on how many quotes we have
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Update the paragraph text with the randomly chosen quote
    quoteDisplay.textContent = quotes[randomIndex];
});
