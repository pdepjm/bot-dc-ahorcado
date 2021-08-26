const IMAGENES_AHORCADO =[`
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
`].map(convertirABloqueDeCodigo);

function convertirABloqueDeCodigo(mensaje){
    return `\`\`\`\n${mensaje}\n\`\`\``
}

function dibujarHorca(cantidadLetrasErradas){
    return IMAGENES_AHORCADO[cantidadLetrasErradas]
}

module.exports = { dibujarHorca, IMAGENES_AHORCADO }



