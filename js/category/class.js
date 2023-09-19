import { addCategoryToLS } from "./utils.js"

class Category {
    constructor(name){
        this.name = name
    }
}

export const addCategory = (name)=>{
const newCategory = new Category (name)
addCategoryToLS(newCategory)
}