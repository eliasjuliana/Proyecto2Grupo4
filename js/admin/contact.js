import {validateName, validateDescription} from "./validators.js"
import {validatePassword} from "./login.js"
//2.seleccionar elementos del dom

const movieForm = document.getElementById('form-movies');

const fieldMovieName = document.getElementById('input-name-movie');
const fieldMovieImage = document.getElementById('input-image-movie');
const fieldMovieCategory = document.getElementById('category-movie');
const fieldMovieDescription = document.getElementById('input-description-movie');
const fieldMoviePublication = document.getElementById('publication-movie');

//3.event listeners

fieldMovieName.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateName(value, fieldMovieName);
});

fieldMovieImage.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateImage(value, fieldMovieImage);
});

fieldMovieCategory.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateCategory(value, fieldMovieCategory);
});

fieldMovieDescription.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateDescription(value, fieldMovieDescription);
});

fieldMoviePublication.addEventListener('blur', (e) => {
    const value = e.target.value;
    validatePublication(value, fieldMoviePublication);
});



//_______________________________________________



// -----------------------------------------
// 4. Event listener del form
// -----------------------------------------

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

  // Extraemos los valores
    const name = fieldMovieName.value;
    const image = fieldMovieImage.value;
    const category = fieldMovieCategory.value;
    const description = fieldMovieDescription.value;
    const publication = fieldMoviePublication.value;

  // Repetimos validacion por si no se produjo el blur
    if (validateName(name, fieldMovieName) && validateImage(image, fieldMovieImage) && 
        validateCategory(category, fieldMovieCategory) && validateDescription(description, fieldMovieDescription)
        && validatePublication(publication, fieldMoviePublication)) {
            // Entra SOLAMENTE si TODAS son validas

            addMovie(name, image, category, description, publication);

            // Recargar tabla
            loadTable();
            
            // Vaciar campos
            movieForm.reset();

            // Resetear clases
            fieldMovieName.classList.remove('is-valid', 'is-invalid');
            fieldMovieImage.classList.remove('is-valid', 'is-invalid');
            fieldMovieCategory.classList.remove('is-valid', 'is-invalid');
            fieldMovieDescription.classList.remove('is-valid', 'is-invalid');
            fieldMoviePublication.classList.remove('is-valid', 'is-invalid');
    }
});