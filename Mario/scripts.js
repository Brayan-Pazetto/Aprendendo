const form = document.querySelector('.fale-conosco')
const background = document.querySelector('.mascara-formulario')

function showForm() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    background.style.visibility = 'visible'
}
function hideform() {
    form.style.left = '-300px'
    form.style.transform = 'translateX(0%)'
    background.style.visibility = 'hidden'
}