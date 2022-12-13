


const url=("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")

const listaProductos = document.querySelector("#lista-productos")


fetch(url)
.then( (response)=> response.json() )
.then( (data)=> {
    console.log(data)

   data.forEach(productos => {
    listaProductos.innerHTML +=`
    <div class= "productosFinales">
    <h1> Productos Internacionales </h1>
    <h2> ${productos.strDrink} </h2>
    </div>
    `
   });

});
