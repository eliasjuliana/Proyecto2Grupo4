import { addCategory } from "./class.js";
import { editCategory, editingCategory } from "./select.js";
import { chargeCategoryList } from "./utils.js";

chargeCategoryList();

const formCategory = document.getElementById("form-category")
const inputCategory = document.getElementById("input-category")

formCategory.addEventListener("submit", (e)=>{
    e.preventDefault();

    const category = inputCategory.value;
if(editingCategory()){
    editCategory(category)
} else{
    addCategory(category);
}

    chargeCategoryList();

    formCategory.reset
})