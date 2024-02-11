import {categoriasTbody, eliminar, pintarModalEdit} from "../categories/index.js"

//Input tipo hidden
export const idCategoryUpdate = document.getElementById("idCategoryUpdate");



// Boton que se encarga de abrir el modal 


export function printCategories(data) {
    data.forEach((element, index) => {
        categoriasTbody.innerHTML += `  
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.description}</td>
        <td>
          <button class="btn btn-primary btn-edit" data-id = "${element.id}">Edit</button>
          <button class="btn btn-danger btn-delete" data-id = "${element.id}" >Delete</button>
        </td>
      </tr>
      <tr>  
        `
    });

    categoriasTbody.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-delete")) {
        const dataId = e.target.getAttribute("data-id")
        eliminar(dataId)
      }


      if (e.target.classList.contains("btn-edit")) {
        const dataId = e.target.getAttribute("data-id")
        pintarModalEdit(dataId)
      }
    })

} 



//Esta es la funcion con la que vamos a pintar
