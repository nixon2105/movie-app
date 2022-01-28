const cards = document.querySelector('.cards');

const createTemplate = (movieData) => {
  return `
            <div class="card-item">
              <div class="card__name">${movieData.Title}</div>
              <div class="card__poster">
                <img src="${movieData.Poster}" alt="" />
              </div>
              <div class="card__year">${movieData.Year}</div>
              <div class="card__rating">${movieData.Type}</div>
            </div>
  `;
};

//https://api.themoviedb.org/3/movie/550?api_key=11a9e127bc9b30c53ac934c29e209fea

const API_KEY = '86bf43e';
const getMovie = async () => {
  const url = `https://www.omdbapi.com/?s=marvel&apikey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  const movieData = data.Search;
  console.log(movieData);
  movieData.map((element) => {
    cards.innerHTML += createTemplate(element);
  });
};

getMovie();

// const movieData = getMovie().then((movie) => movie.Search);
