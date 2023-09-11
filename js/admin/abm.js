import { Movie } from './movies.js';
import { addMoviesToLS } from './adminUtils.js';

export const addMovie = (name, image, category, description, publication) => {
    const newMovie = new Movie(name, image, category, description, publication);
    
    addMoviesToLS(newMovie);

    // swal.fire({
    //     title: 'Exito',
    //     text: 'Pelicula agregado exitosamente',
    //     icon: 'success',
    // });
};

export const editarContacto = () => {};

export const eliminarContacto = () => {};