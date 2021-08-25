const assert = require('assert')
const { esLetra } = require('../utils')


describe('Utils', () => {
    describe('es letra', () => {
        it('una frase no es una letra', () => assert.ok(!esLetra('hola que tal')))
        
        it('un caracter especial no es una letra', () => assert.ok(!esLetra('2')))

        it('un letra es letra', () => assert.ok(esLetra('a')))
    })
})