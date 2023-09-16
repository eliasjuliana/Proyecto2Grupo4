import {añadirDatos} from "./abm.js"
import { recargarTabla } from "./selectUtils.js"
import { cargarDatosEnTabla } from "./selectUtils.js"

const campoInput = document.getElementById("inputSelect")
const campoSelect = document.getElementById("selectForm")
const formCompleto = document.getElementById("formSelect")
const datosRandom = [];


formCompleto.addEventListener("submit",(e)=>{
  e.preventDefault();
const inputDatos = campoInput.value;
const selectDatos = campoSelect.value;
datosRandom.push(inputDatos,selectDatos)

cargarDatosEnTabla(datosRandom)
})
