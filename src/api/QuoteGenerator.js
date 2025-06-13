export const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/quotes/random?limit=20');

    return await response.json();
}