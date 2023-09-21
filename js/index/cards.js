import { getMoviesFromLS, getseriesFromLS } from "../admin/adminUtils.js";

const createCard = (movie) => {
  const bodyCards = document.querySelectorAll(".cardFilm");

  bodyCards.forEach((bodyCard) => {
    const divCard = document.createElement("div");
    divCard.classList.add("card","text-bg-dark","m-3","position-relative");
    divCard.style.width = "18rem";
    const img = document.createElement("img");
    img.src = movie.image
    img.alt = movie.name
divCard.appendChild(img)
    divCard.addEventListener("mouseenter", () => {
      // Lógica para mostrar detalles de la película en el mouseenter...
      const divCardBody = document.createElement("div");
      divCardBody.classList.add("z-2","card-body");
      const divPrime = document.createElement("div");
      const divStart = document.createElement("div");
      const iconStart = document.createElement("i");
      iconStart.style.color = "#3a7ef2";
      iconStart.classList.add("fa-solid", "fa-circle-check");
      const parafPrime = document.createElement("p");
      parafPrime.classList.add("parafFont--Prime");
      parafPrime.innerText = "Se incluye con prime";
      divPrime.appendChild(iconStart);
      divPrime.appendChild(parafPrime);
      divCardBody.appendChild(divPrime);
      const btnStart = document.createElement("i");
      btnStart.classList.add("fa-solid", "fa-circle-play");
      btnStart.style.color = "#ffffff";
      const parafStart = document.createElement("p");
      parafStart.classList.add("parafFont--Start");
      parafStart.innerText = "REPRODUCIR";
      divStart.appendChild(btnStart);
      divStart.appendChild(parafStart);
      divCardBody.appendChild(divStart);
      const titleDiv = document.createElement("h2");
      titleDiv.classList.add("card-text", "fontTitle");
      titleDiv.innerText = movie.name;
      const descripDiv = document.createElement("p");
      descripDiv.classList.add("parafFont--description");
      descripDiv.innerText = movie.description;
      divCardBody.appendChild(titleDiv);
      divCardBody.appendChild(descripDiv);
      divCard.appendChild(divCardBody);
    });

    divCard.addEventListener("mouseleave", () => {
      // Lógica para ocultar detalles en el mouseleave...
      const detalles = divCard.querySelector(".card-body");
      if (detalles) {
        divCard.removeChild(detalles);
      }
    });

    bodyCard.appendChild(divCard);
  });
};

const createCardByCategory = (movie) => {
  const bodyCards = document.getElementById("filmsCategory");
const divSaveCards = document.querySelector(".category-card")
    const divCard = document.createElement("div");
    divCard.classList.add("card","text-bg-dark","m-3","d-flex","justify-content-between","inline-block");
    divCard.style.width = "18rem";
    const img = document.createElement("img");
    img.src = movie.image
    img.alt = movie.name
divCard.appendChild(img)
    divCard.addEventListener("mouseenter", () => {
      // Lógica para mostrar detalles de la película en el mouseenter...
      const divCardBody = document.createElement("div");
      divCardBody.classList.add("z-2","card-body");
      const divPrime = document.createElement("div");
      const divStart = document.createElement("div");
      const iconStart = document.createElement("i");
      iconStart.style.color = "#3a7ef2";
      iconStart.classList.add("fa-solid", "fa-circle-check");
      const parafPrime = document.createElement("p");
      parafPrime.classList.add("parafFont--Prime");
      parafPrime.innerText = "Se incluye con prime";
      divPrime.appendChild(iconStart);
      divPrime.appendChild(parafPrime);
      divCardBody.appendChild(divPrime);
      const btnStart = document.createElement("i");
      btnStart.classList.add("fa-solid", "fa-circle-play");
      btnStart.style.color = "#ffffff";
      const parafStart = document.createElement("p");
      parafStart.classList.add("parafFont--Start");
      parafStart.innerText = "REPRODUCIR";
      divStart.appendChild(btnStart);
      divStart.appendChild(parafStart);
      divCardBody.appendChild(divStart);
      const titleDiv = document.createElement("h2");
      titleDiv.classList.add("card-text", "fontTitle");
      titleDiv.innerText = movie.name;
      const descripDiv = document.createElement("p");
      descripDiv.classList.add("parafFont--description");
      descripDiv.innerText = movie.description;
      divCardBody.appendChild(titleDiv);
      divCardBody.appendChild(descripDiv);
      divCard.appendChild(divCardBody);
    });

    divCard.addEventListener("mouseleave", () => {
      // Lógica para ocultar detalles en el mouseleave...
      const detalles = divCard.querySelectorAll(".card-body");
      if (detalles) {
        detalles.forEach((detalle) => {
          divCard.removeChild(detalle);
        });
      }
    });
divSaveCards.appendChild(divCard)
    bodyCards.appendChild(divSaveCards);
  }


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const loadMovieCard = () => {
  const movies = getMoviesFromLS();

  shuffleArray(movies)
  // Seleccionar todos los contenedores que coincidan con el selector
  const containerElements = document.querySelectorAll(".cardFilm");

  // Iterar sobre los contenedores
  containerElements.forEach((divCard) => {
    // Vaciar el contenedor
    divCard.innerHTML = "";

    // Cargar las tarjetas en el contenedor
    movies.forEach((movie) => {
      createCard(movie);
    });
  });
};


export const loadMoviesByCategory = () => {
  const movies = getMoviesFromLS();
  const series = getseriesFromLS();

  const concatFilmsSeries = movies.concat(series)

  // Obtengo un arreglo único de todas las categorías presentes en las películas
  const categories = Array.from(new Set(concatFilmsSeries.map((movie) => movie.category)));

  // Selecciona el contenedor donde deseas agregar los artículos
  const sectionContainer = document.getElementById("filmsCategory")
  const articleContainer = document.createElement("article");
  articleContainer.classList.add("category-card")

  // Recorre las categorías y crea una tarjeta por cada una
  categories.forEach((category) => {
    // Filtra las películas por categoría
    const moviesInCategory = concatFilmsSeries.filter((movie) => movie.category === category);

    // Si hay películas en esta categoría, crea una tarjeta de la categoría
    if (moviesInCategory.length > 0) {
      const categoryCard = document.createElement("div");
      // Agrega el título de la categoría
      const categoryTitle = document.createElement("h2");
      categoryTitle.classList.add("titleFont", )
      categoryTitle.innerText = "Peliculas de : " + category;
      categoryCard.appendChild(categoryTitle)
      
      articleContainer.appendChild(categoryCard);
      sectionContainer.appendChild(articleContainer)
      // Crea tarjetas de película para las películas en esta categoría
      moviesInCategory.forEach((movie) => {
        createCardByCategory(movie);
      });

    }
  });
};
