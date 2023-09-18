import { removeMovie, removeSerie } from "./abm";
const moviesTable = document.getElementById("movies-table");
const seriesTable = document.getElementById("series-table");

const movieCards = document.getElementById("movie-cards-container");
const serieCards = document.getElementById("serie-cards-container");

//TRAER PELICULAS O SERIES DEL LS
export const getMoviesFromLS = () => {
  return JSON.parse(localStorage.getItem("movies")) || [];
};

export const getseriesFromLS = () => {
  return JSON.parse(localStorage.getItem("series")) || [];
};

//AGREGAR PELICULAS O SERIES AL LS
export const addMoviesToLS = (newMovie) => {
  const movies = getMoviesFromLS();
  movies.push(newMovie);
  // guardar la pelicula
  localStorage.setItem("movies", JSON.stringify(movies));
};

export const addSeriesToLS = (newSerie) => {
  const series = getseriesFromLS();
  series.push(newSerie);
  localStorage.setItem("series", JSON.stringify(series));
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
  
      //destacar pelicula
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

    // BOTONES PELICULAS

  const tdButtons = document.createElement('td');

  const btnEditMovie = document.createElement('button');
  const btnDeleteMovie = document.createElement('button');

  btnEditMovie.type = 'button';
  btnDeleteMovie.type = 'button';
  btnEditMovie.classList.add('btn', 'btn-warning', 'btn-sm', 'me-2');
  btnDeleteMovie.classList.add('btn', 'btn-danger', 'btn-sm');
  btnEditMovie.innerText = 'Editar';
  btnDeleteMovie.innerText = 'Eliminar';

  btnEditMovie.onclick = () => {
    prepareEditionMovie(movie.code);
  };

  btnDeleteMovie.onclick = () => {
    removeMovie(movie.code);
  };

  tdButtons.appendChild(btnEditMovie);
  tdButtons.appendChild(btnDeleteMovie);

  tr.appendChild(tdButtons);

  // Añadir todo al tbody

  tbody.appendChild(tr);
};

      //Editar película
      const prepareEditionMovie = (movies) => {
        // 1. Traer lista
        const movies = getMoviesFromLS();
      
        // 2. Buscar el contacto a editar
        // const contactoSeleccionado = contactos.find(item => {
        //   return item.codigo === codigo;
        // });
        const selectMovies = movies.find((item) => item.movies === movies);
      
        // 3. Seleccionar los elementos (campos)
        const fieldMovieName = document.getElementById('input-name-movie');
        const fieldMovieImage = document.getElementById('input-image-movie');
        const fieldMovieCategory = document.getElementById('input-category-movie');
        const fieldMovieDescription = document.getElementById('input-description-movie');
        const fieldMoviePublication = document.getElementById('input-publication-movie');
      
        // 4. Cargar los datos en el formulario
        fieldMovieName.value = selectMovies.name;
        fieldMovieImage.value = selectMovies.image;
        fieldMovieCategory.value = selectMovies.category;
        fieldMovieDescription.value = selectMovies.description;
        fieldMoviePublication.value = selectMovies.publication;
      
        // 5. Guardar codigo
        sessionStorage.setItem('movie.code', movies);
      };
      
      export function editingMovie() {
  const movieEditing = sessionStorage.getItem('movie.code');

  if (movieEditing === null) {
    return false;
  } else {
    return true;
  }
}

// tabla series
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
  
  
      //destacar serie
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

// BOTONES SERIES

  const tdButtonsSeries = document.createElement('td');

  const btnEditSerie = document.createElement('button');
  const btnDeleteSerie = document.createElement('button');

  btnEditSerie.type = 'button';
  btnDeleteSerie.type = 'button';
  btnEditSerie.classList.add('btn', 'btn-warning', 'btn-sm', 'me-2');
  btnDeleteSerie.classList.add('btn', 'btn-danger', 'btn-sm');
  btnEditSerie.innerText = 'Editar';
  btnDeleteSerie.innerText = 'Eliminar';

  btnEditSerie.onclick = () => {
    prepareEditionSerie(serie.code);
  };

  btnDeleteSerie.onclick = () => {
    removeSerie(serie.code);
  };

  tdButtonsSeries.appendChild(btnEditSerie);
  tdButtonsSeries.appendChild(btnDeleteSerie);

  tr.appendChild(tdButtonsSeries);
  tbody.appendChild(tr);
};

