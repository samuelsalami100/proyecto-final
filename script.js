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

/** @type {HTMLDivElement[]} */
const divPalabras = document.querySelectorAll('.tablero__palabra')

/** @type {HTMLDivElement} */
const divGameOver = document.querySelector('.game-over')

let intervalId = -1


/** @type {string[]} */
let palabras = []
////////////////////////////////////////////////////////////////////////////////
function iniciarJuego() {
    divGameOver.classList.remove('game-over--victory', 'game-over--lose')
    timer.classList.remove('timer--warning')

    // Desordenar y quedarnos con 9
    coleccionPalabras.sort( () => 0.5 - Math.random() )
    palabras = coleccionPalabras.slice(0, 9)

    divPalabras.forEach((e, i)=>{
        e.textContent = palabras[i]
    })

    btnInicio.style.display = 'none'
    timer.style.display = 'flex'

    let time = 1
    timer.textContent = time
    intervalId = setInterval(()=>{
        time--
        timer.textContent = time
        if (time == 0) {
            clearInterval(intervalId)
            ocultarPalabras()
            iniciarTimer(2)
        }
    }, 1000)
}

function iniciarTimer(segundos) {
    clearInterval(intervalId) // por precaución
    
    timer.classList.remove('timer--warning')
    timer.textContent = segundos
    intervalId = setInterval(()=>{
        segundos--
        timer.textContent = segundos

        if (segundos <= 5) {
            timer.classList.add('timer--warning')
        }

        if (segundos == 0) {
            terminarJuego(false)
        }
    }, 1000)
}

function terminarJuego(victoria) {
    clearInterval(intervalId)
    
    timer.style.display = 'none'
    btnInicio.style.display = 'block'

    if (victoria) {
        divGameOver.classList.add('game-over--victory')
    } else {
        divGameOver.classList.add('game-over--lose')
    }
}

function ocultarPalabras() {
    divPalabras.forEach((e,i)=> e.textContent = i)
}

////////////////////////////////////////////////////////////////////////////////




btnInicio.addEventListener('pointerdown', () => {
    iniciarJuego()
})