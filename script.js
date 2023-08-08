/*
 let quoteApi = [];

// // fetching a single quote from array
function newQuote() {
	const quote = quoteApi[Math.floor(Math.random() * quoteApi.length)];
	console.log(quote);
 }

// fetching quotes from api
 	async function getQuote() {
 	const apiUrl = 'https://type.fit/api/quotes';
 	try{
 		const response = await fetch(apiUrl);
 		quoteApi = await response.json();
 		newQuote();
 	} catch (error) {
 		alert(error);
 	}
 }

 getQuote();

*/

//Fetching from local variable
const quoteContainer = document.getElementById('q-container');
const quoteText = document.getElementById('quoted');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');


function newQuote() {
 	const quote = quotes[Math.floor(Math.random() * quotes.length)];
 	quoteAuthor.textContent = quote.author;
 	quoteText.textContent = quote.quote;
 }

 newQuoteBtn.addEventListener('click', newQuote);

 newQuote();