
const button = document.createElement('button');
button.textContent = 'Barbie Outfits';

const image = document.createElement('img');
image.style.width = '300px';
image.style.height = '400px';
image.src = 'https://ih1.redbubble.net/image.5101287979.8678/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';

document.body.appendChild(button);
document.body.appendChild(image);

const images = [
    'https://i.pinimg.com/564x/01/0a/76/010a765b053389d51c21c45b115b44d6.jpg',
    'https://hollywoodlife.com/wp-content/uploads/2022/10/barbie-halloween-costume-embed1.jpg?resize=620%2C827',
    'https://i.insider.com/659b5295ec62ab5daf8162d0?width=700',
];
let currentIndex = 0;

button.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];µ
});