// https://api.themoviedb.org/3/movie/550?api_key=d716bab9c8b9066325dc1c68a6e20a88

let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSigueinte  = document.getElementById("btnSiguiente");

btnSigueinte.addEventListener("click", () => {

    if (pagina < 1000) {
        pagina += 1
        cargarPeliculas();  
    }

})

btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
    pagina -= 1
    cargarPeliculas();
    }

  })


const cargarPeliculas = async() => {
    //Fetch nos regresa una promesa
    //Con el await le marcamos que esperemos que reciba una respuesta, hasta que no termine no puede continurar, al fetch ser una promesa es async, por ende la volvemos sincrona por medio del await.
    //Nota = Tenemos que volver la función asincrona con async.

    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d716bab9c8b9066325dc1c68a6e20a88&language=es-MX&page=${pagina}`);

        console.log(respuesta);



        //Validacion de errorres 

        if (respuesta.status === 200) {
            const datos = await respuesta.json();
        //Desde acá ya puedo acceder a los datos y hacer lo que quiera con ellos. Si por ejemplo yo deseara obtener el title, lo podría hacer con datos.title

        let peliculas = "";

        datos.results.forEach(pelicula => {
           peliculas += `
           
           <div class = "pelicula">
                <img class = "poster" src = "https://image.tmdb.org/t/p/w500${(pelicula.poster_path)}">

             <h3 class = "titulo">${pelicula.title}</h3>   
           </div>
           `
           console.log(pelicula.poster_path);
        });

        document.getElementById("contenedor").innerHTML = peliculas;


        } else if(respuesta.status === 401){
            console.log("La pusiste mal");
        } else if (respuesta.status === 404){
            console.log("La pelicula que buscas no existe");
        }else{
            console.log("Hubo un error y no sabemos que ocurrió");
        }

    } catch (error) {
        console.log(error);
    }

}

cargarPeliculas();


