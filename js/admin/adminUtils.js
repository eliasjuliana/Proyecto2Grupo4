//Traer peliculas del LS
export const getMoviesFromLS = () => {
    //   Traer peliculas desde LS, PERO, si es null, que tome un valor por defecto ([])
    return JSON.parse(localStorage.getItem('movies')) || [];
};

export const addMoviesToLS = (newMovie) => {
    const movies = getMoviesFromLS();
    movies.push(newMovie);
    // guardar la pelicula
    localStorage.setItem('movies', JSON.stringify(movies));
};

//una vez agregada la pelicula, crear una fila en la tabla con toda su info
export const addRowTable = (movie) => {
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
  
    // const btnEdit = document.createElement('button');
    // const btnRemove = document.createElement('button');
  
    // btnEditar.type = 'button';
    // btnEliminar.type = 'button';
    // btnEditar.classList.add('btn', 'btn-warning', 'btn-sm', 'me-2');
    // btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
    // btnEditar.innerText = 'Editar';
    // btnEliminar.innerText = 'Eliminar';
  
    // btnEditar.onclick = () => {
    //   console.log(`Editar`);
    // };
  
    // btnEliminar.onclick = () => {
    //   console.log(`Eliminar`);
    // };
  
    // tdBotones.appendChild(btnEditar);
    // tdBotones.appendChild(btnEliminar);
  
    // tr.appendChild(tdBotones);
  
    // Añadir todo al tbody
  
    tbody.appendChild(tr);
  };


export const loadTable = () => {
    const movies = getMoviesFromLS();
  
    // Vaciar tabla
    const tbody = document.getElementById('tbody-movies');
    tbody.innerHTML = '';
  
    // Cargar tabla
    movies.forEach((movie, index) => {
      addRowTable(movie, index);
    });
};


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
