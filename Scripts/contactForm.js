function contactSub(){
    document.getElementById('contactForm').addEventListener('submit', function(event){
        event.preventDefault();
        
        const formData = {
            full_name: document.getElementById('full_name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message:document.getElementById('message').value
        };
        fetch('https://gabriellesalonga-backend.onrender.com/api/contacts/',{
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
            alert('Message submitted!');
        })
        .catch(error=>{
            console.error('There was a problem with fetching:', error);
            alert('There was a problem with submitting information :(')
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    contactSub();
});


