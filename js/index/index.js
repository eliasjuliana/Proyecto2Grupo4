import { getMoviesFromLS, getseriesFromLS, saveFavSerieCode } from "../admin/adminUtils.js";
import { createBannerMovie, createBannerSerie, favItem } from "./utils.js"

//selecciono botones del navbar

const menuBtnNav = document.getElementById('btn-menu');
const searchBtnNav = document.getElementById('btn-search');
const userBtnNav = document.getElementById('btn-user');

const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownSearch = document.getElementById('dropdown-search');
const dropdownUser = document.getElementById('dropdown-user');

const iconSearch = document.getElementById('icon-search');
const iconX = document.getElementById('icon-xmark');


//funciones
const toggleNavbarButton = (button, dropdown) => {
    if (button.classList.contains('btn-navbar-active')) {
        button.classList.remove('btn-navbar-active');
        button.classList.add('btn');
        dropdown.classList.add('d-none');
    } else {
        button.classList.add('btn-navbar-active');
        button.classList.remove('btn');
        dropdown.classList.remove('d-none');
    }
};

const hideOtherDropdowns = (dropdown1, dropdown2) =>{
    dropdown1.classList.add('d-none');
    dropdown2.classList.add('d-none');
};

const inactiveBtn = (btn1, btn2) =>{
    btn1.classList.add('btn');
    btn1.classList.remove('btn-navbar-active');
    btn2.classList.add('btn');
    btn2.classList.remove('btn-navbar-active');
}

const changeIcons = (iconToShow, iconToHide) =>{
    iconToShow.classList.remove('d-none');
    iconToHide.classList.add('d-none');
}


//event listeners
menuBtnNav.addEventListener('click', () => {
    toggleNavbarButton(menuBtnNav, dropdownMenu);
    hideOtherDropdowns(dropdownSearch, dropdownUser);
    inactiveBtn(searchBtnNav, userBtnNav);
    changeIcons(iconSearch, iconX);
});

searchBtnNav.addEventListener('click', () => {
    toggleNavbarButton(searchBtnNav, dropdownSearch, iconSearch, iconX);
    hideOtherDropdowns(dropdownMenu, dropdownUser);
    inactiveBtn(menuBtnNav, userBtnNav);

    if(!(searchBtnNav.classList.contains('btn-navbar-active'))){
        changeIcons(iconSearch, iconX);
    } else {
        changeIcons(iconX, iconSearch);
    }
});

userBtnNav.addEventListener('click', () => {
    toggleNavbarButton(userBtnNav, dropdownUser);
    hideOtherDropdowns(dropdownMenu, dropdownSearch);
    inactiveBtn(menuBtnNav, searchBtnNav);
    changeIcons(iconSearch, iconX);
});

//banner home

//traigo del SS el codigo de pelicula/serie destacada
const favMovieCode = sessionStorage.getItem('codeFavMovie');
const favSerieCode = sessionStorage.getItem('codeFavSerie');
//traigo los arrays de peliculas/series
const movies = getMoviesFromLS();
const series = getseriesFromLS();

//encuentro la pelicula/serie destacada
const favMovie = favItem(movies, favMovieCode);
const favSerie = favItem(series, favSerieCode);


//tomo la imagen de la pelocula destacada y creo la imagen del carousel
createBannerMovie(favMovie);

//tomo la imagen de la pelocula destacada y creo la imagen del carousel
createBannerSerie(favSerie);


//de index.js feat/admin
// export const eliminarContacto = (codigo) => {
//     // Siempre confirmar la eliminacion
//     swal
//       .fire({
//         title: "¿Estás seguro?",
//         text: "Una vez eliminado, no podrás recuperar el contacto",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonText: "Eliminar",
//         cancelButtonText: "Cancelar",
//       })
//       .then((result) => {
//         if (result.isConfirmed) {
//           // 1. Traer la lista de contactos
//           const contactos = obtenerContactosDeLS();
  
//           // 2. Filtrar el contacto a eliminar
//           const contactosActualizados = contactos.filter(
//             (contacto) => contacto.codigo !== codigo,
//           );
  
//           // 3. Guardar el nuevo array en localStorage
//           localStorage.setItem(
//             "contactos",
//             JSON.stringify(contactosActualizados),
//           );
  
//           // 4. Recargar la tabla
//           cargarTabla();
  
//           // 5. Mensaje de exito
//           swal.fire({
//             icon: "success",
//             title: "Contacto eliminado correctamente",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       });
//   };

