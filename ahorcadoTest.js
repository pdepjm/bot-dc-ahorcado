const assert = require('assert')
const { Ahorcado } = require('./ahorcado')

describe('Ahorcado', () => {
  const FRASE = 'Palabra'
  let ahorcado

  beforeEach(() => {
    ahorcado = new Ahorcado(FRASE)
  })

  describe('al iniciar', () => {
    it('frase', () =>
      assert.strictEqual(ahorcado.frase(), '*******')
    )
    it('horca', () =>
      assert.strictEqual(ahorcado.horca(), 0)
    )
  })

  describe('al descubrir una letra correcta', () => {
    beforeEach(() => {
      ahorcado.descubrir('a')
    })

    it('frase', () =>
      assert.strictEqual(ahorcado.frase(), '*a*a**a')
    )
    it('horca', () =>
      assert.strictEqual(ahorcado.horca(), 0)
    )
  })

  describe('al descubrir una letra incorrecta', () => {
    beforeEach(() => {
      ahorcado.descubrir('z')
    })

    it('frase', () =>
      assert.strictEqual(ahorcado.frase(), '*******')
    )
    it('horca', () =>
      assert.strictEqual(ahorcado.horca(), 1)
    )
  })

  describe('es la frase', () => {
    // TODO: Es case sensitive?
    it('correcta', () =>
      assert.ok(ahorcado.esLaFrase('Palabra'))
    )
    it('incorrecta', () =>
      assert.ok(!ahorcado.esLaFrase('Ciruela'))
    )
  })

})