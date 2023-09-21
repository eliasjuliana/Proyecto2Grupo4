import { deleteMovie, deleteSerie } from "./abm.js";

const moviesTable = document.getElementById("movies-table");
const seriesTable = document.getElementById("series-table");

const movieCards = document.getElementById("movie-cards-container");
const serieCards = document.getElementById("serie-cards-container");

const movieFormContainer = document.getElementById("movie-form-container");
const serieFormContainer = document.getElementById("serie-form-container");

// const selectMoviesSeries = document.getElementById("select-movies-series");


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
  const tbody = document.getElementById("tbody-movies");
  const tr = document.createElement("tr");

  // nombre
  const tdName = document.createElement("td");
  tdName.innerText = movie.name;
  tr.appendChild(tdName);

  // imagen
  const tdImage = document.createElement("td");
  const img = document.createElement("img");
  img.classList.add("image-table");

  img.src = movie.image;
  img.alt = movie.name;
  // img.classList.add('imagen-tabla');

  tdImage.appendChild(img);
  tr.appendChild(tdImage);

  // categoria

  const tdCategory = document.createElement("td");
  tdCategory.innerText = movie.category;
  tr.appendChild(tdCategory);

  // descripcion

  const tdDescription = document.createElement("td");
  tdDescription.innerText = movie.description;
  tdDescription.classList.add("text-start");
  tr.appendChild(tdDescription);

  // publicacion

  const tdPublication = document.createElement("td");
  tdPublication.innerText = movie.publication;
  tr.appendChild(tdPublication);

  // Destacar, editar y eliminar

  //destacar
  const tdActions = document.createElement("td");
  tdActions.classList.add('flex-wrap', 'justify-content-start')
  const btnFav = document.createElement("button");
  btnFav.type = "button";
  btnFav.classList.add("btn-fav-default");

  const favStar = document.createElement("i");
  favStar.classList.add("fa-solid", "fa-star", "star-unfav");
  btnFav.appendChild(favStar);
  tdActions.appendChild(btnFav);
  tr.appendChild(tdActions);

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

    saveFavMovieCode(movie.code);
  };

  //boton editar

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("btn", "btn-warning", "btn-sm", 'm-1');
  btnEdit.innerText = "Editar";
  btnEdit.onclick = () => {
    prepareEditionMovie(movie.code);
  };

  tdActions.appendChild(btnEdit);

  //boton eliminar

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger", "btn-sm", 'm-1');
  btnDelete.innerText = "Eliminar";
  btnDelete.onclick = () => {
    deleteMovie(movie.code);
  };

  tdActions.appendChild(btnDelete);

  // Añadir todo al tbody

  tbody.appendChild(tr);
};

export const addRowSerieTable = (serie) => {
  const tbody = document.getElementById("tbody-series");
  //row table
  const tr = document.createElement("tr");

  // nombre
  const tdName = document.createElement("td");
  tdName.innerText = serie.name;
  tr.appendChild(tdName);

  // imagen
  const tdImage = document.createElement("td");
  const img = document.createElement("img");
  img.classList.add("image-table");

  img.src = serie.image;
  img.alt = serie.name;

  tdImage.appendChild(img);
  tr.appendChild(tdImage);

  // categoria
  const tdCategory = document.createElement("td");
  tdCategory.innerText = serie.category;
  tr.appendChild(tdCategory);

  // temporada
  const tdSeasons = document.createElement("td");
  tdSeasons.innerText = serie.seasons;
  tr.appendChild(tdSeasons);

  //episodios
  const tdEpisodes = document.createElement("td");
  tdEpisodes.innerText = serie.episodes;
  tr.appendChild(tdEpisodes);

  // descripcion
  const tdDescription = document.createElement("td");
  tdDescription.innerText = serie.description;
  tdDescription.classList.add("text-start");
  tr.appendChild(tdDescription);

  // publicacion
  const tdPublication = document.createElement("td");
  tdPublication.innerText = serie.publication;
  tr.appendChild(tdPublication);

  // Destacar, editar y eliminar

  //destacar
  const tdActions = document.createElement("td");
  const btnFav = document.createElement("button");
  btnFav.type = "button";
  btnFav.classList.add("btn-fav-default");

  const favStar = document.createElement("i");
  favStar.classList.add("fa-solid", "fa-star", "star-unfav");
  btnFav.appendChild(favStar);
  tdActions.appendChild(btnFav);
  tdActions.classList.add('flex-wrap', 'justify-content-start');
  tr.appendChild(tdActions);

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

    saveFavSerieCode(serie.code);
  };

  //boton editar

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("btn", "btn-warning", "btn-sm", 'm-1');
  btnEdit.innerText = "Editar";
  btnEdit.onclick = () => {
    prepareEditionSerie(serie.code);
  };

  tdActions.appendChild(btnEdit);

  //boton eliminar

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn", "btn-danger", "btn-sm", 'm-1');
  btnDelete.innerText = "Eliminar";
  btnDelete.onclick = () => {
    deleteSerie(serie.code);
  };

  tdActions.appendChild(btnDelete);

  // Añadir todo al tbody

  tbody.appendChild(tr);
};

