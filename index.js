const { Client, Intents } = require('discord.js')
const { token, channelId } = require('./config.json')
const { Ahorcado } = require('./ahorcado')
const { dibujarHorca } = require('./imagenes-ahorcado')
const { proximaFrase } = require('./frases')
const { esLetra, formatearComoBloqueDeCodigo, formatearComoCodigo, formatearComoParam, formatearComoImportante } = require('./utils')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const canalDelJuego = channelId

let pings = 0
let ahorcado

function juegoNuevo() {
  ahorcado = new Ahorcado(proximaFrase())
}

const mensajeNoEntendido = mensaje => ({
  embeds: [{
    color: 15158332,
    title: `No entiendo el mensaje '${mensaje}'.`
  }]
})

const mensajeInicial = `
Vamos a jugar al ahorcado!
Para comunicarse conmigo deberan ${formatearComoImportante('enviarme mensajes')}, estos son los que entiendo: 
- ${formatearComoCodigo('frase')} -> Responderé con la frase actual, si descubren letras aparecera aquí.
- ${formatearComoCodigo('descubrir:')}${formatearComoParam(formatearComoCodigo('letra'))} -> Si la letra está en la frase ahora no estará mas oculta, ¡si no perederán una vida en la horca!
- ${formatearComoCodigo('horca')} -> Responderé con la cantidad de vidas actual, si llegan a ser ahorcados ya no podran descubrir ninguna letra!
- ${formatearComoCodigo('esLaFrase:')}${formatearComoParam(formatearComoCodigo('unaFrase'))} -> Responderé si adivinaron la frase o no.
- ${formatearComoCodigo('reset')} -> Crea una nueva partida.
`

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  juegoNuevo()
  client.channels.cache
    .get(canalDelJuego)
    .send(mensajeInicial)
})


client.on('messageCreate', async message => {
  if (message.channelId !== canalDelJuego) return
  if (message.author.id === client.user.id) return
  const response = nuevoMensaje(message.content)
  if (response !== undefined) await message.reply(response)
})

function nuevoMensaje(mensaje) {
  console.log(`Nuevo mensaje: ${mensaje}`)
  const [comando, ...params] = mensaje.split(' ')
  const parametro = params.join(' ')
  console.log(`Ejecutando comando: ${comando}`)
  switch (comando) {
    case 'ping':
      pings++
      return `Pong! #${pings}`

    case 'frase':
      return formatearComoCodigo(ahorcado.frase())

    case 'horca':
      return formatearComoBloqueDeCodigo(dibujarHorca(ahorcado.horca()))

    case 'descubrir:':
      if (!esLetra(parametro)) { return mensajeNoEntendido(mensaje) }
      return ahorcado.descubrir(parametro)

    case 'esLaFrase:':
      return ahorcado.esLaFrase(parametro) ? 'Sí' : 'No'

    case 'reset':
      return juegoNuevo()

    default:
      return mensajeNoEntendido(mensaje)
  }
}


// client.on('interactionCreate', async interaction => {
//   console.log({ interaction })
//   if (!interaction.isCommand()) return
//   if (interaction.channelId !== canalDelJuego) return

//   if (interaction.commandName === 'ping') {
//     n++
//     await interaction.reply(`Pong! ${n}`)
//   }
// })

client.login(token)