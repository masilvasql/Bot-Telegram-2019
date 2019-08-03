const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

/* 
    Inicia o Bot
    CTX = Contexto
    ctx.reply = responde ao usuário
*/
bot.start(ctx =>{
    const from = ctx.update.message.from 
    console.log(from)
    ctx.reply(`Seja Bem Vindo, ${from.first_name}`)
})

bot.startPolling()