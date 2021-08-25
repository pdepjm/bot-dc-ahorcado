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
      // TODO: Contemplar espacios?
      if (this._descubrio(caracter.toLowerCase())) {
        frase += caracter
      } else {
        frase += '*'
      }
    }
    return frase
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