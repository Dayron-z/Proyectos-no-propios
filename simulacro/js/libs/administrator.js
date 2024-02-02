//Selectores addNewCategory
const buttonSaveCategory = document.getElementById("modal-content");


buttonSaveCategory.addEventListener("submit", (e) => {
    e.preventDefault();
    crearCategoryData();
})


async function crearCategoryData() {
    const nameCategory = document.getElementById("nameCategory");
    const descriptionCategory =  document.getElementById("descriptionCategory");
    console.log(descriptionCategory);

    const URL = "http://localhost:3000/categories";
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"name": nameCategory.value, "description": descriptionCategory.value})
    });
}

