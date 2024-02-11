import { URL_CATEGORIES } from "../../api/URLS.js";
import { deleteHttp, get, post, update } from "../../api/clientHttp.js";
import { printCategories } from "./functionDom.js";

//Selectores
const nameCategory = document.getElementById("nameCategory");
const descriptionCategory = document.getElementById("descriptionCategory");
const modalCategories = document.getElementById("modalCategories");

//Este es el boton que abre el modal de categoría, cuando le demos clic lo que buscamos es que se rellenen los datos y se abra el modal con los datos impresos
const addNewCategory = document.getElementById("addNewCategory")

//Input tipo hidden 
const inputHiddenCategories = document.getElementById("inputHiddenCategories")

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  getCategoryData();
})


modalCategories.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputHiddenCategories.value) {
    editCategory(inputHiddenCategories.value)
  }else{
    createCategory();
  }
  
})


//Crea la categoria al json 1
async function createCategory() {
    const dataCategory = {
        name: nameCategory.value,
        description: descriptionCategory.value
    };

    await post(URL_CATEGORIES, dataCategory)
}


//Obtenemos valores y a su vez usamos la funcion pintar para que se ejecuta siempre que se recargue la página  2
async function getCategoryData() {
    const data = await get(URL_CATEGORIES)
    console.log(data);
    printCategories(data)
}



//Eliminamos, es la mas sencilla de hacer, no olvidar poner el method
export async function deleteCategory(id) {
    await deleteHttp(`${URL_CATEGORIES}/${id}`)
}



//Editar el db
async function editCategory(id){
    const dataCategory = {
        name: nameCategory.value,
        description: descriptionCategory.value
    };

    await update(`${URL_CATEGORIES}/${id}`, dataCategory)
}




//Imprimir datos en el modal

export async function printUpdateCategories(id) {
    const data = await get(`${URL_CATEGORIES}/${id}`)

    console.log(id);
    nameCategory.value = data.name
    descriptionCategory.value = data.description
    inputHiddenCategories.value = id

    addNewCategory.click();
}







