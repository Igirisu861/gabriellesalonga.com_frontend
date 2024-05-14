// script.js
let cliente = {};
let carrito = [];

function agregarCliente(formData) {
    cliente = formData;
    actualizarTablaCliente();
}

function agregarArticulo(nombre, precio) {
    const articulo = { nombre, precio };
    carrito.push(articulo);
    actualizarTablaCarrito();
}


function eliminarArticulo(index) {
    carrito.splice(index, 1);
    actualizarTablaCarrito();
}

function actualizarTablaCliente() {
    const tablaCliente = document.getElementById('tablaCliente');
    tablaCliente.innerHTML = `<tr><td>${cliente.name}</td><td>${cliente.last_name}</td><td>${cliente.email}</td><td>${cliente.phone}</td><td>${cliente.address}</td></tr>`;
}

function actualizarTablaCarrito() {
    const tablaCarrito = document.getElementById('tablaCarrito');
    tablaCarrito.innerHTML = '';
    carrito.forEach((articulo, index) => {
        tablaCarrito.innerHTML += `<tr><td>${articulo.nombre}</td><td>${articulo.precio}</td><td><button onclick="eliminarArticulo(${index})" class="btn btn-danger">Remove</button></td></tr>`;
    });
}

document.getElementById('clientForm').addEventListener('submit', function(event){
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value
    };
    agregarCliente(formData);
});

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'add-cart') {
        const modal = event.target.closest('.modal');
        const precio = parseFloat(modal.querySelector('.price').textContent);
        const titulo = modal.querySelector('.modal-title').textContent;
        agregarArticulo(titulo, precio);
    }
});


// Resto del código...


