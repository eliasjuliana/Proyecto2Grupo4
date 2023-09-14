import { Movie, Serie } from './classes.js';
import { addMoviesToLS, addSeriesToLS } from './adminUtils.js';

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