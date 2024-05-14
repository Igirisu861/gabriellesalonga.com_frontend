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
        fetch('http://localhost:4000/api/clients/',{
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
        })
        .catch(error=>{
            console.error('There was a problem with fetching:', error);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    clientSub();
});


