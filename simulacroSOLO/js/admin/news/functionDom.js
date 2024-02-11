import {deleteNew, editModalNew} from "../news/index.js";

const tbody = document.getElementById("news-tbody");


export function printNews(data){
    data.forEach(element => {
        tbody.innerHTML += ` 
        <tr>
                <td>
                  <img src="${element.url}" class="rounded-circle">
                </td>
                <td>${element.name}</td>
                <td>${element.contentNotice}</td>
                <td>${element.publicationDate}</td>
                <td>${element.user.name}</td>
                <td>${element.category.name}</td>
                <td>
                  <button class="btn btn-primary editNew" data-id = "${element.id}"> Edit</button>
                  <button class="btn btn-danger deleteNew"  data-id = "${element.id}"> Delete</button>
                </td>
        </tr>

        `
    });


    tbody.addEventListener("click", (e) => {
      if (e.target.classList.contains("deleteNew")) {
       const dataId = e.target.getAttribute("data-id")
       deleteNew(dataId);
      }

      if (e.target.classList.contains("editNew")) {
        const dataId = e.target.getAttribute("data-id")
        editModalNew(dataId);
       }
    })
}



    // [
    //     {
    //     id: "60d4",
    //     name: "dsaasdsa",
    //     url: "dsaasddsaads",
    //     categoryId: "004a",
    //     contentNotice: "asdasdasdasddsa",
    //     userId: "d371",
    //     publicationDate: "2024-02-11",
        //     category: {
        //     name: "saassdsasdasdads",
        //     description: "assaas",
        //     id: "004a"
        //     },
        //     user: {
        //     id: "d371",
        //     name: "Your Name",
        //     email: "test@riwi.io",
        //     password: "riwi2024"
        //     }
        //     }
    //     ]