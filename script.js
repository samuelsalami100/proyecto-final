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

/** @type {HTMLDivElement} */
const divPalabra = document.querySelector('.palabra')

let intervalId = -1

let mostrandoTodas = false

/** @type {string[]} */
let palabras = []

let secuenciaPalabras = []
let acertadas = 0
////////////////////////////////////////////////////////////////////////////////
function iniciarJuego() {
    divGameOver.classList.remove('game-over--victory', 'game-over--lose')
    timer.classList.remove('timer--warning')

    // Desordenar y quedarnos con 9
    coleccionPalabras.sort( () => 0.5 - Math.random() )
    palabras = coleccionPalabras.slice(0, 9)

    secuenciaPalabras = [...palabras]
    secuenciaPalabras.sort( () => 0.5 - Math.random() )


    divPalabras.forEach((e, i)=>{
        e.textContent = palabras[i]
    })

    btnInicio.style.display = 'none'
    timer.style.display = 'flex'

    let time = 1
    timer.textContent = time
    mostrandoTodas = true
    intervalId = setInterval(()=>{
        time--
        timer.textContent = time
        if (time == 0) {
            clearInterval(intervalId)
            mostrandoTodas = false
            ocultarPalabras()
            iniciarTimer(30)
        }
    }, 1000)

    divPalabras.forEach((div,i) => {
        div.addEventListener(
            'pointerdown', ()=> {

                if (mostrandoTodas) { return }

                alSeleccionarPalabra(div)

            }
        )
    })
}

function ocultarPalabras() {
    divPalabras.forEach((e,i)=> e.textContent = (i+1))
}

function iniciarTimer(segundos) {
    clearInterval(intervalId) // por precaución

    siguientePalabra()
    
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
    
    divPalabra.textContent = ''
    timer.style.display = 'none'
    btnInicio.style.display = 'block'

    if (victoria) {
        divGameOver.classList.add('game-over--victory')
    } else {
        divGameOver.classList.add('game-over--lose')
    }
}

function siguientePalabra() {
    const sig = secuenciaPalabras[acertadas]
    divPalabra.textContent = sig
    console.log(divPalabra)
}

/**
 * @param {number} numero 
 * @param {HTMLDivElement} div 
 */
function alSeleccionarPalabra(div) {
    const seleccion = +div.textContent - 1
    const palabra = palabras[seleccion]
    const objetivo = secuenciaPalabras[acertadas]

    if (palabra == objetivo) {
        div.textContent = palabra
        acertadas++
        if (acertadas == 9) {
            return
        }
    } else {
        acertadas = 0
        ocultarPalabras()
    }

    siguientePalabra()
}


////////////////////////////////////////////////////////////////////////////////




btnInicio.addEventListener('pointerdown', () => {
    iniciarJuego()
})