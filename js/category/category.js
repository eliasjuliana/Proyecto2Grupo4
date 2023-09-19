import { addCategory } from "../category/class.js";
import { chargeCategoryList } from "../category/utils.js";

chargeCategoryList();

const formCategory = document.getElementById("form-category")
const inputCategory = document.getElementById("input-category")

inputCategory.addEventListener("submit", (e)=>{
    e.preventDefault();

    const category = inputCategory.value;

    addCategory(category);

    chargeCategoryList();

    formCategory.reset
})