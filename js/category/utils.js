export const getCategoryFromLS = ()=>{
    return JSON.parse(localStorage.getItem("categorias")) || [];}

export const addCategoryToLS = (category)=>{
    const categoryNew = getCategoryFromLS();
    categoryNew.push(category);
    localStorage.setItem("categorias", JSON.stringify(categoryNew));
}

export const addCategoryToList = (category)=>{
const ulSave = document.getElementById("listCategory")
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
    })
}

