const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const bebidas = ['Coca','Pepsi']

const carnes = [
    ['Porco', 'Vaca', 'Carneiro'],
    ['Galinha', 'Eu como é ovo'],
    ['Peixe', 'Frutos do mar'],
    ['Eu sou vegetariano']
]

const tecladoCarne = Markup.keyboard(carnes).resize().oneTime().extra()

const tecladoBebida =  Markup.keyboard(bebidas).resize().oneTime().extra()


bot.start(async ctx=>{
    const from = ctx.update.message.from
    await ctx.reply(`Seja bem vindo ${from.first_name}!`)
    await ctx.reply('Qual bebida você prefere?',tecladoBebida)
})

bot.hears(bebidas, async ctx=>{
    await ctx.reply(`Nossa, eu também gosto de ${ctx.match}`)
    await ctx.reply(`Qual sua carne Favorita?`, tecladoCarne)
})

bot.hears('Vaca', async ctx=>{
    await ctx.reply('A Minha Também')
})

bot.hears('Eu sou vegetariano', async ctx=>{
    await ctx.reply('Eu gosto de carne')
})

bot.startPolling()
