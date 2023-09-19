import { getMoviesFromLS, getseriesFromLS } from './adminUtils.js';


// Obtiene el código de película o serie almacenado en LS (de pagina principal)
const searchedCode = JSON.parse(localStorage.getItem('codigoBuscado'));


// Obtiene el array de películas y series desde LS
const movies = getMoviesFromLS();
const series = getseriesFromLS();

// Combina los arrays de películas y series en uno solo.
const allContent = [...movies, ...series];


const foundContent = allContent.find(item => item.code) ;



if (foundContent) {
  const imagenElement = document.getElementById('m-image');
  const nameElement = document.getElementById('m-name');
  const categoryElement = document.getElementById('m-category');
  const descriptionElement = document.getElementById('m-description');
  const buttonError = document.getElementById("m-btn")



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
    text: 'Tú pelicula/serie no se encontró!',
  })

}