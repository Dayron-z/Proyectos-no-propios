import { deleteHttp, get, post, update } from "../../api/clientHttp.js";
import { URL_CATEGORIES, URL_NEWS } from "../../api/URLS.js"
import { printNews } from "./functionDom.js";

//Selectores
const nameNotice = document.getElementById("nameNotice");
const urlImage = document.getElementById("urlImage");

        //Categoria opciones
const idCategory = document.getElementById("idCategory")
const contentNotice = document.getElementById("contentNotice")
const formNotice = document.getElementById("formNotice")

        //Input hidden
const inputHiddenNew = document.getElementById("inputHiddenNew")
        //Para obligar al usuario a hacer clic en otro lado
const addNewNotice = document.getElementById("addNewNotice")



//Extra (No necesario)
const exampleModalLabel = document.getElementById("exampleModalLabel")

document.addEventListener("DOMContentLoaded", (e) => {
    llenarCategoria();
    getNews();

})

formNotice.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputHiddenNew.value) {
        editNew(inputHiddenNew.value)
    }else{
        createNotice() 
    }

;

})



//Crear la noticia como siempre la llenamos, unicamente traemos el localstorage para poder ineyctar al autor, es importante que lo que necesite relacion con otra llave se ponga de manera singula para que se encuentren conectadas a la hora de hace el embed
async function createNotice() {


    //Siempre que traigamos algo del localestorage parsearlo
    const user = JSON.parse(localStorage.getItem("data"))  


    const dataNew = {
        name: nameNotice.value,
        url: urlImage.value,
        categoryId: idCategory.value,
        contentNotice: contentNotice.value,
        userId: user.id,
        publicationDate: new Date().toISOString().split("T")[0]
    }

    await post(URL_NEWS, dataNew)
}




//El select no tiene ocpciones, por ende lo debemos llenar por medio de un document createElement tomando los valores de categoria (La que en este caso necesitamos)
async function llenarCategoria() {
    const data = await get(URL_CATEGORIES)

    data.forEach(element => {
        const option = document.createElement("option")
        option.textContent = element.name

        //El value del id lo toma de acá
        option.value = element.id

        idCategory.appendChild(option);
    });
}


//Acá llega la parte de pintar, primera mente obtenemos la data

async function getNews() {
    const data = await get(`${URL_NEWS}?_embed=category&_embed=user`)
    printNews(data)
}


//Parte de eliminar

export async function deleteNew(dataId) {
    await deleteHttp(`${URL_NEWS}/${dataId}`)
}


//Parte de editar (Relleno de datos del modal, db no modificado hasta el momento)

export async function editModalNew(dataId) {
    const data = await get(`${URL_NEWS}/${dataId}?_embed=category&_embed=user`)

    addNewNotice.click();
    nameNotice.value = data.name
    urlImage.value = data.url
    contentNotice.value = data.contentNotice
    inputHiddenNew.value = dataId;


}


async function editNew(ID) {

    //Llamar correctamente los localstorage
    const user = JSON.parse(localStorage.getItem("data"))

    const dataEdit = {
        name: nameNotice.value,
        url: urlImage.value,
        categoryId: idCategory.value,
        contentNotice: contentNotice.value,
        userId: user.id ,
        publicationDate: new Date().toISOString().split("T")[0]
    }

    await update(`${URL_NEWS}/${ID}`, dataEdit)
}