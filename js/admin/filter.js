// import { getMoviesFromLS } from "./adminUtils.js";
// import { addRowMovieTable } from "./adminUtils.js";
// import { addRowSerieTable, getseriesFromLS } from "./adminUtils.js";

// export const filtradoPelicula = ()=>{
//   const filtrado = document.getElementById("categoryFilterMovies")


// //opciones en base a los datos de LS para peliculas (getMovies)

// const opcionesLsMovie = getMoviesFromLS();

// filtrado.addEventListener("change",()=>{
// const categoriaSeleccionada = filtrado.value

//   const resultado = opcionesLsMovie.filter((seriePeli)=>{
//       if(categoriaSeleccionada === "todos"){
//           return seriePeli
//       }
//           return seriePeli.category === categoriaSeleccionada
//   })
// //limpiar tbody

// const tbody = document.getElementById('tbody-movies');

// tbody.innerHTML = '';

// // Cargar tabla

//   resultado.forEach((parametro) => {

//   addRowMovieTable(parametro);

// })
// })

// }
// export const filtradoSerie = ()=>{
//   const filtrado = document.getElementById("categoryFilterSeries")

// //opciones en base a los datos de LS para Series (getSeries)

// const opcionesLsSerie = getseriesFromLS();

// filtrado.addEventListener("change",()=>{
// const categoriaSeleccionada = filtrado.value

//   const resultado = opcionesLsSerie.filter((seriePeli)=>{
//       if(categoriaSeleccionada === "todos"){
//           return seriePeli
//       }
//           return seriePeli.category === categoriaSeleccionada
//   })
// //limpiar tbody

// const tbody = document.getElementById('tbody-series');

// tbody.innerHTML = '';
// console.log(tbody)
// // Cargar tabla

//   resultado.forEach((parametro) => {

//   addRowSerieTable(parametro);

// })
// })
// }