import { getMoviesFromLS, getseriesFromLS } from './adminUtils.js';

// Obtiene el array de películas y series desde LS
const movies = getMoviesFromLS();
const series = getseriesFromLS();

// Combina los arrays de películas y series en uno solo.
const allContent = [...movies, ...series];

const cardFilmElements = document.querySelectorAll('.cardFilm');

// Recorre todas las cards para dps sacar su indice
cardFilmElements.forEach(card => {
  card.addEventListener('click', () => {

    const movieIndex = Array.from(cardFilmElements).indexOf(card);

    // Busco el index que coincida con el que fue clicleado y saco su code
    const movieCode = allContent[movieIndex].code;

    const foundContent = allContent.find(item => item.code === movieCode);

    if (foundContent) {
      const imagenElement = document.getElementById('m-image');
      const nameElement = document.getElementById('m-name');
      const categoryElement = document.getElementById('m-category');
      const descriptionElement = document.getElementById('m-description');
      const buttonError = document.getElementById("m-btn");

      imagenElement.src = foundContent.image;
      nameElement.innerText = foundContent.name;
      categoryElement.innerText = foundContent.category;
      descriptionElement.innerText = foundContent.description;

      buttonError.addEventListener('click', () => {
        window.location.href = '../pages/error404.html';
      });

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tu película/serie no se encontró!',
      });
    }
    window.location.href = `../pages/details.html`;
  });
});