//selecciono item destacado
export const favItem = (array, code) =>{
    const favItemSaved = array.find(elemento => elemento.code === code);
    return favItemSaved;
};


export const createBannerMovie = (favMovie) =>{
    const carouselMovie = document.getElementById('carousel-movie');
    carouselMovie.classList.add('d-flex', 'flex-column', 'justify-content-end');
    const carouselMovieImg = document.createElement('img');
    carouselMovieImg.classList.add('d-block', 'w-100', 'img-fluid', 'z-1', 'position-absolute');
    carouselMovieImg.src = favMovie.image;
    carouselMovieImg.alt = favMovie.name;

    const titleBtnsContainer = document.createElement('div');
    titleBtnsContainer.classList.add('z-2', 'position-absolute', 'text-light', 'm-4');

    const title = document.createElement('h2');
    title.innerText = favMovie.name;

    const description = document.createElement('h4');
    description.innerText = favMovie.description;

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('d-flex', 'gap-3');
    const playBtn = document.createElement('i');
    playBtn.classList.add('fa-regular', 'fa-circle-play');

    const plusBtn = document.createElement('i');
    plusBtn.classList.add('fa-solid', 'fa-plus');

    btnsContainer.appendChild(playBtn);
    btnsContainer.appendChild(plusBtn);

    titleBtnsContainer.appendChild(title);
    titleBtnsContainer.appendChild(description);
    titleBtnsContainer.appendChild(btnsContainer);

    carouselMovie.appendChild(carouselMovieImg);
    carouselMovie.appendChild(titleBtnsContainer);
};

export const createBannerSerie = (favSerie) => {
    const carouselSerie = document.getElementById('carousel-serie');
    carouselSerie.classList.add('d-flex', 'flex-column', 'justify-content-end');
    const carouselSerieImg = document.createElement('img');
    carouselSerieImg.classList.add('d-block', 'w-100', 'img-fluid', 'z-1', 'position-absolute');
    carouselSerieImg.src = favSerie.image;
    carouselSerieImg.alt = favSerie.name;
    
    const titleBtnsContainer = document.createElement('div');
    titleBtnsContainer.classList.add('z-2', 'position-absolute', 'text-light', 'm-4');

    const title = document.createElement('h2');
    title.innerText = favSerie.name;

    const description = document.createElement('h4');
    description.innerText = favSerie.description;

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('d-flex', 'gap-3');
    const playBtn = document.createElement('i');
    playBtn.classList.add('fa-regular', 'fa-circle-play');

    const plusBtn = document.createElement('i');
    plusBtn.classList.add('fa-solid', 'fa-plus');

    btnsContainer.appendChild(playBtn);
    btnsContainer.appendChild(plusBtn);

    titleBtnsContainer.appendChild(title);
    titleBtnsContainer.appendChild(description);
    titleBtnsContainer.appendChild(btnsContainer);

    carouselSerie.appendChild(carouselSerieImg);
    carouselSerie.appendChild(titleBtnsContainer);
}

