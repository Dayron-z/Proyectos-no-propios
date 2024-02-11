import { eliminarNew, printEditNew } from "../news/index.js";

const tbody = document.getElementById("news-tbody");




export function printNews(data) {
    data.forEach(news => {
        tbody.innerHTML += `
        <tr>
        <td>
          <img
            src="${news.url}"
            alt="photo"
            height="50"
            width="50"
            class="rounded-circle"
          />
        </td>
        <td>${news.name}</td>
        <td>${news.content}</td>
        <td>${news.publicationDate}</td>
        <td>${news.user.name}</td>
        <td>${news.category.name}</td>
        <td>
          <button class="btn btn-primary editNew" data-id = "${news.id}">Edit</button>
          <button class="btn btn-danger deleteNew" data-id = "${news.id}">Delete</button>
        </td>
      </tr>        
        `

        tbody.addEventListener("click", (e) => {
          if (e.target.classList.contains("deleteNew")) {
            const dataID = e.target.getAttribute("data-id")
            eliminarNew(dataID);
          }

          if (e.target.classList.contains("editNew")) {
            const dataID = e.target.getAttribute("data-id")
            console.log("editando..");
            printEditNew(dataID);
          }


        })



        
    });    
}