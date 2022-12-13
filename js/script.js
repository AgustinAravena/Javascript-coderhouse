let edad = Number(prompt("ingrese su edad"));

if(edad<18){
     alert("no podes tomar alcohol, como mucho podes tomar una limonada con menta  😉");

}else if(edad>=18){
    alert("Mostrar tienda completa");
}


const conAlcohol = [
    {
    id:1,
    nombre:"Fernet",
    precio:1500,
    stock:25,
    img: "img/Fernet(22).png"
    },
    {
    id:2,
    nombre:"Smirnoff",
    precio:1200,
    stock:15,
    img: "img/Smirnof (10).png"
    },
    {
    id:3,
    nombre:"Malibu",
    precio:1900,
    stock:18,
    img: "img/Malibu(7).png"
    },
    {
    id:4,
    nombre:"Heineken Pack X6",
    precio:1600,
    stock:10,
    img: "img/pngocean.com (13).png"
    },
    {
    id:5,
    nombre:"Black Label",
    precio:11000,
    stock:10,
    img: "img/blacklabel.png"
    },
    {
    id:6,
    nombre:"Grey goose",
    precio:12000,
    stock:8,
    img: "img/Greygoose.png"
    },
    {
    id:7,
    nombre:"Aperol",
    precio:1600,
    stock:10,
    img: "img/aperol.png"
    },
    {
    id:8,
    nombre:"Bacardi",
    precio:2900,
    stock:5,
    img: "img/bacardi.png"
    },
    {
    id:9,
    nombre:"Bombay Sapphire",
    precio:9000,
    stock:6,
    img: "img/bombay.png"
    },
    
]





const sinAlcohol = [
    {
        id: 1,
        nombre: "Coca-Cola",
        precio: 470,
        stock: 25
    },
    {
        id:2,
        nombre: "Sprite",
        precio: 450,
        stock: 20
    },
    {
        id:3,
        nombre: "Baggio",
        precio: 250,
        stock: 12
    },
    {
        id:4,
        nombre: "Fresh pomelo",
        precio: 190,
        stock: 30
    }
]

let carrito = [];
let btnCarrito = document.getElementById("verCarrito")


document.addEventListener("DOMContentLoaded", () => {
    let storageCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
    carrito = storageCarrito != null ? storageCarrito : [];
    cargarConAlcohol();
    btnCarrito.innerText = `Carrito (${carrito.length})`

 })


let contenerProdConAlcohol = document.getElementById("contenedorAlcohol");

function cargarConAlcohol(){

    contenerProdConAlcohol.innerHTML = "";

    conAlcohol.forEach((producto)=>{

        contenerProdConAlcohol.innerHTML += `
        <div class="col-3">
            <div class="card productCard">
              <img src="${producto.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <a href="#" id="${producto.id}" class="btn btn-primary btn2">Comprar</a>
              </div>
            </div>
          </div>
        
        `



    
    })

    let comprarBtn = document.querySelectorAll(".btn2");


comprarBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        comprarProducto(e.currentTarget.id);
    })
})

}

cargarConAlcohol();




function comprarProducto(id){

    const idProducto = parseInt(id);
    const producto = conAlcohol.find(pr => pr.id === idProducto);


    carrito.push(
        
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          stock: producto.stock,
          img: producto.img
        }
      )

    console.log(`Agregaste: ${producto.nombre} a tu carro de compras!`)

    btnCarrito.textContent = `Carrito (${carrito.length})`

    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
}


const contenedorCarrito = document.getElementById("contentCarrito")

function carritoCompleto(){

contenedorCarrito.innerHTML="<h1> Carrito de compras</h1>"
carrito.forEach((producto)=>{
let carritoContenido = document.createElement("div")
carritoContenido.className="card"
carritoContenido.style.width = "10%"

carritoContenido.innerHTML=`
<img src="${producto.img}"/>
<h3>${producto.nombre}</h3>
<p>${producto.precio}<p>
<button class="delete-producto btn btn-danger">Eliminar</button>
`;
let eliminar = carritoContenido.querySelector(".delete-producto")
    
    eliminar.addEventListener("click",()=>{
      borrarProducto(producto.id);
    })
    

contenedorCarrito.append(carritoContenido)
})
  
  
}


btnCarrito.addEventListener("click", carritoCompleto)



  const borrarProducto=(id)=>{
  
    console.log("eliminado")
    const foundId = carrito.find((element)=>element.id===id)
    console.log(foundId)
    carrito = carrito.filter((carritoId)=>{
      return carritoId != foundId;
    })
    carritoCompleto()
  }



 