import { Movie, Serie } from "./classes.js";
import { addMoviesToLS, addSeriesToLS, getMoviesFromLS, getseriesFromLS } from "./adminUtils.js";

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

export const deleteMovie = () =>{

};

export const deleteSerie = () => {

};

