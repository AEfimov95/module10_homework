const button = document.querySelector('.btn');
const icons = document.querySelectorAll('svg');

button.addEventListener('click', function (){
    icons.forEach(item=>{
        item.classList.toggle('d-none')
    })
})