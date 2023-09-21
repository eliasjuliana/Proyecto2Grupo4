//selecciono item destacado
export const favItem = (array, code) =>{
    const favItemSaved = array.find(elemento => elemento.code === code);
    return favItemSaved;
};

export const createBannerMovie = (favMovie) =>{
    const carouselMovie = document.getElementById('carousel-movie');
    carouselMovie.classList.add('d-flex', 'flex-column', 'justify-content-end');

    const carouselMovieImg = document.createElement('img');
    carouselMovieImg.classList.add('d-block', 'w-100', 'img-fluid', 'position-absolute', 'z-1', 'img-carousel');
    carouselMovieImg.src = favMovie.image;
    carouselMovieImg.alt = favMovie.name;

    const bgCarousel = document.createElement('div');
    bgCarousel.classList.add('d-block', 'w-100', 'position-absolute', 'z-2', 'bg-carousel-container');

    const titleBtnsContainer = document.createElement('div');
    titleBtnsContainer.classList.add('z-3', 'position-absolute', 'text-light', 'm-4', 'title-container');

    const title = document.createElement('h2');
    title.classList.add('fs-1')
    title.innerText = favMovie.name;

    const description = document.createElement('h4');
    description.innerText = favMovie.description;

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('d-flex', 'gap-3');
    const playBtn = document.createElement('i');
    playBtn.classList.add('fa-regular', 'fa-circle-play', 'fs-1');
    const plusBtn = document.createElement('i');
    plusBtn.classList.add('fa-solid', 'fa-plus', 'fs-1');

    btnsContainer.appendChild(playBtn);
    btnsContainer.appendChild(plusBtn);

    titleBtnsContainer.appendChild(title);
    titleBtnsContainer.appendChild(description);
    titleBtnsContainer.appendChild(btnsContainer);


    carouselMovie.appendChild(carouselMovieImg);
    carouselMovie.appendChild(bgCarousel);
    carouselMovie.appendChild(titleBtnsContainer);
};

export const createBannerSerie = (favSerie) => {
    const carouselSerie = document.getElementById('carousel-serie');
    carouselSerie.classList.add('d-flex', 'flex-column', 'justify-content-end');

    const carouselSerieImg = document.createElement('img');
    carouselSerieImg.classList.add('d-block', 'w-100', 'img-fluid', 'z-1', 'position-absolute', 'img-carousel');
    carouselSerieImg.src = favSerie.image;
    carouselSerieImg.alt = favSerie.name;

    const bgCarousel = document.createElement('div');
    bgCarousel.classList.add('d-block', 'w-100', 'position-absolute', 'z-2', 'bg-carousel-container');
    
    const titleBtnsContainer = document.createElement('div');
    titleBtnsContainer.classList.add('z-3', 'position-absolute', 'text-light', 'm-4', 'title-container');

    const title = document.createElement('h2');
    title.classList.add('fs-1');
    title.innerText = favSerie.name;

    const description = document.createElement('h4');
    description.innerText = favSerie.description;

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('d-flex', 'gap-3');
    const playBtn = document.createElement('i');
    playBtn.classList.add('fa-regular', 'fa-circle-play', 'fs-1');

    const plusBtn = document.createElement('i');
    plusBtn.classList.add('fa-solid', 'fa-plus', 'fs-1');

    btnsContainer.appendChild(playBtn);
    btnsContainer.appendChild(plusBtn);

    titleBtnsContainer.appendChild(title);
    titleBtnsContainer.appendChild(description);
    titleBtnsContainer.appendChild(btnsContainer);


    carouselSerie.appendChild(carouselSerieImg);
    carouselSerie.appendChild(bgCarousel);
    carouselSerie.appendChild(titleBtnsContainer);
}

export const changeSlides = () =>{
    const slideMovie = document.getElementById('carousel-movie');
    const slideSerie = document.getElementById('carousel-serie');

    if(slideMovie.classList.contains('d-none')){
        slideMovie.classList.remove('d-none');
        slideSerie.classList.add('d-none')
    } else if (slideSerie.classList.contains('d-none')){
        slideMovie.classList.add('d-none');
        slideSerie.classList.remove('d-none')
    }
}