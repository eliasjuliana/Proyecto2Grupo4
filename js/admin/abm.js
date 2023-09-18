import { Movie, Serie } from './classes.js';
import { addMoviesToLS, addSeriesToLS, getMoviesFromLS, getseriesFromLS, loadMovieTable, loadSerieTable } from './adminUtils.js';

export const addMovie = (name, image, category, description, publication) => {
    const newMovie = new Movie(name, image, category, description, publication);
    
    addMoviesToLS(newMovie);

    // swal.fire({
    //     title: 'Exito',
    //     text: 'Pelicula agregado exitosamente',
    //     icon: 'success',
    // });
};

export const addSerie = (name, image, category, seasons, episodes, description, publication) => {
    const newSerie = new Serie(name, image, category, seasons, episodes, description, publication);
    
    addSeriesToLS(newSerie);

    // swal.fire({
    //     title: 'Exito',
    //     text: 'Pelicula agregado exitosamente',
    //     icon: 'success',
    // });
};

//Editar película

export const editMovie = (name, image, category, description, publication) => {
    // 1. Traer lista de peliculas y el codigo del contacto a editar
    const codeMovie = sessionStorage.getItem('movie.code');
    const Movie = getMoviesFromLS();
  
    // # Si no hay codigo (es null)
    if (!codeMovie) {
      swal.fire({
        title: 'Lo sentimos',
        text: 'No se encontró ninguna película',
        icon: 'error',
      });
      return;
    }
  
    // 2. Buscar posicion de la pelicula
    const positionMovie = Movie.findIndex(
      (item) => item.codeMovie === codeMovie
    );
  
    // # Si no se encontró la película
    if (positionMovie === -1) {
      swal.fire({
        title: 'Lo sentimos',
        text: 'No se encontró ninguna película',
        icon: 'error',
      });
      return;
    }
  
    // 3. Crear la pelicula editada
    const editedMovie = new Movie(name, image, category, description, publication);
  
    // 4. Eliminar dato  y agregar nuevo
    Movie.splice(positionMovie, 1, editedMovie);
  
    // 5. Guardar en LS
    localStorage.setItem('Movie', JSON.stringify(Movie));
  
    // 6. Mostrar mensaje de exito
    swal.fire({
      title: '¡Listo!',
      text: 'La película se modificó con éxito',
      icon: 'success',
    });
  
    // 7. Resetear estado previo a edicion
    sessionStorage.removeItem('movie.code');
  };
  

  //Eliminar Película

  export const removeMovie = (codeMovie) => {
    // 1. Confirmar eliminacion
    swal
      .fire({
        title: '¿Estas seguro/a?',
        text: 'Esta opcion no será revertible',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar',
      })
      .then((action) => {
        if (action.isConfirmed) {
          // 2. Traer lista
          const movie = getMoviesFromLS();
  
          // 3. Filtrar lista (tambien se puede con splice)
          // # Guarda en listaFiltrada TODOS los contactos que
          // # COINCIDEN con la condicion de busqueda
          const filteredListMovie = movie.filter(
            (item) => item.code !== codeMovie
          );
  
          // 4. Actualizamos la lista en LS
          localStorage.setItem('movie', JSON.stringify(filteredListMovie));
  
          // 5. Mensaje de exito
          swal.fire({
            title: 'Listo!',
            text: 'La película se eliminó correctamente',
            icon: 'success',
          });
  
          // 6. Recargar datos en tabla
          loadMovieTable();
  }
        })
      }

      //Editar serie

export const editSerie = (name, image, category, seasons, episodes, description, publication) => {
    // 1. Traer lista de datos y el codigo de la serie a editar
    const codeSerie = sessionStorage.getItem('serie.code');
    const serie = getseriesFromLS();
  
    // # Si no hay codigo (es null)
    if (!codeSerie) {
      swal.fire({
        title: 'Lo sentimos',
        text: 'No se encontró ninguna serie',
        icon: 'error',
      });
      return;
    }
  
    // 2. Buscar posicion del contacto
    const positionSerie = serie.findIndex(
      (item) => item.codeSerie === codeSerie
    );
  
    // # Si no se encontró el contacto
    if (positionSerie === -1) {
      swal.fire({
        title: 'Lo sentimos',
        text: 'No se encontró ninguna serie',
        icon: 'error',
      });
      return;
    }
  
    // 3. Crear el dato modificado
    const editedSerie = new Serie(name, image, category, seasons, episodes, description, publication);
  
    // 4. Eliminar dato  y agregar nuevo
    movie.splice(positionSerie, 1, editedSerie);
  
    // 5. Guardar en LS
    localStorage.setItem('serie', JSON.stringify(serie));
  
    // 6. Mostrar mensaje de exito
    swal.fire({
      title: '¡Listo!',
      text: 'La serie se modificó con éxito',
      icon: 'success',
    });
  
    // 7. Resetear estado previo a edicion
    sessionStorage.removeItem('serie.code');
  };
  

  //Eliminar serie

  export const removeSerie = (codeSerie) => {
    // 1. Confirmar eliminacion
    swal
      .fire({
        title: '¿Estas seguro/a?',
        text: 'Esta opcion no será revertible',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar',
      })
      .then((action) => {
        if (action.isConfirmed) {
          // 2. Traer lista
          const movie = getseriesFromLS();
  
          // 3. Filtrar lista (tambien se puede con splice)
          // # Guarda en listaFiltrada TODOS los contactos que
          // # COINCIDEN con la condicion de busqueda
          const filteredListSerie = movie.filter(
            (item) => item.code !== code
          );
  
          // 4. Actualizamos la lista en LS
          localStorage.setItem('movie', JSON.stringify(filteredListSerie));
  
          // 5. Mensaje de exito
          swal.fire({
            title: 'Listo!',
            text: 'La serie se eliminó correctamente',
            icon: 'success',
          });
  
          // 6. Recargar datos en tabla
          loadSerieTable();
  }
        })
      }