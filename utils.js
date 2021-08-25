function esLetra(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);       
}

module.exports = { esLetra }