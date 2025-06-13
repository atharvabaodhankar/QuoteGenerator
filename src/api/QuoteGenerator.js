export async function getQuote(limit = 1) {
    const response = await fetch(`https://api.quotable.io/quotes/random?limit=${limit}`);
    const data = await response.json();
    return data;
}