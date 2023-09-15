const moviesTable = document.getElementById('movies-table');
const seriesTable = document.getElementById('series-table');
//TRAER PELICULAS O SERIES DEL LS
export const getMoviesFromLS = () => {
    return JSON.parse(localStorage.getItem('movies')) || [];
};

export const getseriesFromLS = () => {
  return JSON.parse(localStorage.getItem('series')) || [];
};

//AGREGAR PELICULAS O SERIES AL LS
export const addMoviesToLS = (newMovie) => {
    const movies = getMoviesFromLS();
    movies.push(newMovie);
    // guardar la pelicula
    localStorage.setItem('movies', JSON.stringify(movies));
};

export const addSeriesToLS = (newSerie) => {
  const series = getseriesFromLS();
  series.push(newSerie);
  localStorage.setItem('series', JSON.stringify(series));
};

//CREAR FILAS EN TABLA PELICULAS O TABLA SERIES
export const addRowMovieTable = (movie) => {
    const tbody = document.getElementById('tbody-movies');
    //row table
    const tr = document.createElement('tr');

    // nombre
    const tdName = document.createElement('td');
    tdName.innerText = movie.name;
    tr.appendChild(tdName);
  
    // imagen  
    const tdImage = document.createElement('td');
    const img = document.createElement('img');
    img.classList.add('image-table')

  
    img.src = movie.image;
    img.alt = movie.name;
    // img.classList.add('imagen-tabla');
  
    tdImage.appendChild(img);
    tr.appendChild(tdImage);
  
    // categoria
  
    const tdCategory = document.createElement('td');
    tdCategory.innerText = movie.category;
    tr.appendChild(tdCategory);
  
    // descripcion
  
    const tdDescription = document.createElement('td');
    tdDescription.innerText = movie.description;
    tdDescription.classList.add('text-start');
    tr.appendChild(tdDescription);
  
    // publicacion
  
    const tdPublication = document.createElement('td');
    tdPublication.innerText = movie.publication;
    tr.appendChild(tdPublication);
    
    // Destacar, editar y eliminar
  
      //destacar
    const tdActions = document.createElement('td');
    const btnFav = document.createElement('button');
    btnFav.type = 'button';
    btnFav.classList.add('btn-fav-default');

    const favStar = document.createElement('i');
    favStar.classList.add('fa-solid', 'fa-star', 'star-unfav');
    btnFav.appendChild(favStar);
    tdActions.appendChild(btnFav);
    tr.appendChild(tdActions);

    btnFav.onclick = () => {
      if(favStar.classList.contains('star-unfav')){
        favStar.classList.remove('star-unfav');
        favStar.classList.add('star-fav');
        disableFavBtns();
      } else if(favStar.classList.contains('star-fav')){
        favStar.classList.add('star-unfav');
        favStar.classList.remove('star-fav');
        resetFavBtns();
      };

      const favMovieCode = movie.code;
      return favMovieCode;
      };

    // Añadir todo al tbody
  
    tbody.appendChild(tr);
};

export const addRowSerieTable = (serie) => {
    const tbody = document.getElementById('tbody-series');
    //row table
    const tr = document.createElement('tr');

    // nombre
    const tdName = document.createElement('td');
    tdName.innerText = serie.name;
    tr.appendChild(tdName);
  
    // imagen  
    const tdImage = document.createElement('td');
    const img = document.createElement('img');
    img.classList.add('image-table')

    img.src = serie.image;
    img.alt = serie.name;
  
    tdImage.appendChild(img);
    tr.appendChild(tdImage);
  
    // categoria
    const tdCategory = document.createElement('td');
    tdCategory.innerText = serie.category;
    tr.appendChild(tdCategory);

    // temporada
    const tdSeasons = document.createElement('td');
    tdSeasons.innerText = serie.seasons;
    tr.appendChild(tdSeasons);

    //episodios
    const tdEpisodes = document.createElement('td');
    tdEpisodes.innerText = serie.episodes;
    tr.appendChild(tdEpisodes);
  
    // descripcion
    const tdDescription = document.createElement('td');
    tdDescription.innerText = serie.description;
    tdDescription.classList.add('text-start');
    tr.appendChild(tdDescription);
  
    // publicacion
    const tdPublication = document.createElement('td');
    tdPublication.innerText = serie.publication;
    tr.appendChild(tdPublication);
    
    // Destacar, editar y eliminar
  
      //destacar
    const tdActions = document.createElement('td');
    const btnFav = document.createElement('button');
    btnFav.type = 'button';
    btnFav.classList.add('btn-fav-default');

    const favStar = document.createElement('i');
    favStar.classList.add('fa-solid', 'fa-star', 'star-unfav');
    btnFav.appendChild(favStar);
    tdActions.appendChild(btnFav);
    tr.appendChild(tdActions);

    btnFav.onclick = () => {
      if(favStar.classList.contains('star-unfav')){
        favStar.classList.remove('star-unfav');
        favStar.classList.add('star-fav');
        disableFavBtns();
      } else if(favStar.classList.contains('star-fav')){
        favStar.classList.add('star-unfav');
        favStar.classList.remove('star-fav');
        resetFavBtns();
      };

      const favSerieCode = serie.code;
      return favSerieCode;
      };
      
    // Añadir todo al tbody
  
    tbody.appendChild(tr);
};

