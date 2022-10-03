//querySelector para seleccionar la clase modal-container
const modalContendor = document.querySelector(".modal-container")
//Al modal-container le agrego el abrirCarrito
const abrirCarrito = document.getElementById("open")
//Le agrego el cerrarCarrito
const cerrarCarrito = document.getElementById("cerrar")
//querySelector para seleccionar al modal-carrito
const modalCarrito = document.querySelector(".modal-carrito")


//Agrego el toggle para que lea si tengo el modal-active o no, haciendo click se activa la visibilidad
abrirCarrito.addEventListener("click", ()=>{
    modalContendor.classList.toggle("modal-active")
} )


//Activo el click cerrar el modal-active con el remove
cerrarCarrito.addEventListener("click", ()=>{
    modalContendor.classList.remove("modal-active")
})


//Llamo a cerrarCarrtio y le doy el evento click
modalContendor.addEventListener("click", ()=>{
    cerrarCarrito.click()
})


//Agrego el stopPropagation al evento para evitar que se cierre el modal-active al clickearlo
modalCarrito.addEventListener("click", (e)=>{
    e.stopPropagation()
})