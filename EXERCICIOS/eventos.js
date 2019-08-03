const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx =>{
    const name = ctx.update.message.from.first_name
    ctx.reply(`Seja Bem Vindo ${name}!`)
})


//EVENTO DE CAPTURA DE TEXTO
bot.on('text', ctx=>
    ctx.reply(`TEXTO '${ctx.update.message.text}' recebido com sucesso`))

//Evento de captura de geolocalização
bot.on('location', ctx=>{
    const location = ctx.update.message.location
    console.log("LOCATION ", location)
    ctx.reply(`Entendido, você está em: 
        LAT: ${location.latitude},
        LON: ${location.longitude}! `)
})

//evento de dados de contato compartilhado
bot.on('contact', ctx=>{
    const contact = ctx.update.message.contact
    console.log("Contact")
    ctx.reply(`Vou Lembrar do(a) ${contact.first_name} (${contact.phone_number})`)
})

bot.on('voice', ctx=>{
    const voice = ctx.update.message.voice
    console.log(voice)
    ctx.reply(`Sua mensgam tem: ${voice.duration}`)
})

bot.on('photo', ctx=>{
    const photo = ctx.update.message.photo
    console.log(photo)
    photo.forEach((ph, i)=>{
        ctx.reply(`Photo ${i} tem resolução de ${ph.width} x ${ph.height}`)
    })
})

bot.on('sticker', ctx=>{
    const sticker = ctx.update.message.sticker
    console.log(sticker)
    ctx.reply(`Estou vendo que você enviou ${sticker.emoji} do conjunto ${sticker.set_name} `)
})

bot.startPolling()