const { IMAGENES_AHORCADO } = require('./imagenes-ahorcado')

const MAX_CANTIDAD_DE_VIDAS = IMAGENES_AHORCADO.length

class Ahorcado {
  letras = []

  constructor(adivinanza) {
    this.adivinanza = adivinanza
  }

  descubrir(letra) {
    if (this._descubrio(letra) || this._perdio()) return
    this.letras.push(letra)
  }

  _perdio() {
    return this.horca() >= MAX_CANTIDAD_DE_VIDAS
  }

  _descubrio(letra) {
    return this.letras.includes(letra)
  }

  frase() {
    let frase = ''
    for (const caracter of this.adivinanza) {
      if (this._descubrio(caracter.toLowerCase()) || this._esCaracterEspecial(caracter)) {
        frase += caracter
      } else {
        frase += '*'
      }
    }
    return frase
  }

  _esCaracterEspecial(caracter) {
    return [' ', '¡', '!', '¿', '?'].includes(caracter)
  }

  horca() {
    const letrasErradas = this.letras.filter(letra => !this._contiene(letra))
    return letrasErradas.length
  }

  _contiene(letra) {
    return this.adivinanza.toLowerCase().includes(letra)
  }

  esLaFrase(frase) {
    return this.adivinanza === frase
  }
}

module.exports = { Ahorcado }