export const obtenerDatosDeLS = () => {
    JSON.parse(localStorage.getItem("datos")) || [];
  };
  
  
export const guardarDatosEnLS = (nuevoDato) => {
    const datos = obtenerDatosDeLS();
  
    datos.push(nuevoDato)
  
    localStorage.setItem('datos', JSON.stringify(datos));
  };

export const cargarDatosEnTabla = (datoEntero) => {
    const tbody = document.getElementById("tbody-datos")  
    const tr = document.createElement('tr');
    
       // Datos ------------------------------------------------------
    
      const tdDato = document.createElement('td');
      tdDato.innerText = datoEntero.datos;
      tr.appendChild(tdDato);
    
      // Categoria ------------------------------------------------------
    
      const tdCategoria = document.createElement('td');
      tdCategoria.innerText = datoEntero.categoria;
      tr.appendChild(tdCategoria);
    
      tbody.appendChild(tr)
    };

export const recargarTabla = () => {
    const datos = obtenerDatosDeLS();
    const tbody = document.getElementById('tbody-datos');
  
    // Limpiar tabla para cargar de 0
    tbody.innerHTML = '';
  
    datos.forEach((datoEntero) => {
      cargarDatosEnTabla(datoEntero)
    })};