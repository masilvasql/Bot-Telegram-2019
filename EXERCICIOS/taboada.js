const env = require('../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const botoes = Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('1', '1'), //label do botão + ação que vai disparar
    Markup.callbackButton('2', '2'),
    Markup.callbackButton('3', '3'),
    Markup.callbackButton('4', '4'),
    Markup.callbackButton('5', '5'),
    Markup.callbackButton('6', '6'),
    Markup.callbackButton('7', '7'),
    Markup.callbackButton('8', '8'),
    Markup.callbackButton('9', '9'),
    Markup.callbackButton('10', '10'),
],{columns:3}
))

bot.start(async ctx=>{
    const nome = ctx.update.message.from.first_name
    await ctx.reply(`Olá ${nome}!`)
    await ctx.reply(`Sempre que quiser saber uma taboada, digite /taboada`)
})

bot.command('taboada', ctx=> ctx.reply('Qual taboada gostaria de saber?', botoes))

bot.action(/(\d+)/,async ctx=>{
    let result = parseInt(ctx.match[1])
    await ctx.reply(`A taboada do ${result} é: `)
    for(i=0 ; i <=10 ; i++){
       await ctx.reply(`${result} x ${i} = ${result * i}` )
    }
})

bot.startPolling()