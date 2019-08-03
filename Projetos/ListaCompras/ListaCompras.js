const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

let Lista = []

const botoes = () => Extra.markup(
    Markup.inlineKeyboard(
        Lista.map(item => Markup.callbackButton(item, `delete ${item}`)),
        { columns: 3 }
    )
)

bot.start(async ctx=>{
    const nome = ctx.update.message.from.first_name
    await ctx.reply(`Seja bem vindo ${nome}`)
    await ctx.reply('Escreva os itens que você deseja adicionar...')
})

bot.on('text', ctx=>{
    Lista.push(ctx.update.message.text)
    ctx.reply(`${ctx.update.message.text} foi adicionado a Lista!`, botoes())
})

bot.action(/delete (.+)/, ctx=>{
    Lista = Lista.filter(item => item !== ctx.match[1])
    ctx.reply(`${ctx.match[1]} deletado!`, botoes())
})

bot.startPolling()