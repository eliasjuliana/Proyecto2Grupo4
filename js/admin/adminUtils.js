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
    
    // BOTONES para editar y eliminar
  
    // const tdButtons = document.createElement('td');
  
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
