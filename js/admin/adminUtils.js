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

    // BOTONES

  const tdBotones = document.createElement('td');

  const btnEdit = document.createElement('button');
  const btnDelete = document.createElement('button');

  btnEdit.type = 'button';
  btnDelete.type = 'button';
  btnEdit.classList.add('btn', 'btn-warning', 'btn-sm', 'me-2');
  btnDelete.classList.add('btn', 'btn-danger', 'btn-sm');
  btnEdit.innerText = 'Editar';
  btnDelete.innerText = 'Eliminar';

  //quede aqui, termine abm, revisar de aqui y app, junto con index

  btnEdit.onclick = () => {
    prepararEdicionContacto(contacto.codigo);
  };

  btnDelete.onclick = () => {
    eliminarContacto(contacto.codigo);
  };

  tdBotones.appendChild(btnEdit);
  tdBotones.appendChild(btnDelete);

  tr.appendChild(tdBotones);

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
