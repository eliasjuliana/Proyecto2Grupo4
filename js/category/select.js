import { getCategoryFromLS } from "./utils.js";

export const chargeCategorySelect = (category, selects)=>{

    const optionCreate = document.createElement("option")
optionCreate.value = category.name;
optionCreate.innerHTML = category.name;

selects.appendChild(optionCreate)

}

export const rechargeCategorySelect = () => {
    const categoryListArr = getCategoryFromLS();
    const selectMovieSerie = document.querySelectorAll(".categorySelect");

    selectMovieSerie.forEach((select) => {
        select.innerHTML = "";

        const optionSelect = document.createElement("option");
        optionSelect.disabled = true;
        optionSelect.selected = true;
        optionSelect.innerText = "Elige una categoria";
        select.appendChild(optionSelect);

        categoryListArr.forEach((category) => {
            chargeCategorySelect(category, select);
        });
    });}





    