//CARGAR TABLA PELICULA O TABLA SERIES
export const loadMovieTable = () => {
    const movies = getMoviesFromLS();
  
    // Vaciar tabla
    const tbody = document.getElementById('tbody-movies');
    tbody.innerHTML = '';

    seriesTable.classList.add('d-none');
    moviesTable.classList.remove('d-none');
  
    // Cargar tabla
    movies.forEach((movie, index) => {
      addRowMovieTable(movie, index);
    });
};

export const loadSerieTable = () => {
  const series = getseriesFromLS();

  // Vaciar tabla
  const tbody = document.getElementById('tbody-series');
  tbody.innerHTML = '';

  seriesTable.classList.remove('d-none');
  moviesTable.classList.add('d-none');

  // Cargar tabla
  series.forEach((serie, index) => {
    addRowSerieTable(serie, index);
  });
};

//responsive mobile
export const addCardMovie = (movie) => {
  const movieCardsContainer = document.getElementById('movie-cards-container');

  const cardBody = document.createElement('div');
  cardBody.classList.add('container', 'row', 'bg-secondary');

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('col-12', 'd-flex', 'justify-content-start', 'gap-4', 'mt-3');

  const favStarCards = document.createElement('i');
  favStarCards.classList.add('fa-solid', 'fa-star', 'pt-4');
  cardTitle.appendChild(favStarCards);

  const cardTitleDiv = document.createElement('div');
  cardTitleDiv.classList.add('d-flex', 'flex-column');

  const movieTitleCard = document.createElement('h2');
  movieTitleCard.innerText = movie.name;
  const movieCategoryCard = document.createElement('h3');
  movieCategoryCard.innerText= movie.category;
  cardTitleDiv.appendChild(movieTitleCard);
  cardTitleDiv.appendChild(movieCategoryCard);
  
  cardTitle.appendChild(favStarCards);
  cardTitle.appendChild(cardTitleDiv);

  const imgCardDiv = document.createElement('div');
  imgCardDiv.classList.add('col-6');

  const imgCard = document.createElement('img');
  imgCard.src = movie.image;
  imgCard.alt = movie.name;
  imgCardDiv.appendChild(imgCard);

  const btnsDiv = document.createElement('div');
  btnsDiv.classList.add('col-6', 'd-flex', 'flex-column', 'gap-3', 'mb-3');

  const btnEdit = document.createElement('button');
  const btnDelete = document.createElement('button');

  btnsDiv.appendChild(btnEdit);
  btnsDiv.appendChild(btnDelete);

  const descriptionCard = document.createElement('p');
  descriptionCard.innerText = movie.description;

  const publicationCard = document.createElement('p');
  publicationCard.innerText = (`${movie.publication} esta publicada`);
  
  
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(imgCardDiv);
  cardBody.appendChild(btnsDiv);
  cardBody.appendChild(descriptionCard);
  cardBody.appendChild(publicationCard);

  movieCardsContainer.appendChild(cardBody);
}

export const loadCardsMovie = () => {
  const movies = getMoviesFromLS();
  console.log(movies);
  
  // Vaciar container de cards
  const movieCardsContainer = document.getElementById('movie-cards-container');
  movieCardsContainer.innerHTML = '';

  // seriesTable.classList.add('d-none');
  // moviesTable.classList.remove('d-none');

  // Cargar tabla
    movies.forEach((movie, index) => {
    addCardMovie(movie, index);
  });
}





































//DESTACAR
export const disableFavBtns = () =>{
    const buttonsFav = document.querySelectorAll('.btn-fav-default');
    // console.log(buttonsFav);
    buttonsFav.forEach((button)=>{
      // console.log(button.innerHTML);
        if(button.innerHTML.includes('star-unfav')){
          button.disabled = true;
        }
    })
};

export const resetFavBtns = () => {
  const buttonsFav = document.querySelectorAll('.btn-fav-default');
  // console.log(buttonsFav);
  buttonsFav.forEach((button)=>{
    // console.log(button.innerHTML);
      button.disabled = false;
      }
);}
