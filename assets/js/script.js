//função para mostrar a area de contato
function show() {

    if (document.querySelector('.contact-us').style.display == 'flex') {
        document.querySelector('.contact-us').style.display = 'none'
    } else {
        document.querySelector('.contact-us').style.display = 'flex'

    }
    console.log('foi')
}