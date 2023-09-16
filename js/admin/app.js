import { addMovie, addSerie } from "./abm.js";
import {
  validateName,
  validateImage,
  validateCategory,
  validateSeason,
  validateEpisode,
  validateDescription,
  validatePublication,
} from "./validators.js";
import { responsiveMovies, responsiveSeries } from "./adminUtils.js";

//SELECCION ELEMENTOS
//select para cargar peliculas o series
const selectMoviesSeries = document.getElementById("select-movies-series");

//containers de los formularios
const movieFormContainer = document.getElementById("movie-form-container");
const serieFormContainer = document.getElementById("serie-form-container");

//formularios con sus inputs
const movieForm = document.getElementById("form-movies");
const fieldMovieName = document.getElementById("input-name-movie");
const fieldMovieImage = document.getElementById("input-image-movie");
const fieldMovieCategory = document.getElementById("category-movie");
const fieldMovieDescription = document.getElementById(
  "input-description-movie"
);
const fieldMoviePublication = document.getElementById("publication-movie");

const serieForm = document.getElementById("form-series");
const fieldSerieName = document.getElementById("input-name-serie");
const fieldSerieImage = document.getElementById("input-image-serie");
const fieldSerieCategory = document.getElementById("category-serie");
const fieldSerieSeason = document.getElementById("input-seasons-serie");
const fieldSerieEpisode = document.getElementById("input-episodes-serie");
const fieldSerieDescription = document.getElementById(
  "input-description-serie"
);
const fieldSeriePublication = document.getElementById("publication-serie");

//botones para mostrar tabla peliculas o tabla series
const btnMoviesTable = document.getElementById("btn-movies-table");
const btnSeriesTable = document.getElementById("btn-series-table");
const moviesTable = document.getElementById("movies-table");
const seriesTable = document.getElementById("series-table");
const movieCards = document.getElementById("movie-cards-container");
const serieCards = document.getElementById("serie-cards-container");

//CARGAR TABLA O CARDS SEGUN TAMAÑO PANTALLA
responsiveMovies();

window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    moviesTable.classList.remove("d-none");
    movieCards.classList.add("d-none");
    seriesTable.classList.remove("d-none");
    serieCards.classList.add("d-none");
  } else {
    moviesTable.classList.add("d-none");
    movieCards.classList.remove("d-none");
    seriesTable.classList.add("d-none");
    serieCards.classList.remove("d-none");
  }
});

//PARA CARGAR FORMULARIO SEGUN QUE SE ELIGE EN EL SELECT PELICULAS/SERIES
selectMoviesSeries.addEventListener("click", () => {
  const selectedOption = selectMoviesSeries.value;
  if (selectedOption === "movies") {
    movieFormContainer.classList.remove("d-none");
    serieFormContainer.classList.add("d-none");
    responsiveMovies();
  } else if (selectedOption === "series") {
    serieFormContainer.classList.remove("d-none");
    movieFormContainer.classList.add("d-none");
    responsiveSeries();
  }
});

//PARA MOSTRAR TABLA DE PELICULAS O DE SERIES

btnMoviesTable.addEventListener("click", () => {
  responsiveMovies();
});

btnSeriesTable.addEventListener("click", () => {
  responsiveSeries();
});

//PARA CREAR FILAS DE LA TABLA PELICULAS

//event listeners para validar

fieldMovieName.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateName(value, fieldMovieName);
});

fieldMovieImage.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateImage(value, fieldMovieImage);
});

fieldMovieCategory.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateCategory(value, fieldMovieCategory);
});

fieldMovieDescription.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateDescription(value, fieldMovieDescription);
});

fieldMoviePublication.addEventListener("blur", (e) => {
  const value = e.target.value;
  validatePublication(value, fieldMoviePublication);
});

//Event listener del form Movies

movieForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Extraemos los valores
  const name = fieldMovieName.value;
  const image = fieldMovieImage.value;
  const category = fieldMovieCategory.value;
  const description = fieldMovieDescription.value;
  const publication = fieldMoviePublication.value;

  // Repetimos validacion por si no se produjo el blur
  if (
    validateName(name, fieldMovieName) &&
    validateImage(image, fieldMovieImage) &&
    validateCategory(category, fieldMovieCategory) &&
    validateDescription(description, fieldMovieDescription) &&
    validatePublication(publication, fieldMoviePublication)
  ) {
    // Entra SOLAMENTE si TODAS son validas

    addMovie(name, image, category, description, publication);

    responsiveMovies();
  }
  // Vaciar campos
  movieForm.reset();

  // Resetear clases
  fieldMovieName.classList.remove("is-valid", "is-invalid");
  fieldMovieImage.classList.remove("is-valid", "is-invalid");
  fieldMovieCategory.classList.remove("is-valid", "is-invalid");
  fieldMovieDescription.classList.remove("is-valid", "is-invalid");
  fieldMoviePublication.classList.remove("is-valid", "is-invalid");
});

//PARA CREAR FILAS DE LA TABLA SERIES

//event listeners para validar

fieldSerieName.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateName(value, fieldSerieName);
});

fieldSerieImage.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateImage(value, fieldSerieImage);
});

fieldSerieCategory.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateCategory(value, fieldSerieCategory);
});

fieldSerieSeason.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateCategory(value, fieldSerieSeason);
});

fieldSerieEpisode.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateCategory(value, fieldSerieEpisode);
});

fieldSerieDescription.addEventListener("blur", (e) => {
  const value = e.target.value;
  validateDescription(value, fieldSerieDescription);
});

fieldSeriePublication.addEventListener("blur", (e) => {
  const value = e.target.value;
  validatePublication(value, fieldSeriePublication);
});

//Event listener del form Series

serieForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Extraemos los valores
  const name = fieldSerieName.value;
  const image = fieldSerieImage.value;
  const category = fieldSerieCategory.value;
  const seasons = fieldSerieSeason.value;
  const episodes = fieldSerieEpisode.value;
  const description = fieldSerieDescription.value;
  const publication = fieldSeriePublication.value;

  // Repetimos validacion por si no se produjo el blur
  if (
    validateName(name, fieldSerieName) &&
    validateImage(image, fieldSerieImage) &&
    validateCategory(category, fieldSerieCategory) &&
    validateSeason(seasons, fieldSerieSeason) &&
    validateEpisode(episodes, fieldSerieEpisode) &&
    validateDescription(description, fieldSerieDescription) &&
    validatePublication(publication, fieldSeriePublication)
  ) {
    // Entra SOLAMENTE si TODAS son validas

    addSerie(
      name,
      image,
      category,
      seasons,
      episodes,
      description,
      publication
    );
    // Recargar tabla
    responsiveSeries();

    // Vaciar campos
    serieForm.reset();

    // Resetear clases
    fieldSerieName.classList.remove("is-valid", "is-invalid");
    fieldSerieImage.classList.remove("is-valid", "is-invalid");
    fieldSerieCategory.classList.remove("is-valid", "is-invalid");
    fieldSerieSeason.classList.remove("is-valid", "is-invalid");
    fieldSerieEpisode.classList.remove("is-valid", "is-invalid");
    fieldSerieDescription.classList.remove("is-valid", "is-invalid");
    fieldSeriePublication.classList.remove("is-valid", "is-invalid");
  }
});
