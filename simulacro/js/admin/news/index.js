import { URL_CATEGORIES, URL_NEWS } from "../../api/URLS.js";
import {categoryDelete, get, post, update} from "../../api/clientHttp.js";
import { updateCategory } from "../categories/index.js";
import { printNews } from "./functionDOM.js";


//Selectores
const formNews = document.getElementById("FormNews");
const nameNotice = document.getElementById("nameNotice");
const urlImage = document.getElementById("urlImage");
const contentNotice = document.getElementById("contentNotice");
const btnOpenModalNews = document.getElementById("btnOpenModalNews");

//Este es el de opciones
const idCategory = document.getElementById("idCategory");

//Este es el input hidden
const idNewUpdate = document.getElementById("idNewUpdate")


//Eventos
document.addEventListener("DOMContentLoaded", () => {
  loadCategories();
  getNews();
})


formNews.addEventListener("submit", (e) => {
  e.preventDefault();

  if (idNewUpdate.value) {
    editarNew(idNewUpdate.value)
  }else{
    createNew()
  }




})


//Creamos noticias con metodo post, todo igual, en este caso lo unico que cambia es que pedimos una validación con las categorías para que se llene de manera obligatoria 

async function createNew() {

    const user = JSON.parse(localStorage.getItem("user"))

    // if (!idCategory.value) {
    //     alert("La categoría es obligatoria")
    //     return
    // }
    const newNotice = {
        name: nameNotice.value,
        url: urlImage.value,
        //Si queremos que categoría se llave foranea de news, debemos ponerla en singular //Si se llama categories la debemos poner en singular y la palabra "Id"
        categoryId: idCategory.value,
        content: contentNotice.value,
        userId: user.id,
        publicationDate: new Date().toISOString().split("T")[0]
    }
    const data = await post(URL_NEWS, newNotice)
}





//Primero hacemos un get de categorias y llenamos los option del seletect por medio documentCreateelement dando como text content el nombre que tiene en el db y de misma forma su value el cual será el id
async function loadCategories(){
    const categories = await get(URL_CATEGORIES);

    console.log(categories);

    categories.forEach((category) => {
        const option = document.createElement("option");
        option.textContent = category.name;
        option.value = category.id
//Por cada elemento de categria el crea una opción 
        idCategory.appendChild(option)
    });
};





async function getNews() {
    const data = await get(`${URL_NEWS}?_embed=category&_embed=user`)
    printNews(data)
}


//Eliminar

export async function eliminarNew(dataID) {
    await categoryDelete(`${URL_NEWS}/${dataID}`);
}



//Editar print modal// Esto ocurrirá una vez se dispare el modal cuando presionemos el boton editar
export async function printEditNew(dataID){

    const data = await get(`${URL_NEWS}/${dataID}?_embed=category&_embed=user`)
    console.log(idCategory.value);
    btnOpenModalNews.click();
    nameNotice.value = data.name
    urlImage.value = data.url
    contentNotice.value = data.content
    // idCategory.value = data.category.name;
    idNewUpdate.value = data.id 

}



//Editar database
async function editarNew(ID) {
    const user = JSON.parse(localStorage.getItem("user"))

    const newEditNotice = {
        name: nameNotice.value,
        url: urlImage.value,
        categoryId: idCategory.value,
        content: contentNotice.value,
        userId: user.id ,
        publicationDate: new Date().toISOString().split("T")[0]
    }

    await update(`${URL_NEWS}/${ID}`, newEditNotice)
 }





