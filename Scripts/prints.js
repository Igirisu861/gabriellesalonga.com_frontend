
async function fetchPrints(){
    try{
        const response = await fetch('http://localhost:4000/api/prints/');
        const prints = await response.json();
        return prints;
    }catch (error) {
        console.error('Error fetching prints', error);
    }
}

async function updateCardInfo(){
    const prints = await fetchPrints();
    const cards = document.querySelectorAll('.card-body');

    cards.forEach((card, index) => {
        const titleElement = card.querySelector('.card-title');
        const priceElement = card.querySelector('.card-text');

        titleElement.textContent = prints[index].title;
        priceElement.textContent = `$${prints[index].price}`;
    });
}

async function updateAllModalsContent() {
    try {
        const response = await fetch('http://localhost:4000/api/prints/');
        const prints = await response.json();
        
        prints.forEach((print, index) => {
            const modal = document.querySelector(`#print-modal${index + 1}`); 
            if (modal) {
                const modalTitleElement = modal.querySelector('.modal-title');
                modalTitleElement.textContent = print.title;
                
                const price = modal.querySelector('.price');
                price.textContent = print.price;

                const dropdownMenu = modal.querySelector('.dropdown-menu');
                dropdownMenu.innerHTML = ''; 
                
                print.sizes.forEach(size => {
                    const dropdownItem = document.createElement('li');
                    dropdownItem.innerHTML = `<a class="dropdown-item" href="#" id="sizeOption">${size}</a>`;
                    dropdownMenu.appendChild(dropdownItem);

                    dropdownItem.addEventListener('click', function(event) {
                        selectedOption = event.target.textContent;
                    });
                });

            }
        });
    } catch (error) {
        console.error('Error updating all modals content', error);
    }
}



document.addEventListener('DOMContentLoaded', () => {
    updateCardInfo();
    updateAllModalsContent();
});

