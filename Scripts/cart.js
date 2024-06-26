
let carrito = [];
let nombresArticulos = [];

function agregarArticulo(nombre,precio) {
    const articulo = { nombre,precio };
    carrito.push(articulo);
    nombresArticulos.push(nombre);
    actualizarTablaCarrito();
}

function eliminarArticulo(index) {
    carrito.splice(index, 1);
    nombresArticulos.splice(index, 1);
    actualizarTablaCarrito();
}

function actualizarTablaCarrito() {
    const tablaCarrito = document.getElementById('tablaCarrito');
    tablaCarrito.innerHTML = '';
    let subtotal = 0;

    carrito.forEach((articulo, index) => {
        subtotal += articulo.precio;
        tablaCarrito.innerHTML += `<tr><td>${articulo.nombre}</td><td>${articulo.precio.toFixed(2)}</td><td><button onclick="eliminarArticulo(${index})" class="btn btn-danger">Remove</button></td></tr>`;
    });

    tablaCarrito.innerHTML += `
        <tr>
            <td colspan="2"><strong>Subtotal</strong></td>
            <td><strong>${subtotal.toFixed(2)}</strong></td>
        </tr>`;
}

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'add-cart') {
        const modal = event.target.closest('.modal');
        const precio = parseFloat(modal.querySelector('.price').textContent);
        const titulo = modal.querySelector('.modal-title').textContent;
        agregarArticulo(titulo, precio);
    }
});