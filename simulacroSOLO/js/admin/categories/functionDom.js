import { deleteCategory, printUpdateCategories, } from "../categories/index.js";


const tbody = document.getElementById("categorias-tbody")

export async function printCategories (data) {
    data.forEach(categoria => {

        tbody.innerHTML += `
        <tr>
        <td>${categoria.id}</td>
        <td>${categoria.name}</td>
        <td>${categoria.description}</td>
        <td>
          <button class="btn btn-primary edit-category" data-id = "${categoria.id}">Edit</button>
          <button class="btn btn-danger delete-category" data-id = "${categoria.id}">Delete</button>
        </td>
      </tr>
      <tr>
        `        
    });


tbody.addEventListener("click", (e) => {
          e.preventDefault();
          if (e.target.classList.contains("edit-category")) {
            const id = e.target.getAttribute("data-id")
            printUpdateCategories(id)
          }

          if (e.target.classList.contains("delete-category")) {
            const id = e.target.getAttribute("data-id") 
            deleteCategory(id)
          }
})
}
