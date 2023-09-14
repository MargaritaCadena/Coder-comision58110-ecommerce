//Orden del código: 1. Funciones 2. Variables 3. Código 

//Función que muestra una tarjeta para cada producto
function mostrarTarjetas(productosArray) {
        
    limpiarTarjetas()

    productosArray.forEach(producto => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "tarjeta"
        tarjetaProducto.innerHTML = `
            <img src="./images/${producto.imagen}"/>
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <button id="${producto.id}">Agregar al carrito</button>`
        tienda.appendChild(tarjetaProducto)

        let botonAgregar = document.getElementById(producto.id)
        botonAgregar.addEventListener("click", () => {guardarProducto(producto)})
    })
}

//Función que guarda las tarjetas seleccionadas por el usuario
function guardarProducto(producto) {
    Swal.fire({
        title: 'Producto Agregado al Carrito',
        icon: 'success'
    })
    productosCarrito.push(producto)
}

//Función que quita las tarjetas que ya están, agrega el HTML para el cambio del filtro y filtra.
function mostrarFiltro() {
    function filtrarProductos() {
        //Muestra la notificación de inicio del filtro con toastify
        Toastify({
            text: "Filtrando productos",
            duration: 3000, 
            position: "center",
            style:{
                background: "linear-gradient(to right, #b056ac, #b056ac)"
            }
        }).showToast();

        let inputFiltro = document.getElementById("inputFiltro")
        let resultado = totalProductos.filter(
            (producto)=> {
                return producto.nombre === inputFiltro.value
            }
        )

        sessionStorage.setItem("ultimaBusqueda", JSON.stringify(resultado));
        mostrarTarjetas(resultado)
    }
    function mostrarBusquedaAnterior() {
        mostrarTarjetas(JSON.parse(busquedaAnterior))
    }

    let filtro = document.createElement("div")
    let busquedaAnterior = sessionStorage.getItem("ultimaBusqueda")
    let botonFiltrar
    let botonBusquedaAnterior

    limpiarTarjetas()

    //Crear hijo que se va a mostrar cuando se escucha el evento clic
    filtro.className = "filtrar"
    filtro.innerHTML = `
        <h2>Filtrar Productos</h2>
        <input type="text" id="inputFiltro"/>
        <button id="botonFiltrar">Filtrar</button>
        ${busquedaAnterior ? '<button id="botonBusquedaAnterior">Repetir Busqueda Anterior</button>' : ""}`
    tienda.appendChild(filtro)

    //Se crea el evento clic cuando el usuario le da al boton filtrar

    botonFiltrar = document.getElementById("botonFiltrar")
    botonFiltrar.addEventListener("click", filtrarProductos)

    botonBusquedaAnterior = document.getElementById("botonBusquedaAnterior")
    if (botonBusquedaAnterior) {
        botonBusquedaAnterior.addEventListener("click", mostrarBusquedaAnterior)
    }
}

//Función que borra las tarjetas de la tienda
function limpiarTarjetas() {
    while (tienda.firstChild) {
        tienda.removeChild(tienda.firstChild);
    }
}

// Función que muestra las tarjetas en el carrito de compras. 
function mostrarTarjetasCarrito(productosArray) {
    productosArray.forEach(producto => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "tarjeta"
        tarjetaProducto.innerHTML = `
            <img src="./images/${producto.imagen}"/>
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>`
        tienda.appendChild(tarjetaProducto)
    })
    let elementoFinalizarCompra = document.createElement("div")
    elementoFinalizarCompra.innerHTML= `<button id="botonFinalizarCompra">Finalizar Compra</button>`
    tienda.appendChild(elementoFinalizarCompra)

    let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
    botonFinalizarCompra.addEventListener("click", finalizarCompra)
    }

//Función que muestra el carrito de compras 
function mostrarCarrito() {
    limpiarTarjetas()
    //ahora mostrar tarjetas guardadas en el carrito 
    mostrarTarjetasCarrito(productosCarrito)
    //let finalizarCompra = document.createElement 
}

//Función que finaliza la compra 
function finalizarCompra(){
    limpiarTarjetas()
    Swal.fire({
        title:'Compra finalizada',
        text: 'Gracias por tu compra',
        icon: 'info'
        })
}

//Productos de la tienda: 
let totalProductos = [
    { id: "cama1", nombre: "cama", stock: 3, precio: 50000, imagen: "cama.jpg"},
    { id: "cama2", nombre: "cama", stock: 5, precio: 60000, imagen: "cama2.jpg"},
    { id: "cama3", nombre: "cama", stock: 10, precio: 40000, imagen: "cama3.jpg"},
    { id: "collar1", nombre: "collar", stock: 9, precio: 30000, imagen: "collar-corbatin.jpg"},
    { id: "collar2", nombre: "collar", stock: 8, precio: 60000, imagen: "collar-rojo.jpeg"},
    { id: "comedero1", nombre: "comedero", stock: 7, precio: 90000, imagen: "comedero1.jpg"},
    { id: "comedero2", nombre: "comedero", stock: 5, precio: 70000, imagen: "comedero2.jpg"},
    { id: "comedero3", nombre: "comedero", stock: 7, precio: 100000, imagen: "comedero3.jpg"},
    { id: "aro", nombre: "juguete", stock: 7, precio: 30000, imagen: "juguete-aro.jpg"},
    { id: "hueso", nombre: "juguete", stock: 8, precio: 20000, imagen: "juguete-hueso.jpg"},
    { id: "pelota", nombre: "juguete", stock: 6, precio: 30000, imagen: "juguete-pelota.jpg"},
    { id: "kit1", nombre: "Kit perro", stock: 4, precio: 150000, imagen: "kit1.jpg"},
    { id: "kit2", nombre: "Kit perro", stock: 3, precio: 120000, imagen: "kit2.jpg"},
    { id: "kit3", nombre: "Kit perro", stock: 6, precio: 110000, imagen: "kit3.jpg"}
]
let productosCarrito = []
let tienda = document.getElementById("tienda")
let botonFiltrarProductos = document.getElementById("botonFiltrarProductos")
let botonPrincipal = document.getElementById("botonInicio")

mostrarTarjetas(totalProductos)

//Agregando eventos: Filtrar 
botonFiltrarProductos.addEventListener("click", mostrarFiltro)

//Agregando evento al botón de inicio 
botonPrincipal.onclick = () => {
    mostrarTarjetas(totalProductos)
}

// Carrito de compras 
botonCarritoCompras.addEventListener("click", mostrarCarrito)



