const { Client, Intents } = require('discord.js')
const { token, channelId } = require('./config.json')
const { Ahorcado } = require('./ahorcado')
const { proximaFrase } = require('./frases')
const { esLetra } = require('./utils')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const canalDelJuego = channelId

let pings = 0
let ahorcado = new Ahorcado('pdep') // TODO: Armar las frases / palabras

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.channels.cache
    .get(canalDelJuego)
    .send(`
Vamos a jugar al ahorcado!
Para comunicarse conmigo deberan enviarme mensajes, estos son los que entiendo: 
- **frase** -> Responderé con la frase actual, si descubren letras aparecera aquí.
- **descubrir: x** -> x = una letra ; Si la letra esta en la frase ahora no estará mas oculta, si no esta la frase perederán una vida!
- **horca** -> Responderé con la cantidad de vidas actual, si estan ahorcados ya no podran descubrir ninguna letra!
- **esLaFrase: una frase** -> Responderé "Si" o "No" dependiendo de si adivinaron la frase o no.
    `)
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
      return ahorcado.horca()

    case 'descubrir:':
      if(!esLetra(parametro)) { return }
      return ahorcado.descubrir(parametro)

    case 'esLaFrase:':
      return ahorcado.esLaFrase(parametro) ? 'Sí' : 'No'

    case 'reset':
      ahorcado = new Ahorcado(proximaFrase())
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