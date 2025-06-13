export async function getQuote(limit = 1, tags = '') {
    let url = `https://api.quotable.io/quotes/random?limit=${limit}`;
    if (tags) {
        url += `&tags=${tags}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
}