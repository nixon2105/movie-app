const API_KEY = '86bf43e';

async function getMovie() {
  const url = `https://www.omdbapi.com/?s=marvel&page=2&apikey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  const arr = data.Search;
  arr.forEach((element) => {
    console.log(element.Year);
  });
  // return data;
}
