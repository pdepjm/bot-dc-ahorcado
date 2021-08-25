const assert = require('assert')
const { Ahorcado } = require('../ahorcado')
const { FRASES, proximaFrase } = require('../frases')
const { imagenSegunLetrasErradas } = require('../imagenes-ahorcado')

describe('Ahorcado', () => {
  const FRASE = '¿Una frase!'
  let ahorcado

  beforeEach(() => {
    ahorcado = new Ahorcado(FRASE)
  })

  describe('al iniciar', () => {
    it('frase', () =>
      assert.strictEqual(ahorcado.frase(), '¿*** *****!')
    )
    it('horca', () =>
      assert.strictEqual(ahorcado._cantidadDeLetrasErradas(),0)
    )
  })

  describe('al descubrir una letra correcta', () => {
    beforeEach(() => {
      ahorcado.descubrir('a')
    })

    it('frase', () =>
      assert.strictEqual(ahorcado.frase(), '¿**a **a**!')
    )

    it('cantidad de letras erradas', () =>
      assert.strictEqual(ahorcado._cantidadDeLetrasErradas(), 0)
    )
  })

  describe('al descubrir una letra incorrecta', () => {
    beforeEach(() => {
      ahorcado.descubrir('z')
    })

    it('frase', () =>
      assert.strictEqual(ahorcado.frase(), '¿*** *****!')
    )
    it('cantidad de letras erradas', () => 
      assert.strictEqual(ahorcado._cantidadDeLetrasErradas(), 1)
    )
  })

  describe('es la frase', () => {
    // TODO: Es case sensitive?
    it('correcta', () =>
      assert.ok(ahorcado.esLaFrase('¿Una frase!'))
    )
    it('incorrecta', () =>
      assert.ok(!ahorcado.esLaFrase('Ciruela'))
    )
  })

  it('descubrir la misma letra no hace nada', () => {
    ahorcado.descubrir('z')
    ahorcado.descubrir('z')
    assert.strictEqual(ahorcado._cantidadDeLetrasErradas(), 1)
  })

  it('horca dibuja', () =>
    assert.strictEqual(ahorcado.horca(),imagenSegunLetrasErradas(0))
  )

  describe('perdio', () => {
    beforeEach(() => {
      ahorcado.descubrir('z')      
      ahorcado.descubrir('x')      
      ahorcado.descubrir('y')      
      ahorcado.descubrir('w')      
      ahorcado.descubrir('m')      
      ahorcado.descubrir('l')
      ahorcado.descubrir('o')
    })
    it('si erra mas letras que imagenes pierde', () =>      
      assert.ok(ahorcado._perdio())
    )

    it('si perdio descubrir no hace nada', () => {
      ahorcado.descubrir('a')
      assert.strictEqual(ahorcado.frase(), '¿*** *****!')
    })
  })

  it('la proxima frase es una aleatoria de la lista de frases', () => 
    assert.ok(FRASES.includes(proximaFrase()))
  )
})