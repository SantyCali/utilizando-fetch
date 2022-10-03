//Array del carrito
const carritoDeCompras = []


const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito-contenedor")

 //buscamos con el find para que reenderice dentro del carrito
    const renderProductosCarrito = ()=> {
 //llamo al array de productos
        let producto  = productos.find( producto => producto.id == productoId )
//Agrego con el push al carrito el objeto producto
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);
        
    //Cantidad de cada objeto
        producto.cantidad = 1
    
    //Creo un div y le agrego una clase
        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

    //Div del producto que va a aprecer en el carrito
        div.innerHTML = `<p>${producto.numero}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>`;
        contenedorCarrito.appendChild(div)
    }

    
    renderProductosCarrito()
}





