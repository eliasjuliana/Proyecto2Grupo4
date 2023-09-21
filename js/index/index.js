import { getMoviesFromLS, getseriesFromLS, saveFavSerieCode } from "../admin/adminUtils.js";
import { createBannerMovie, createBannerSerie, favItem, changeSlides } from "./utils.js"
// import {loadMovieCard} from "./cards.js"


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


//selecciono slide default del carousel
const bannerDefault = document.getElementById('banner-default');
const bannerFavs = document.getElementById('banner-home');


if(!favMovie || !favSerie){
    bannerDefault.classList.remove('d-none');
    bannerFavs.classList.add('d-none');
} else {
    bannerDefault.classList.add('d-none');
    bannerFavs.classList.remove('d-none');
    createBannerMovie(favMovie);
    createBannerSerie(favSerie);
}


//event listener botones carousel

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');



btnNext.addEventListener('click', ()=>{
    changeSlides();
})

btnPrev.addEventListener('click', ()=>{
    changeSlides();
})

