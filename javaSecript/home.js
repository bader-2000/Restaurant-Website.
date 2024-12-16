


const nameheader = ['wedding services','Corporate Catering', 'Cocktail Reception','Bento Catering',
    'Bento Catering','Pub Party','Home Delivery','Sit-down Catering','Buffet Catering'];

const nameIconsClass = [
    'fas fa-pizza-slice fa-7x text-primary mb-4',
    'fas fa-cheese fa-7x text-primary mb-4',
    'fas fa-hotdog fa-7x text-primary mb-4',
    'fas fa-hamburger fa-7x text-primary mb-4',
    'fas fa-wine-glass-alt fa-7x text-primary mb-4',
    'fas fa-walking fa-7x text-primary mb-4',
    'fas fa-utensils fa-7x text-primary mb-4',
    'fas fa-wine-glass-alt fa-7x text-primary mb-4',
];

const cardContainer = document.getElementById('cardsecm4');

console.log("Welome");
for (let i = 1; i <= 8; i++) {
    const card = document.createElement('div');
    card.classList.add('crd');

    const link = document.createElement('a');
    link.href = '#';
    const icon = document.createElement('i');
    icon.className = nameIconsClass[i % nameIconsClass.length];
    link.appendChild(icon);

    const heading = document.createElement('h2');
    
    heading.textContent = nameheader[i % nameheader.length];

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Contrary to popular belief, ipsum is not simply random.';

    const button = document.createElement('button');
    button.classList.add('btn1');
    button.type = 'button';
    button.textContent = 'Read More';

    card.appendChild(link);
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(button);


    cardContainer.appendChild(card);



}



const elements = document.querySelectorAll('main, section, .card, .btn, .textSE1, .ditelsAb, .cardsecm4, iframe');


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          
            entry.target.classList.add('slide-in');
          
        }
    });
}, {
    threshold: 0.5 
});

elements.forEach(element => {
    observer.observe(element);
});
