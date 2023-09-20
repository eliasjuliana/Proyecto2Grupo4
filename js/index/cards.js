import { getMoviesFromLS } from "../admin/adminUtils.js";

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

export const loadMovieCard = () => {
  const movies = getMoviesFromLS();

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
