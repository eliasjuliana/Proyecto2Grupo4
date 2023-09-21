import { deleteCategory, prepareEditionCategory } from "./select.js";

export const getCategoryFromLS = ()=>{
    return JSON.parse(localStorage.getItem("categorias")) || [];}

export const addCategoryToLS = (category)=>{
    const categoryNew = getCategoryFromLS();
    categoryNew.push(category);
    localStorage.setItem("categorias", JSON.stringify(categoryNew));
}

export const addCategoryToList = (category)=>{
    //LLAMO A LA LISTA PARA GUARDAR DATOS
const tbody = document.getElementById("tbodyCategory")
const tr = document.createElement("tr")
// CREO CADA PUNTO CON  "LI"
const td = document.createElement("td")
td.innerText = category.name;
tr.appendChild(td)
//AÑADO BOTON EDITAR Y ELIMINAR
//EDITAR
const tdActions = document.createElement("td")
tdActions.classList.add("text-end")
const editBtn = document.createElement("button")
editBtn.classList.add("btn","btn-info","me-2")
//Agrego ICONO
const iconEdit = document.createElement("i")
iconEdit.classList.add("fa-solid","fa-pen-to-square")
iconEdit.style.color = "#000000"
editBtn.appendChild(iconEdit)
editBtn.onclick = ()=>{
    prepareEditionCategory(category.code)
}

//ELIMINAR
const deleteBtn = document.createElement("button")
deleteBtn.classList.add("btn","btn-danger")
const iconDelete = document.createElement("i")
iconDelete.classList.add("fa-solid","fa-x")
iconDelete.style.color = "#000000"
deleteBtn.appendChild(iconDelete)

deleteBtn.onclick = ()=>{
    deleteCategory(category.code)
}


tdActions.appendChild(editBtn)
tdActions.appendChild(deleteBtn)
tr.appendChild(tdActions)
tbody.appendChild(tr)


}

export const chargeCategoryList = ()=>{
    const categoryListArr = getCategoryFromLS();
    
    const tbody = document.getElementById("tbodyCategory")

    tbody.innerHTML = "";


    categoryListArr.forEach((category)=>{
addCategoryToList(category)
    })
}
