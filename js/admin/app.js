import { addMovie, addSerie, editMovie, editSerie } from "./abm.js";
import {
  validateName,
  validateImage,
  validateCategory,
  validateSeason,
  validateEpisode,
  validateDescription,
  validatePublication,
} from "./validators.js";
<<<<<<< HEAD
import { editingMovie, editingSerie, responsiveMovies, responsiveSeries, setSelectValue } from "./adminUtils.js";
import { rechargeCategorySelect} from "../category/select.js";

//SELECCION ELEMENTOS
=======
import { editingMovie, editingSerie, responsiveMovies, responsiveSeries, setSelectValue, loadMovieTable, loadSerieTable } from "./adminUtils.js";
import { filtradoPelicula, filtradoSerie } from "./filters.js";
import {rechargeCategorySelect} from "../category/select.js"

//SELECCION ELEMENTOS
rechargeCategorySelect();
>>>>>>> 5d76fd3d510ce9b6c77719966130bdfb6b3fcb03
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
<<<<<<< HEAD
=======

const selectMovies = document.getElementById("divMovie")
const selectSeries = document.getElementById("divSeries")
>>>>>>> 5d76fd3d510ce9b6c77719966130bdfb6b3fcb03
const btnMoviesTable = document.getElementById("btn-movies-table");
const btnSeriesTable = document.getElementById("btn-series-table");
const moviesTable = document.getElementById("movies-table");
const seriesTable = document.getElementById("series-table");
const movieCards = document.getElementById("movie-cards-container");
const serieCards = document.getElementById("serie-cards-container");

//CARGAR TABLA O CARDS SEGUN TAMAÑO PANTALLA
<<<<<<< HEAD
rechargeCategorySelect();
=======
>>>>>>> 5d76fd3d510ce9b6c77719966130bdfb6b3fcb03
responsiveMovies();

window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;
  const selectedValue = selectMoviesSeries.value;
  
  // Ocultar todos los elementos por defecto
  moviesTable.classList.add('d-none');
  seriesTable.classList.add('d-none');
  movieCards.classList.add('d-none');
  serieCards.classList.add('d-none');

  if (screenWidth >= 768) {
    if (selectedValue === 'movies') {
      moviesTable.classList.remove('d-none');
    } else if (selectedValue === 'series') {
      seriesTable.classList.remove('d-none');
    }
  } else if (screenWidth < 768) {
    if (selectedValue === 'movies') {
      movieCards.classList.remove('d-none');
    } else if (selectedValue === 'series') {
      serieCards.classList.remove('d-none');
    }
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

<<<<<<< HEAD
=======
btnMoviesTable.addEventListener('click', () =>{
    seriesTable.classList.add('d-none');
    moviesTable.classList.remove('d-none');
    selectMovies.classList.remove("d-none")
    selectSeries.classList.add("d-none")
    filtradoPelicula()
})

btnSeriesTable.addEventListener('click', () =>{
    loadSerieTable();
    seriesTable.classList.remove('d-none');
    moviesTable.classList.add('d-none');
    selectMovies.classList.add("d-none")
    selectSeries.classList.remove("d-none")
    filtradoSerie()
})

>>>>>>> 5d76fd3d510ce9b6c77719966130bdfb6b3fcb03
btnMoviesTable.addEventListener("click", () => {
  responsiveMovies();
  setSelectValue('movies');
});

btnSeriesTable.addEventListener("click", () => {
  responsiveSeries();
  setSelectValue('series');
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
    if (editingMovie()){
      editMovie(name, image, category, description, publication);
    } else {
      addMovie(name, image, category, description, publication);
    };
    
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

    if(editingSerie()){
      editSerie(
        name,
        image,
        category,
        seasons,
        episodes,
        description,
        publication
      );
    } else {
      addSerie(
        name,
        image,
        category,
        seasons,
        episodes,
        description,
        publication
      );
    }

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
<<<<<<< HEAD
=======

>>>>>>> 5d76fd3d510ce9b6c77719966130bdfb6b3fcb03
