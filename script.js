let btn = document.querySelector(".btn");
let quoteText = document.querySelector(".quoteText");
let author = document.querySelector("p");
let URL = "https://dummyjson.com/quotes/random";

// Initial fetch to display a quote when the page loads
(async () => {
  try {
    let res = await fetch(URL);
    let data = await res.json();
    quoteText.textContent = `"${data.quote}"`;
    author.textContent = `-${data.author}`;
  } catch (error) {
    console.log(error);
  }
})();

btn.addEventListener("click", async () => {
  try {
    let res = await fetch(URL);
    let data = await res.json();
    quoteText.textContent = `"${data.quote}"`;
    author.textContent = `-${data.author}`;
  } catch (error) {
    console.log(error);
  }
});