//CREAR CARDS PELICULAS O SERIES PARA VERSION MOBILE
export const addCardMovie = (movie) => {
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
  btnFav.classList.add("btn-fav-default", 'd-flex', 'align-item-start' );

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

    saveFavMovieCode(movie.code);
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
  btnsDiv.classList.add("col-6", "d-flex", "flex-column", "gap-3", "mb-3", 'align-items-center');

  const btnEdit = document.createElement("button");
  btnEdit.classList.add('btn', 'btn-warning', 'btn-sm', 'w-50');
  btnEdit.innerText = "Editar";
  btnEdit.onclick = () => {
    prepareEditionMovie(movie.code);
  };

  const btnDelete = document.createElement("button");
  btnDelete.classList.add('btn', 'btn-danger', 'btn-sm', 'w-50');
  btnDelete.innerText = "Eliminar";
  btnDelete.onclick = () => {
    deleteMovie(movie.code);
  };


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

    saveFavSerieCode(serie.code);
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
  btnsDiv.classList.add("col-6", "d-flex", "flex-column", "gap-3", "mb-3", 'align-items-center');

  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Editar";
  btnEdit.classList.add('btn', 'btn-warning', 'btn-sm', 'w-50');
  btnEdit.onclick = () => {
    prepareEditionSerie(serie.code);
  };

  const btnDelete = document.createElement("button");
  btnDelete.classList.add('btn', 'btn-danger', 'btn-sm', 'w-50');
  btnDelete.innerText = "Eliminar";
  btnDelete.onclick = () => {
    deleteSerie(serie.code);
  };

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

//CARGAR PELICULAS O SERIES
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

  movieFormContainer.classList.remove("d-none");
  serieFormContainer.classList.add("d-none");

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
  loadSerieTable();
  loadCardsSerie();

  movieFormContainer.classList.add("d-none");
  serieFormContainer.classList.remove("d-none");

  const screenWidth = window.innerWidth;
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

//funcion para guardar codigo de destacada

export const saveFavMovieCode = (code) => {
  // 1. Traer la lista de peliculas
  const movies = getMoviesFromLS();

  // 2. Buscar la pelicula destacada
  const favMovie = movies.find(
    (movie) => movie.code === code,
  );

  // 3. Guardar el codigo en sessionStorage
  sessionStorage.setItem("codeFavMovie", code);
  console.log(favMovie);
};

export const saveFavSerieCode = (code) => {
  // 1. Traer la lista de peliculas
  const movies = getseriesFromLS();

  // 2. Buscar la pelicula destacada
  const favSerie = movies.find(
    (serie) => serie.code === code,
  );

  // 3. Guardar el codigo en sessionStorage
  sessionStorage.setItem("codeFavSerie", code);
  console.log(favSerie);
};

//FUNCIONES PARA EDITAR

const prepareEditionMovie = (code) =>{
    //1.traer lista de peliculas
    const movies = getMoviesFromLS();

    //2. buscar pelicula
    const selectedMovie = movies.find((item)=>{
      return item.code === code;
    })

    //3. seleccionar los campos
    const fieldMovieName = document.getElementById("input-name-movie");
    const fieldMovieImage = document.getElementById("input-image-movie");
    const fieldMovieCategory = document.getElementById("category-movie");
    const fieldMovieDescription = document.getElementById("input-description-movie");
    const fieldMoviePublication = document.getElementById("publication-movie");

    //4. cargar los datos en el formulario

    fieldMovieName.value = selectedMovie.name;
    fieldMovieImage.value = selectedMovie.image;
    fieldMovieCategory.value = selectedMovie.category;
    fieldMovieDescription.value = selectedMovie.description;
    fieldMoviePublication.value = selectedMovie.publication;

    //5.guardar codigo en session storage
    sessionStorage.setItem('codeMovie', code);
};


const prepareEditionSerie = (code) =>{
    //1.traer lista de series
    const series = getseriesFromLS();

    //2. buscar pelicula
    const selectedSerie = series.find((item)=>{
      return item.code === code;
    })

    //3. seleccionar los campos
    const fieldSerieName = document.getElementById("input-name-serie");
    const fieldSerieImage = document.getElementById("input-image-serie");
    const fieldSerieCategory = document.getElementById("category-serie");
    const fieldSerieSeason = document.getElementById("input-seasons-serie");
    const fieldSerieEpisode = document.getElementById("input-episodes-serie");
    const fieldSerieDescription = document.getElementById("input-description-serie");
    const fieldSeriePublication = document.getElementById("publication-serie");

    //4. cargar los datos en el formulario

    fieldSerieName.value = selectedSerie.name;
    fieldSerieImage.value = selectedSerie.image;
    fieldSerieCategory.value = selectedSerie.category;
    fieldSerieSeason.value = selectedSerie.seasons;
    fieldSerieEpisode.value = selectedSerie.episodes;
    fieldSerieDescription.value = selectedSerie.description;
    fieldSeriePublication.value = selectedSerie.publication;

        //5.guardar codigo en session storage
        sessionStorage.setItem('codeSerie', code);
};


export const editingMovie = () =>{
  const code = sessionStorage.getItem('codeMovie');

  if(code === null) {
    return false;
  } else {
    return true;
  }
};

export const editingSerie = () =>{
  const code = sessionStorage.getItem('codeSerie');

  if(code === null) {
    return false;
  } else {
    return true;
  }
};

export const setSelectValue = (value)=> {
  const select = document.querySelector('#select-movies-series')
  select.value = value;
}


// export const setcategories = (value) =>{
//   const select = document.querySelector('.form-select'); 

//   const selectOption = document.createElement('option');
//   selectOption.value = value;
//   select.appendChild(selectOption);
// }

