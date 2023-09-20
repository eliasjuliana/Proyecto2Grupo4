import { Movie, Serie } from "./classes.js";
import { addMoviesToLS, addSeriesToLS, getMoviesFromLS, getseriesFromLS, loadMovieTable, responsiveMovies, responsiveSeries } from "./adminUtils.js";

//CREATE

export const addMovie = (name, image, category, description, publication) => {
  const newMovie = new Movie(name, image, category, description, publication);

  addMoviesToLS(newMovie);

  swal.fire({
    title: "Exito",
    text: "Pelicula agregada exitosamente",
    icon: "success",
    customClass: {
      popup: "colored-toast",
    },
  });
};

export const addSerie = (
  name,
  image,
  category,
  seasons,
  episodes,
  description,
  publication
) => {
  const newSerie = new Serie(
    name,
    image,
    category,
    seasons,
    episodes,
    description,
    publication
  );

  addSeriesToLS(newSerie);

  swal.fire({
    title: "Exito",
    text: "Serie agregada exitosamente",
    icon: "success",
    customClass: {
      popup: "colored-toast",
    },
  });
};

//UPDATE

export const editMovie = (name, image, category, description, publication) =>{
  //traer lista de peliculas y codigo
  const code = sessionStorage.getItem('codeMovie');
  const movies = getMoviesFromLS();

  //si no hay codigo
  if (!code) {
    swal.fire({
      icon: "error",
      title: "Ocurrio un error",
      text: "No se pudo encontrar la pelicula",
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 1500,
    })
    return;
  };

  const positionMovie = movies.findIndex((item)=>item.code === code);

  console.log(positionMovie);

  if (positionMovie === -1){
    swal.fire({
      icon: "error",
      title: "Ocurrio un error",
      text: "No se pudo encontrar la pelicula",
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 1500,
    })
    return;
  }

  //crear pelicula editada

  const editedMovie = new Movie(name, image, category, description, publication);

  //eliminar pelicula anterior y agregar la nueva
  movies.splice( positionMovie, 1, editedMovie);

  //guardo en LS
  localStorage.setItem("movies", JSON.stringify(movies));

  swal.fire({
    icon: "success",
    title: "Exito",
    text: "La pelicula se editó correctamente",
    customClass: {
      popup: 'colored-toast'
    },
  })

  sessionStorage.removeItem('codeMovie');

};

export const editSerie = (name,
  image,
  category,
  seasons,
  episodes,
  description,
  publication) => {
  //traer lista de series y codigo
  const code = sessionStorage.getItem('codeSerie');
  const series = getseriesFromLS();

  //si no hay codigo
  if (!code) {
    swal.fire({
      icon: "error",
      title: "Ocurrio un error",
      text: "No se pudo encontrar la serie",
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 1500,
    })
    return;
  };

  //buscar serie
  const positionSerie = series.findIndex((item)=>item.code === code);

  if(positionSerie === -1){
    swal.fire({
      icon: "error",
      title: "Ocurrio un error",
      text: "No se pudo encontrar la serie",
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 1500,
    })
    return;
  }

  //crear serie editada

  const editedSerie = new Serie (name, image,
    category,
    seasons,
    episodes,
    description,
    publication);

    //eliminar serie anterior y agregar la nueva
    series.splice(positionSerie, 1, editedSerie);

    //guardo en LS
    localStorage.setItem("series", JSON.stringify(series));

    swal.fire({
      icon: "success",
      title: "Exito",
      text: "La serie se editó correctamente",
      customClass: {
        popup: 'colored-toast'
      },
    })

    sessionStorage.removeItem('codeSerie');
};

//DELETE

export const deleteMovie = (code) =>{

  swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar la pelicula",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: 'colored-toast'
      },
    })
  .then((result) => {
      if (result.isConfirmed) {
        
      const movies = getMoviesFromLS();

      const filteredMovies = movies.filter((item) => item.code !== code);
      console.log(filteredMovies);

      localStorage.setItem('movies', JSON.stringify(filteredMovies));

      swal.fire({
        icon: "success",
        title: "Pelicula eliminada correctamente",
        customClass: {
          popup: 'colored-toast',
        showConfirmButton: false,
        timer: 1500,
      }
    });

    responsiveMovies();
    }
    })
};

export const deleteSerie = (code) => {

  swal.fire({
    title: "¿Estás seguro?",
    text: "Una vez eliminada, no podrás recuperar la serie",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
    customClass: {
      popup: 'colored-toast'
    },
  })
.then((result) => {
    if (result.isConfirmed) {
      // 1. Traer la lista de contactos
      const series = getseriesFromLS();

      // 2. Filtrar el contacto a eliminar
      const seriesUpdated = series.filter(
        (serie) => serie.code !== code,
      );

      // 3. Guardar el nuevo array en localStorage
      localStorage.setItem("series", JSON.stringify(seriesUpdated));

      // 4. Recargar la tabla
      responsiveSeries();

      // 5. Mensaje de exito
      swal.fire({
        icon: "success",
        title: "Serie eliminada correctamente",
        customClass: {
          popup: 'colored-toast'},
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
};

