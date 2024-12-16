


const nameheader = ['مقلوبه', 'كبسه', 'برياني', 'وصفتنا', 'فلافل حمص فول', ' منسف', 'مندي', 'زرب'];


const nameIconsClass = [
    '../images/imageHome/imagefood1.jpg',
    '../images/imageFood/image1.jpeg',
    '../images/imageFood/image2.jpeg',
    '../images/imageFood/image3.jpeg',
    '../images/imageFood/image4.jpeg',
    '../images/imageFood/image5.jpeg',
    '../images/imageFood/image6.jpeg',
    '../images/imageFood/image1.jpeg',
];

const cardContainer = document.getElementById('cardsecm4');

console.log("Welome");
for (let i = 1; i <= 8; i++) {
    const card = document.createElement('div');
    card.classList.add('crd');

    const img = document.createElement('img');
    img.src = nameIconsClass[i % nameIconsClass.length];


    const MCdivtxt = document.createElement('div');
    MCdivtxt.classList.add('txtCarf');

    const heading = document.createElement('h2');
    heading.textContent = nameheader[i % nameheader.length];

    const MCline = document.createElement('span');
    MCline.textContent = "--------------------------------------";

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Contrary to popular belief, ipsum is not simply random.';
    const prices = document.createElement('p');
    prices.classList.add('prices');
    prices.textContent = i*2.5+'$';

    const divbtn = document.createElement('div');
    divbtn.classList.add('btnD');

    const button1 = document.createElement('button');
    button1.classList.add('btn1');
    button1.type = 'button';
    button1.textContent = 'choose';

    const button2 = document.createElement('button');
    button2.classList.add('btn1');
    button2.type = 'choose';
    button2.textContent = 'buy';

    prices.addEventListener('mouseenter', function () {
        prices.style.fontSize = '24px'; 
        prices.style.color = '#C19859'; 
    });
    
    prices.addEventListener('mouseleave', function () {
        prices.style.fontSize = '16px'; 
        prices.style.color = '#000';
    });
    
    button2.addEventListener('click', function () {
        img.src = '../images/imageHome/imageTure.jpg';

    });
    button1.addEventListener('click', function () {
       img.src = nameIconsClass[i % nameIconsClass.length];;

    });

    MCdivtxt.appendChild(heading);
    MCdivtxt.appendChild(MCline);
    MCdivtxt.appendChild(paragraph);
    MCdivtxt.appendChild(prices);
    divbtn.appendChild(button1);
    divbtn.appendChild(button2);
    //-------------------
    card.appendChild(img);
    card.appendChild(MCdivtxt);
    card.appendChild(divbtn);



    cardContainer.appendChild(card);



}





const starterBtn = document.getElementById('starterBtn');
const mainCourseBtn = document.getElementById('mainCourseBtn');
const drinksBtn = document.getElementById('drinksBtn');
const offersBtn = document.getElementById('offersBtn');
const specialBtn = document.getElementById('specialBtn');

const menuHeading = document.querySelector('.secM1 .txtSM4 h1');
const menuSubheading = document.querySelector('.secM1 .txtSM4 h5');
const titleCard = document.querySelector('.secM2 .cardsecm4 .txtCarf');
const imageCard =document.querySelector('.secM2 .cardsecm4 img'); 
const pricesCard = document.querySelector('.secM2 .prices');


function changeMenuContent(title, subheading , pricesCard ,imageCard,titleCard) {
    menuHeading.textContent = title;  
    menuSubheading.textContent = subheading;  
    
}


starterBtn.addEventListener('click', function() {
    changeMenuContent('Delicious Starters', 'Taste the best starters in the world');
});

mainCourseBtn.addEventListener('click', function() {
    changeMenuContent('Main Course Delights', 'Hearty and delicious main courses');
});

drinksBtn.addEventListener('click', function() {
    changeMenuContent('Refreshing Drinks', 'Enjoy refreshing drinks and beverages');
});

offersBtn.addEventListener('click', function() {
    changeMenuContent('Special Offers', 'Exclusive offers and discounts');
});

specialBtn.addEventListener('click', function() {
    changeMenuContent('Our Special', 'Explore our most special dishes');
});



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
