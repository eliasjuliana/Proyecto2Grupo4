import { Category } from "./class.js";
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

    //FUNCIONALIDAD ELIMINAR
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

//FUNCIONALIDAD EDITAR

export const editCategory = (name) => {
    //traer lista de series y codigo
    const code = sessionStorage.getItem('codeCategory');
    const category = getCategoryFromLS();
  
    //si no hay codigo
    if (!code) {
      swal.fire({
        icon: "error",
        title: "Ocurrio un error",
        text: "No se pudo encontrar la categoria",
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
      })
      return;
    };
  
    //buscar serie
    const positionCategory = category.findIndex((item)=>item.code === code);
  
    if(positionCategory === -1){
      swal.fire({
        icon: "error",
        title: "Ocurrio un error",
        text: "No se pudo encontrar la categoria",
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
      })
      return;
    }
  
  
    const editedCategory = new Category (name)
  
      //eliminar serie anterior y agregar la nueva
      category.splice(positionCategory, 1, editedCategory);
  
      //guardo en LS
      localStorage.setItem("categorias", JSON.stringify(category));
  
      swal.fire({
        icon: "success",
        title: "Exito",
        text: "La serie se editó correctamente",
        customClass: {
          popup: 'colored-toast'
        },
      })
  
      sessionStorage.removeItem('codeCategory');
  };


export const prepareEditionCategory = (code) =>{
    //1.traer lista de categoruas
    const category = getCategoryFromLS();

    //2. buscar pelicula
    const selectedCategory = category.find((item)=>{
      return item.code === code;
    })

    //3. seleccionar los campos
    const inputCategory = document.getElementById("input-category");

    //4. cargar los datos en el formulario

 inputCategory.value = selectedCategory.name;

        //5.guardar codigo en session storage
        sessionStorage.setItem('codeCategory', code);
};


export const editingCategory = () =>{
  const code = sessionStorage.getItem('codeCategory');

  if(code === null) {
    return false;
  } else {
    return true;
  }
};