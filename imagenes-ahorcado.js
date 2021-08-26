const IMAGENES_AHORCADO = [`
 +---+
 |   |
     |
     |
     |
     |
=========
`, `
 +---+
 |   |
 O   |
     |
     |
     |
=========
`, `
 +---+
 |   |
 O   |
 |   |
     |
     |
=========
`, `
 +---+
 |   |
 O   |
/|   |
     |
     |
=========
`, `
 +---+
 |   |
 O   |
/|\\\  |
     |
     |
=========
`, `
 +---+
 |   |
 O   |
/|\\\  |
/    |
     |
=========
`, `
 +---+
 |   |
 O   |
/|\\\  |
/ \\\  |
     |
=========
AHORCADO
`]

function dibujarHorca(cantidadLetrasErradas) {
     return IMAGENES_AHORCADO[cantidadLetrasErradas]
}

module.exports = { dibujarHorca, IMAGENES_AHORCADO }



