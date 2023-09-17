import { getMoviesFromLS, getSeriesFromLS } from '../admin/adminUtils.js';

// Obtiene el código de película o serie almacenado en LS
const searchedCode = JSON.parse(localStorage.getItem('codigoBuscado'));

// Obtiene el array de películas y series desde LS
const movies = getMoviesFromLS();
const series = getSeriesFromLS();

// Combina los arrays de películas y series en uno solo.
const allContent = [...movies, ...series];

const foundContent = allContent.find(item => item.code === searchedCode);


if (foundContent) {
    document.getElementById('nombre').innerText = foundContent.name;
    document.getElementById('imagen').src = foundContent.image;
    document.getElementById('categoria').innerText = foundContent.category;
    document.getElementById('descripcion').innerText = foundContent.description;
    document.getElementById('publicacion').innerText = foundContent.publication;

} 