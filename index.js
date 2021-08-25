const { Client, Intents } = require('discord.js')
const { token } = require('./config.json')
const { Ahorcado } = require('./ahorcado')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const canalDelJuego = '879962742390423585'

let pings = 0
let ahorcado = new Ahorcado('pdep') // TODO: Armar las frases / palabras

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.channels.cache
    .get(canalDelJuego)
    .send("TODO: Hacer la presentación")
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
      return `Pong! #${n}`

    case 'frase':
      return formatearComoCodigo(ahorcado.frase())

    case 'horca':
      return ahorcado.horca().toString() // TODO: Dibujar

    case 'descubrir:':
      return ahorcado.descubrir(parametro)

    case 'esLaFrase:':
      return ahorcado.esLaFrase(parametro) ? 'Sí' : 'No'

    case 'reset':
      ahorcado = new Ahorcado('Otra palabra') // TODO
      return

    default:
      return {
        embeds: [{
          color: 15158332,
          title: `No entiendo el mensaje '${mensaje}'.`
        }]
      }
  }
}

function formatearComoCodigo(mensaje) {
  return `\`${mensaje}\``
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