//Editar serie
      const prepareEditionSerie = (series) => {
        // 1. Traer lista
        const series = getseriesFromLS();
      
        const selectSerie = series.find((item) => item.codeSerie === series);
      
        // 3. Seleccionar los elementos (campos)
        const fieldSerieName = document.getElementById('input-name-serie');
        const fieldMovieImage = document.getElementById('input-image-serie');
        const fieldMovieCategory= document.getElementById('input-category-serie');
        const fieldMovieDescription = document.getElementById('input-description-serie');
        const fieldMoviePublication = document.getElementById('input-publication-serie');
      
        // 4. Cargar los datos en el formulario
        fieldSerieName.value = selectSerie.name;
        fieldMovieImage.value = selectSerie.image;
        fieldMovieCategory.value = selectSerie.category;
        fieldMovieDescription.value = selectSerie.description;
        fieldMoviePublication.value = selectSerie.publication;
      
        // 5. Guardar codigo
        sessionStorage.setItem('serie.code', series);
      };
      
      export const editingSerie = () => {
        const Serie = sessionStorage.getItem('serie.code');
      
        if (Serie === null) {
          return false;
        } else {
          return true;
        }
      
      //Eliminar
};

//CARGAR TABLA PELICULA O TABLA SERIES
export const loadMovieTable = () => {
  const movies = getMoviesFromLS();

  // Vaciar tabla
  const tbody = document.getElementById("tbody-movies");
  tbody.innerHTML = "";

  seriesTable.classList.add("d-none");
  moviesTable.classList.remove("d-none");

  // Cargar tabla
  movies.forEach((movie, index) => {
    addRowMovieTable(movie, index);
  });
};

export const loadSerieTable = () => {
  const series = getseriesFromLS();

  // Vaciar tabla
  const tbody = document.getElementById("tbody-series");
  tbody.innerHTML = "";

  seriesTable.classList.remove("d-none");
  moviesTable.classList.add("d-none");

  // Cargar tabla
  series.forEach((serie, index) => {
    addRowSerieTable(serie, index);
  });
};

//responsive mobile
export const addCardMovie = (movie) => {
  // console.log(movie);
  const movieCardsContainer = document.getElementById("movie-cards-container");

  const cardBody = document.createElement("div");
  cardBody.classList.add("container", "row", "bg-dark", "m-0");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add(
    "col-12",
    "d-flex",
    "justify-content-start",
    "gap-4",
    "mt-3"
  );

  //boton estrella para destacar
  const btnFav = document.createElement("button");
  btnFav.type = "button";
  btnFav.classList.add("btn-fav-default");

  const favStar = document.createElement("i");
  favStar.classList.add("fa-solid", "fa-star", "pt-4", "star-unfav");
  btnFav.appendChild(favStar);

  btnFav.onclick = () => {
    if (favStar.classList.contains("star-unfav")) {
      favStar.classList.remove("star-unfav");
      favStar.classList.add("star-fav");
      disableFavBtns();
    } else if (favStar.classList.contains("star-fav")) {
      favStar.classList.add("star-unfav");
      favStar.classList.remove("star-fav");
      resetFavBtns();
    }

    const favMovieCode = movie.code;
    return favMovieCode;
  };

  const cardTitleDiv = document.createElement("div");
  cardTitleDiv.classList.add("d-flex", "flex-column", "text-light");

  const movieTitleCard = document.createElement("h5");
  movieTitleCard.innerText = movie.name;

  const movieCategoryCard = document.createElement("p");
  movieCategoryCard.innerText = movie.category;
  cardTitleDiv.appendChild(movieTitleCard);
  cardTitleDiv.appendChild(movieCategoryCard);

  cardTitle.appendChild(btnFav);
  cardTitle.appendChild(cardTitleDiv);

  //imagen
  const imgCardDiv = document.createElement("div");
  imgCardDiv.classList.add("col-6");

  const imgCard = document.createElement("img");
  imgCard.classList.add("img-fluid");
  imgCard.src = movie.image;
  imgCard.alt = movie.name;
  imgCardDiv.appendChild(imgCard);

  //botones
  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add("col-6", "d-flex", "flex-column", "gap-3", "mb-3");

  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Editar";
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Eliminar";

  btnsDiv.appendChild(btnEdit);
  btnsDiv.appendChild(btnDelete);

  //descripcion
  const descriptionCard = document.createElement("p");
  descriptionCard.classList.add("text-light");
  descriptionCard.innerText = movie.description;

  const publicationCard = document.createElement("p");
  publicationCard.classList.add("text-light");
  publicationCard.innerText = `${movie.publication} está disponible en Prime`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(imgCardDiv);
  cardBody.appendChild(btnsDiv);
  cardBody.appendChild(descriptionCard);
  cardBody.appendChild(publicationCard);

  movieCardsContainer.appendChild(cardBody);
};

