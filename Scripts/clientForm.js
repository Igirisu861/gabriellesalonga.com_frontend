let cliente = {};

function agregarCliente(formData) {
    cliente = formData;
    actualizarTablaCliente();
}

function actualizarTablaCliente() {
    const tablaCliente = document.getElementById('tablaCliente');
    tablaCliente.innerHTML = `<tr><td>${cliente.name}</td><td>${cliente.last_name}</td><td>${cliente.email}</td><td>${cliente.phone}</td><td>${cliente.address}</td></tr>`;
}

function clientSub(){
    document.getElementById('clientForm').addEventListener('submit', function(event){
        event.preventDefault();
        
        const formData={
            name: document.getElementById('name').value,
            last_name: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address:document.getElementById('address').value
        };
        fetch('https://gabriellesalonga-backend.onrender.com/api/clients/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data=>{
            console.log(data);
            alert('Information submitted!');
            agregarCliente(formData); // Llamar a la función agregarCliente si la solicitud es exitosa
        })
        .catch(error=>{
            console.error('There was a problem with fetching:', error);
            alert('Email exists or data incomplete, try again');
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    clientSub();
});



