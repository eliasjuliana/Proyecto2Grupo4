import { getCategoryFromLS } from "./utils.js";

export const chargeCategorySelect = (category)=>{
    const selectStart = document.getElementById("category-movie");
    const optionCreate = document.createElement("option")
    optionCreate.value = category.name;
    optionCreate.innerHTML = category.name;

    selectStart.appendChild(optionCreate)
}

export const rechargeCategorySelect = ()=>{
    const categoryListArr = getCategoryFromLS();
    const selectStart = document.getElementById("category-movie")

    selectStart.innerHTML = "";

    categoryListArr.forEach((category)=>{
        chargeCategorySelect(category)
    })

    const categoriaSeleccionada = selectStart.value;

    return categoriaSeleccionada;
}


/*const ulSave = document.getElementById("listCategory")
const liSave = document.createElement("p")
liSave.classList.add("list-group-item")
liSave.innerHTML = category.name;
ulSave.appendChild(liSave)
}

export const chargeCategoryList = ()=>{
    const categoryListArr = getCategoryFromLS();
    
    const ulSave = document.getElementById("listCategory")

    ulSave.innerHTML = "";


    categoryListArr.forEach((category)=>{
addCategoryToList(category)
    }) */