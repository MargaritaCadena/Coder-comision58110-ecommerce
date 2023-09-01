//Productos de la tienda: 
let productos = [
    { id: "cama1", nombre: "cama perro", stock: 3, precio: 50000, imagen: "cama.jpg"},
    { id: "cama2", nombre: "cama  perro", stock: 5, precio: 60000, imagen: "cama2.jpg"},
    { id: "cama3", nombre: "cama perro", stock: 10, precio: 40000, imagen: "cama3.jpg"},
    { id: "collar1", nombre: "collares", stock: 9, precio: 30000, imagen: "collar-corbatin.jpg"},
    { id: "collar2", nombre: "collares", stock: 8, precio: 60000, imagen: "collar-rojo.jpeg"},
    { id: "comedero1", nombre: "comedero  perro", stock: 7, precio: 90000, imagen: "comedero1.jpg"},
    { id: "comedero2", nombre: "comedero perro", stock: 5, precio: 70000, imagen: "comedero2.jpg"},
    { id: "comedero3", nombre: "comedero perro", stock: 7, precio: 100000, imagen: "comedero3.jpg"},
    { id: "aro", nombre: "juguete perro", stock: 7, precio: 30000, imagen: "juguete-aro.jpg"},
    { id: "hueso", nombre: "juguete perro", stock: 8, precio: 20000, imagen: "juguete-hueso.jpg"},
    { id: "pelota", nombre: "juguete perro", stock: 6, precio: 30000, imagen: "juguete-pelota.jpg"},
    { id: "kit1", nombre: "Kit perro", stock: 4, precio: 150000, imagen: "kit1.jpg"},
    { id: "kit2", nombre: "Kit perro", stock: 3, precio: 120000, imagen: "kit2.jpg"},
    { id: "kit3", nombre: "Kit perro", stock: 6, precio: 110000, imagen: "kit3.jpg"}
]

//Crear una tarjeta por cada producto:

let tienda = document.getElementById("productos")

productos.forEach(producto => {
    let tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjeta"
    tarjetaProducto.innerHTML = `
        <img src="./images/${producto.imagen}"/>
        <h2>${producto.nombre}<h2>
        <p>Precio: $${producto.precio}<p>`
    tienda.appendChild(tarjetaProducto)
    console.log(tarjetaProducto)
})

