const filtroInput = document.getElementById('filtro');
const opcionesSelect = document.getElementById('opciones');
const resultadosList = document.getElementById('resultados');

// Obtener las opciones en base a los datos del LS
const opciones = funcionLocalStorage()

filtroInput.addEventListener('input', () => {
  const filtro = filtroInput.value.toLowerCase();

  // Filtrar las opciones
  const opcionesFiltradas = opciones.filter((option) => {
    const valorOpcion = option.value.toLowerCase();
    return valorOpcion.includes(filtro);
  });

  // Limpiar la lista de resultados
  resultadosList.innerHTML = '';

  // Agregar las opciones filtradas a la lista de resultados
  opcionesFiltradas.forEach((option) => {
    const listItem = document.createElement('li');
    listItem.textContent = option.textContent;
    resultadosList.appendChild(listItem);
  });
});