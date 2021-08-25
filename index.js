const { Client, Intents } = require('discord.js')
const { token } = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

const canalDelJuego = '879962742390423585'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.channels.cache
    .get(canalDelJuego)
    .send("TODO: Hacer la presentación")
})

let n = 0

client.on('messageCreate', async message => {
  if (message.channelId !== canalDelJuego) return
  if (message.author.id === client.user.id) return
  console.log({ message })
  switch (message.content.toLowerCase()) {
    case 'ping':
      n++
      await message.reply(`Pong! ${n}`)
      break;

    default:
      await message.reply({
        embeds: [{
          color: 15158332,
          title: `No entiendo el mensaje '${message.content}'.`
        }]
      });
      break;
  }
})

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