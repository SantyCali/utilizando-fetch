const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};

//Numeros del sorteo
const productos = [
{
    id:1,
    numero:"23",
    desc:"Sorteo",
    precio: 1000,
    img:'src/img/num-23.jpg',
    cantidad:1
},
{
    id:2,
    numero:"03",
    desc:"Sorteo",
    precio: 900,
    img:'src/img/num-03.jpg',
    cantidad:1
},
{
    id:3,
    numero:"06",
    desc:"Sorteo",
    precio: 800,
    img:'src/img/num-06.jpg',
    cantidad:1
},
{
    id:4,
    numero:"44",
    desc:"Sorteo",
    precio: 700,
    img:'src/img/num-44.jpg',
    cantidad:1
},
{
    id:5,
    numero:"07",
    desc:"Sorteo",
    precio: 850,
    img:'src/img/num-07.jpg',
    cantidad:1
},

];


//Agrego el localStorage
for(const producto of productos){
    guardarStorage(producto.id, JSON.stringify(producto));
}




edad = prompt("Ingrese su edad");

  /* Aca hago el uso del operador Ternario */
edad >= 18 ? alert("Podes entrar al sorteo") : alert("No podes entrar");




/* Botón para ver la hora en la que el usuario ingresó, usando el operador and */
let ingreso1 = document.getElementById("ingreso1");
let ingreso2 = edad >= 18 && new Date();

const boton6 = document.getElementById("boton6")


//Agrego la alerta bonita
boton6.addEventListener('click', ()=> {
    Swal.fire({
        title: "Ingreso y Edad",
        text: `Ingreso: ${ingreso2} Edad: ${edad}`,
        icon: "Exito",
        confirmButtonText: "Bien!",
      });
})


/* Botón para poner el nombre usando el operador or */
let nombre = document.getElementById("nombre1");
const boton7 = document.getElementById("boton7")

boton7.addEventListener('click', ()=> {
   let nombre = prompt("Ingrese su nombre");
 alert(nombre || "El usuario no existe");   
 



//Objeto con Spread
let persona3 = {nombre: `${nombre}`, edad: `${edad}`}

let objPersona = {...persona3}
console.log(objPersona);
 
})


//Utilizo el fetch para traer los numeros preferidos
fetch("./data.json")
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `
      <h1 class="item-nombre">${item.nombre}</h1>
      <h2 class="item-id">ID: ${item.id}</h2>
      <img src="${item.img}" class="item-img">
    `;
    listado.append(li);
  });
})