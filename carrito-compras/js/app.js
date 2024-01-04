let carritoDeCompras = [];

listaProductos = document.querySelector("#lista-productos")
card = document.querySelector(".card");
carrito = document.querySelector("#carrito");
vaciarCarrito = document.querySelector("#vaciar-carrito")


carrito.addEventListener("click", (e)=>{
    console.log("Le diste clic al container carrito");
});


vaciarCarrito.addEventListener("click", (e)=>{
    console.log("Le diste clic al vaciar carrito");
});





listaProductos.addEventListener("click", (e)=>{


    let botonCarrito = document.querySelector(".agregar-carrito");

    let elementos = e.target.classList.contains("agregar-carrito")

    if (elementos === true) {

        let id = e.target.getAttribute("data-id")


        let obtenerValores = e.target.parentElement.parentElement;


        let imagen = obtenerValores.querySelector(".imagen-curso").getAttribute("src"),
            nombre = obtenerValores.querySelector("h4").innerText,
            precio = obtenerValores.querySelector(".precio span").innerText;


            agregarProductosAlCarrito(imagen, nombre, precio, id);

            listarProductos();
    }
});


function agregarProductosAlCarrito(imagen, nombre, precio, id) {
    producto = {
        imagen: imagen,
        nombre: nombre,
        precio: precio, 
        cantidad: 1,
        id: id
    };

    if (condition) {
        
    }

    //Quedamos acá, ver como hacer comprobación de cantidad.



    carritoDeCompras.push(producto)


}


function listarProductos() {
    let tbody = document.querySelector("tbody");

    tbody.innerHTML = "";

    carritoDeCompras.forEach((producto)=>{


        
        let element = document.createElement("tr")
        
        element.innerHTML = `
            <th><img src = "${producto.imagen}" width="50px" height="50px"></img></th>
            <th>${producto.nombre}</th>
            <th>${producto.precio}</th>
            <th>${producto.cantidad}</th>
        `

        tbody.appendChild(element);
    });

}


// Paso 5: Listar productos
//  Debes crear una función que se encargue de listar los productos, dentro de
// ella vas a seguir los siguientes pasos.
// o Vas a limpiar el cuerpo de la tabla en el carrito de compras.
// o Vas a recorrer la lista de productos en el carrito.
// o En cada iteración debes crear un elemento “tr’ HTML
// (createElement)
// o Una vez creado el elemento debes inyectar en este las respectivas
// columnas con la información, adicional debes incluir una columna
// que contenga un botón, se debe adicionar a este botón la clase
// “borrar-curso” y además un atributo llamado “data-id” el cual
// tendremos que inyectarle el id del producto que se está recorriendo
// en el momento.
// o Finalmente debes seleccionar el cuerpo de la tabla del carrito y
// agregar el elemento creado anteriormente con la propiedad
// (appendChild)