let carritoDecompras = [];

const container = document.getElementById("lista-productos");



container.addEventListener("click", (e)=>{
    e.preventDefault();
    let boton = e.target.classList.contains("agregar-carrito");

    if (boton === true) {
        const id = e.target.getAttribute("data-id");      
        const card = e.target.parentElement.parentElement;
        
        const imagen = card.querySelector(".imagen-curso").src
        const titulo = card.querySelector("h4").textContent
        const precio = card.querySelector(".precio span").textContent

    objetoDelCarrito(imagen, titulo, precio, id);
    inyectarHTML();

    }

})

function objetoDelCarrito(imagen, titulo, precio, id) {
    objeto = {
        imagen: imagen, 
        titulo: titulo,
        precio: precio,
        cantidad: 1,
        id: id
    };

    //Si no da, cambiar por objeto.id 
    const verificarCantidad = carritoDecompras.find((producto) => producto.id === id);

    if (verificarCantidad) {
        verificarCantidad.cantidad += 1;
    } else{
        carritoDecompras.push(objeto);
    };

}


function inyectarHTML() {
    tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    carritoDecompras.forEach(producto => {
        tbody.innerHTML += `
        <tr>
            <td><img src="${producto.imagen}" alt="" width = "60px" height = "60px"></td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
            <button class="eliminar-producto" data-id="${producto.id}">
                    Eliminar
                </button></td>
        </tr>
        `
    });
};



