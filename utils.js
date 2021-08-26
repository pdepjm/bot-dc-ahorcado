function esLetra(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
}

function formatearComoBloqueDeCodigo(mensaje) {
    return `\`\`\`\n${mensaje}\n\`\`\``
}

function formatearComoCodigo(mensaje) {
    return `\`${mensaje}\``
}

function formatearComoParam(nombre) {
    return `_${nombre}_`
}

function formatearComoImportante(texto) {
    return `**${texto}**`
}

module.exports = { esLetra, formatearComoBloqueDeCodigo, formatearComoCodigo, formatearComoParam, formatearComoImportante }