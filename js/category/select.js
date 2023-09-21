import { chargeCategoryList, getCategoryFromLS } from "./utils.js";

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

    export const deleteCategory = (code) =>{

        swal.fire({
            title: "¿Estás seguro?",
            text: "Una vez eliminado, será imposible recuperar la categoria",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            customClass: {
              popup: 'colored-toast'
            },
          })
        .then((result) => {
            if (result.isConfirmed) {
              
            const category = getCategoryFromLS();
      
            const categoryFiltered = category.filter((item) => item.code !== code);
            console.log(categoryFiltered);
      
            localStorage.setItem('categorias', JSON.stringify(categoryFiltered));
      
            swal.fire({
              icon: "success",
              title: "¡Categoria Elimina!",
              customClass: {
                popup: 'colored-toast',
              showConfirmButton: false,
              timer: 1500,
            }
          });
          
          chargeCategoryList()
        }  
    })
}