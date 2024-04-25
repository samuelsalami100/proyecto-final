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


/** @type {string[]} */
let palabras = []
////////////////////////////////////////////////////////////////////////////////
function iniciarJuego() {
    // Desordenar y quedarnos con 9
    coleccionPalabras.sort( () => 0.5 - Math.random())
    palabras = coleccionPalabras.slice(0, 9)

    
}
////////////////////////////////////////////////////////////////////////////////



/** @type {HTMLButtonElement} */
const btn = document.querySelector('.btn-inicio')

btn.addEventListener('pointerdown', () => {
    iniciarJuego()
})