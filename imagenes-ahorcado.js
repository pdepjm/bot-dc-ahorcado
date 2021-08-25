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

function imagenSegunLetrasErradas(cantidadLetrasErradas){
    return IMAGENES_AHORCADO[cantidadLetrasErradas]
}

module.exports = {imagenSegunLetrasErradas}



