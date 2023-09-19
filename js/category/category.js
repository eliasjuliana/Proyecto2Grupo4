import { addCategory } from "../category/class.js";
import { chargeCategoryList } from "../category/utils.js";

chargeCategoryList();

const formCategory = document.getElementById("form-category")
const inputCategory = document.getElementById("input-category")

<<<<<<< HEAD
inputCategory.addEventListener("submit", (e)=>{
=======
formCategory.addEventListener("submit", (e)=>{
>>>>>>> 5d76fd3d510ce9b6c77719966130bdfb6b3fcb03
    e.preventDefault();

    const category = inputCategory.value;

    addCategory(category);

    chargeCategoryList();

    formCategory.reset
})