class Ahorcado {
  letras = []

  constructor(adivinanza) {
    this.adivinanza = adivinanza
  }

  descubrir(letra) {
    if (this._descubrio(letra)) return
    this.letras.push(letra)
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
    return this.letras.filter(letra => !this._contiene(letra)).length
  }

  _contiene(letra) {
    return this.adivinanza.toLowerCase().includes(letra)
  }

  esLaFrase(frase) {
    return this.adivinanza === frase
  }
}

module.exports = { Ahorcado }