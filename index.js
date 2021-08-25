const { Client, Intents } = require('discord.js')
const { token } = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

const canalDelJuego = '879962742390423585'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.channels.cache
    .get(canalDelJuego)
    .send("HOLA")
})

let n = 0

client.on('interactionCreate', async interaction => {
  console.log({ interaction })
  if (!interaction.isCommand()) return
  if (interaction.channelId !== canalDelJuego) return

  if (interaction.commandName === 'ping') {
    n++
    await interaction.reply(`Pong! ${n}`)
  }
})

client.login(token)