import { getMoviesFromLS, getseriesFromLS } from './adminUtils.js';


// // 
// const cardFilmElements = document.querySelectorAll('.cardFilm');

// // 
// cardFilmElements.forEach(card => {
//   card.addEventListener('click', () => {
//     // obtengo el índice de la película clicada 
//     const movieIndex = Array.from(cardFilmElements).indexOf(card);

//     // Obtiene el código de película de localStorage
//     const movieCode = allContent[movieIndex].code;

//     window.location.href = `../pages/details.html`;
//   });
// });



// // Obtiene el array de películas y series desde LS
// const movies = getMoviesFromLS();
// const series = getseriesFromLS();

// // Combina los arrays de películas y series en uno solo.
// const allContent = [...movies, ...series];


// const foundContent = allContent.find(item => item.code === movieCode) ;



// if (foundContent) {
//   const imagenElement = document.getElementById('m-image');
//   const nameElement = document.getElementById('m-name');
//   const categoryElement = document.getElementById('m-category');
//   const descriptionElement = document.getElementById('m-description');
//   const buttonError = document.getElementById("m-btn")



//   imagenElement.src = foundContent.image;
//   nameElement.innerText = foundContent.name;
//   categoryElement.innerText = foundContent.category;
//   descriptionElement.innerText = foundContent.description;

//   buttonError.addEventListener('click', () => {
//     window.location.href = '../pages/error404.html';
//   });

// } else {
//   Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Tú pelicula/serie no se encontró!',
//   })

// }


// ...

// Recorre todas las cards para dps sacar su indice
cardFilmElements.forEach(card => {
  card.addEventListener('click', () => {

    const movieIndex = Array.from(cardFilmElements).indexOf(card);

    // Busco el index que coincida con el que fue clicleado y saco el code
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

// ...
