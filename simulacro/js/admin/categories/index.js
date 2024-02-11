import {post, get, categoryDelete, update} from "../../api/clientHttp.js";
import {URL_CATEGORIES} from "../../api/URLS.js"
import { idCategoryUpdate, printCategories} from "./functionsDOM.js";


export const modalContent = document.getElementById("modal-content");
export const nameCategory = document.getElementById("nameCategory");
export const descriptionCategory = document.getElementById("descriptionCategory");
export const categoriasTbody = document.getElementById("categorias-tbody");

const addNewCategory = document.getElementById("add-new-category");

modalContent.addEventListener("submit", (e) => {
  e.preventDefault();

  if (idCategoryUpdate.value) {
    //Actualizar
    updateCategory(idCategoryUpdate.value);
  }else{
    createCategory();
  }
})

document.addEventListener("DOMContentLoaded", () => {
  getCategories();
})


async function createCategory() {
    const newCategory = {
        name: nameCategory.value,
        description: descriptionCategory.value
    }

    await post(URL_CATEGORIES, newCategory)
}


async function getCategories() {
  const data = await get(URL_CATEGORIES);

  printCategories(data)
}



export async function eliminar(id) {
  await categoryDelete(`${URL_CATEGORIES}/${id}`)
}







//Esta función se invoca en la parte del dom, a la hora de recargar la pagina
export async function pintarModalEdit (dataId) {

  //Refactorizar a get
  const data = await get(`${URL_CATEGORIES}/${dataId}`);
  // ejemplo: const data = await get(URL_CATEGORIES);
  //Lo podemos hacer con la data retornada en el clientHttp
  nameCategory.value = data.name
  descriptionCategory.value = data.description

  idCategoryUpdate.value = dataId

  addNewCategory.click();
  //Debemos guardar el id de lo que se está ejecutando con el input hidden
}






export async function updateCategory(id) {
  const CategoryUpdate = {
    name: nameCategory.value,
    description: descriptionCategory.value
  }

  
  await update(`${URL_CATEGORIES}/${id}`, CategoryUpdate)
}





