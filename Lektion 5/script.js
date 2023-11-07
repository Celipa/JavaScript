let id = 'divven'

const div = document.getElementById(id)
const divven = documen.querySelector('#' +id)
const divs = document.querySelectorAll('div')

divven.textConent = 'Det här är en ny text'

const button = document.querySelector('button')

function handleClick() {
    console.log('handle click')
}
button.addEventListener('click', () => {

    console.log('inline function')
})

button.addEventListener('click', handleClick)
button.removeEventListener('click', handleClick)
