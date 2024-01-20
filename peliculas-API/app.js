//Selectores 
const inputTitle = document.getElementById("search");
let timer;
const container = document.querySelector(".container-cards")
const button = document.querySelector(".button")

// Delegar el evento clic al contenedor
container.addEventListener("click", function(e) {
    // Verificar si el clic fue en un elemento con la clase "button"
    if (e.target.classList.contains("button")) {
        // Realizar la acción deseada cuando se hace clic en el botón
        console.log("Botón 'Ver más' clickeado");
        
        // Puedes acceder al elemento específico haciendo referencia a e.target
        // Por ejemplo, para obtener el título de la película asociada al botón clickeado:
        const title = e.target.parentElement

        console.log(title);



    }
});


// Eventos
inputTitle.addEventListener("input", (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
    //Llamado a la API
    CallToApi(e.target.value);
    }, 500)

})
//Los parametros en javascript son por referencia
async function CallToApi(title) {

    const URL = `https://www.omdbapi.com/?apikey=690d22ef&s=${title}`
    const response = await fetch(URL);
    const data = await response.json()
    printMovies(data.Search)
}

//Funcion para mostrar las peliculas en el html
function printMovies(movies) {
    cleanHTML();

    if (!movies) {
        const titleError = document.createElement("h2")
        titleError.textContent = "La pelicula no fue encontrada ಠ_ಠ"
        titleError.classList.add("alert")

        container.appendChild(titleError)

    }
    movies.forEach(movie => {
        container.innerHTML += `
        <div class="card">
                <h2 class="title-movie">${movie.Title}</h2>
                <img src="${movie.Poster}" alt="">

                
                <p>Año:<span>${movie.Year}</span></p>
                <p>Tipo:<span>${movie.Type}</span></p>
                <button class = "button">Ver más</button>

        </div>
        `
    });
}

function cleanHTML() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}