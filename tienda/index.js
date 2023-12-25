const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


/////////////////////////////////////

// Selectores

//Contenedor general carrito de compras
const cartInfo = document.querySelector(".cart-product");
// Contenedor de todo lo que esta dentro del carrito: cantidad, zapatos, precios, x  
const rowProduct = document.querySelector(".row-product");

//Lista de todos los contenedores de productos 
const productsList = document.querySelector(".container-items")
// Total a pagar
const totalAPagar = document.querySelector(".total-pagar")
// Cantidad de productos
const contadorProductos = document.querySelector("#contador-productos") 







//Variable de arreglo de los productos
let allProducts = [];




function obtenerInformacion() {
    rowProduct.getAttribute
}


//Estudiar
productsList.addEventListener("click", e => {
    if (e.target.classList.contains("btn-add-cart")) {
        const product = e.target.parentElement
        
        const infoProduct = {
            quantity: 1,
            title: product.querySelector("h2").textContent,
            price: product.querySelector(".price").textContent
        }

        const exits = allProducts.some(product => product.title === infoProduct.title);

        if (exits) {
            //¿Por qué usamos map en este caso?
            // Usamos map porque necesitamos que se cree un nuevo arreglo adoptando todo el contenido del anterior, pero en esta caso haciendo una validacion con el some, para que aparte del nuevo arreglo que nos va a dar, nos lo dé agregandole a cada nuevo arreglo la cantidad correspondiente
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            })
            // ¿Por qué usamos spread en este caso?
            // Dado que map siempre crea un nuevo arreglo, usamos spread para que allProducts adopte este nuevo arreglo manteniendo sus valores actuales. De esta manera, cada iteración del map parte del estado más reciente, asegurando que la cantidad se sume adecuadamente en cada recorrido.

            allProducts = [...products]
            console.log(allProducts);
        }else{
            allProducts = [...allProducts, infoProduct];

            console.log(allProducts);
        }
        showHTML();

    }


});





//Eliminar producto 
rowProduct.addEventListener("click", e =>{
    if (e.target.classList.contains("icon-close")) {
        const productElement = e.target.parentElement;
        const title = productElement.querySelector("p").textContent;

        allProducts = allProducts.filter(
        product => product.title !== title
        )

        showHTML();
    }



    
})




// Funcion para mostrar html
const showHTML = () =>{

    //Limpiar carrito de compras
    rowProduct.innerHTML = "";

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product =>{
        const containerProduct = document.createElement("div");
        containerProduct.classList.add("cart-product");

        containerProduct.innerHTML = `							
        <div class="info-cart-product">
        <span class="cantidad-producto-carrito">${product.quantity}</span>
        <p class="titulo-producto-carrito">${product.title}</p>
        <span class="precio-producto-carrito">${product.price}</span>
    </div>
    <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
        >		
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    </div>`

    rowProduct.append(containerProduct);

    total = total + parseInt(product.quantity * product.price.slice(1))
    totalOfProducts = totalOfProducts + product.quantity
    })

    totalAPagar.innerText = `$${total}`;
    contadorProductos.innerText = totalOfProducts;
}




