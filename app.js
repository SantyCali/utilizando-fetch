
/* Contenedor reenderizado para verlo en el html */
const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("producto-contenedor")

//Recorrido para reenderizar los productos con forEach para que vaya creando un nuevo producto
    productos.forEach(producto => {
        //Creo un div
        const div = document.createElement("div")
        //Agrego la clase card de bootstrap
        div.classList.add("card")
        //Creo las tarjetas en el html
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.numero}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Agregar</button>
                            </div>
                        </div>`

//Coloco el appenChild para crear un nuevo hijo dentro del contenedor padre
        contenedorProductos.appendChild(div)
        
        const boton = document.getElementById( `boton${producto.id}` )

    //Agrego la alerta bonita para agregar productos
        boton.addEventListener('click', ()=> {
              carritoIndex(producto.id)    
                Swal.fire({
                  title: "Genial!",
                  text: `Se agrego el numero ${producto.numero}`,
                  icon: "success",
                  confirmButtonText: "Bien!",
                });
            
              
        })

localStorage.setItem("informacion", JSON.stringify(boton));
    })
}

//Activo la función y agrego el array
mostrarProductos(productos)



