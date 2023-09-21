import { addCategoryToLS } from "./utils.js"

export class Category {
    constructor(name){
        this.name = name
        this.code = self.crypto.randomUUID()
    }
}

export const addCategory = (name)=>{
    const newCategory = new Category (name)
    addCategoryToLS(newCategory)
}