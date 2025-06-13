export const getQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');

    return await response.json();
}