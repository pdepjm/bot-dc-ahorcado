const FRASES = [
    'objetos',
    'a alf le gustan los carpinchos',
    'polimorfismo',
    'transparencia referencial',
    'siempre hay que testear',
    'volvio alf en forma de fichas',
    'lisa necesita frenos',
    'pattern matching',
    'consulta existencial',
    'recursividad',
    'no maten gatitos',
    'multiples respuestas no son listas',
    'dividir en subtareas'
]

function proximaFrase(){
    return FRASES[Math.floor(Math.random()*FRASES.length)];
}

module.exports = { FRASES, proximaFrase }