export const addCardSerie = (serie) => {
  console.log(serie);
  const serieCardsContainer = document.getElementById("serie-cards-container");

  const cardBody = document.createElement("div");
  cardBody.classList.add("container", "row", "bg-dark", "m-0");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add(
    "col-12",
    "d-flex",
    "justify-content-start",
    "gap-4",
    "mt-3"
  );

  //boton estrella para destacar
  const btnFav = document.createElement("button");
  btnFav.type = "button";
  btnFav.classList.add("btn-fav-default");

  const favStar = document.createElement("i");
  favStar.classList.add("fa-solid", "fa-star", "pt-4", "star-unfav");
  btnFav.appendChild(favStar);

  btnFav.onclick = () => {
    if (favStar.classList.contains("star-unfav")) {
      favStar.classList.remove("star-unfav");
      favStar.classList.add("star-fav");
      disableFavBtns();
    } else if (favStar.classList.contains("star-fav")) {
      favStar.classList.add("star-unfav");
      favStar.classList.remove("star-fav");
      resetFavBtns();
    }

    const favSerieCode = movie.code;
    return favSerieCode;
  };

  const cardTitleDiv = document.createElement("div");
  cardTitleDiv.classList.add("d-flex", "flex-column", "text-light");

  const serieTitleCard = document.createElement("h5");
  serieTitleCard.innerText = serie.name;
  const serieCategoryCard = document.createElement("p");
  serieCategoryCard.innerText = serie.category;
  cardTitleDiv.appendChild(serieTitleCard);
  cardTitleDiv.appendChild(serieCategoryCard);

  cardTitle.appendChild(btnFav);
  cardTitle.appendChild(cardTitleDiv);

  //imagen
  const imgCardDiv = document.createElement("div");
  imgCardDiv.classList.add("col-6");

  const imgCard = document.createElement("img");
  imgCard.classList.add("img-fluid");
  imgCard.src = serie.image;
  imgCard.alt = serie.name;
  imgCardDiv.appendChild(imgCard);

  //botones
  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add("col-6", "d-flex", "flex-column", "gap-3", "mb-3");

  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Editar";
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Eliminar";

  btnsDiv.appendChild(btnEdit);
  btnsDiv.appendChild(btnDelete);

  //descripcion
  const descriptionCard = document.createElement("p");
  descriptionCard.classList.add("text-light");
  descriptionCard.innerText = serie.description;

  const publicationCard = document.createElement("p");
  publicationCard.classList.add("text-light");
  publicationCard.innerText = `${serie.publication} está disponible en Prime`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(imgCardDiv);
  cardBody.appendChild(btnsDiv);
  cardBody.appendChild(descriptionCard);
  cardBody.appendChild(publicationCard);

  serieCardsContainer.appendChild(cardBody);
};

export const loadCardsMovie = () => {
  const movies = getMoviesFromLS();

  // Vaciar container de cards
  const movieCardsContainer = document.getElementById("movie-cards-container");
  const serieCardsContainer = document.getElementById("serie-cards-container");
  movieCardsContainer.innerHTML = "";
  serieCardsContainer.innerHTML = "";

  // Cargar tabla
  movies.forEach((movie, index) => {
    addCardMovie(movie, index);
  });
};

export const loadCardsSerie = () => {
  const series = getseriesFromLS();

  // Vaciar container de cards
  const movieCardsContainer = document.getElementById("movie-cards-container");
  const serieCardsContainer = document.getElementById("serie-cards-container");
  movieCardsContainer.innerHTML = "";
  serieCardsContainer.innerHTML = "";

  // seriesTable.classList.add('d-none');
  // moviesTable.classList.remove('d-none');

  // Cargar tabla
  series.forEach((serie, index) => {
    addCardSerie(serie, index);
  });
};

//funcion para cargar inicialmente tabla o cards segun el ancho de pantalla

export const responsiveMovies = () => {
  loadMovieTable();
  loadCardsMovie();

  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    moviesTable.classList.remove("d-none");
    movieCards.classList.add("d-none");
  } else {
    moviesTable.classList.add("d-none");
    movieCards.classList.remove("d-none");
  }
};

export const responsiveSeries = () => {
  const screenWidth = window.innerWidth;
  loadSerieTable();
  loadCardsSerie();

  if (screenWidth >= 768) {
    seriesTable.classList.remove("d-none");
    serieCards.classList.add("d-none");
  } else {
    seriesTable.classList.add("d-none");
    serieCards.classList.remove("d-none");
  }
};

//DESTACAR
export const disableFavBtns = () => {
  const buttonsFav = document.querySelectorAll(".btn-fav-default");
  // console.log(buttonsFav);
  buttonsFav.forEach((button) => {
    // console.log(button.innerHTML);
    if (button.innerHTML.includes("star-unfav")) {
      button.disabled = true;
    }
  });
};

export const resetFavBtns = () => {
  const buttonsFav = document.querySelectorAll(".btn-fav-default");
  // console.log(buttonsFav);
  buttonsFav.forEach((button) => {
    // console.log(button.innerHTML);
    button.disabled = false;
  });
};
