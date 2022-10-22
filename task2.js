const button = document.querySelector('.btn');
const windowWidth = window.screen.width;
const windowHeight = window.screen.height;

button.addEventListener('click', function (){
    alert('Ваш размер экрана '+windowWidth+'x'+windowHeight)
})