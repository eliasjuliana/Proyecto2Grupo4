import { Movie } from './classes.js';
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

// export const favorite = () =>{
//     favStar.classList.add('favorite');
// }
