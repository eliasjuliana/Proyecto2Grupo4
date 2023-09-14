import { guardarDatosEnLS } from "./selectUtils.js";
import { Categoria } from "./categoryClass.js";

export const añadirDatos = (dato,categoria) => {
    // Crear el contacto
    const nuevoDato = new Categoria(dato,categoria);
  
    // Agregarlo a la lista
    guardarDatosEnLS(nuevoDato);
  
}  