const coleccionPalabras = ['Árbol', 'Bicicleta', 'Caja',
    'Delfín',
    'Elefante',
    'Flor',
    'Gato',
    'Helado',
    'Isla',
    'Jirafa',
    'Koala',
    'Lápiz',
    'Mariposa',
    'Nube',
    'Oso',
    'Pez',
    'Queso',
    'Rana',
    'Sol',
    'Tigre',
    'Uva',
    'Vela',
    'Waffle',
    'Xilófono',
    'Yate',
    'Zanahoria',
    'Aro',
    'Ola',
    'Ñu',
    'Zorro']


/** @type {HTMLButtonElement} */
const btnInicio = document.querySelector('.btn-inicio')

/** @type {HTMLDivElement} */
const timer = document.querySelector('.timer')

let intervalId = -1


/** @type {string[]} */
let palabras = []
////////////////////////////////////////////////////////////////////////////////
function iniciarJuego() {
    // Desordenar y quedarnos con 9
    coleccionPalabras.sort( () => 0.5 - Math.random() )
    palabras = coleccionPalabras.slice(0, 9)

    const divPalabras = document.querySelectorAll('.tablero__palabra')
    divPalabras.forEach((e, i)=>{
        e.textContent = palabras[i]
    })

    btnInicio.style.display = 'none'
    timer.style.display = 'flex'

    let time = 3
    timer.textContent = time
    intervalId = setInterval(()=>{
        timer.textContent = time
        if (time == 0) {
            clearInterval(intervalId)
        }
        time--

    }, 1000)
}


////////////////////////////////////////////////////////////////////////////////




btnInicio.addEventListener('pointerdown', () => {
    iniciarJuego()
})