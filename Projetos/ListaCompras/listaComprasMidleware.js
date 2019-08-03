const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const session = require('telegraf/session') 
const bot = new Telegraf(env.token)


const botoes = lista => Extra.markup(
    Markup.inlineKeyboard(
        lista.map(item => Markup.callbackButton(item, `delete ${item}`)),
        { columns: 3 }
    )
)

bot.use(session())

const verificaUsuario = (ctx, next)=>{
    const mesmoIdMsg = ctx.update.message && ctx.update.message.from.id == env.userId
    const mesmoIdCallBack = ctx.update.callback_query && ctx.update.callback_query.from.id == env.userId 

    if(mesmoIdMsg || mesmoIdCallBack){
        next()
    }else{
        ctx.reply('Desculpe, não fui altorizado a conversar com você')
    }
}

const processando = ({reply}, next) => reply('Processando').then(()=> next())

bot.start(verificaUsuario, async ctx=>{
    const nome = ctx.update.message.from.first_name
    await ctx.reply(`Seja bem vindo ${nome}`)
    await ctx.reply('Escreva os itens que você deseja adicionar...')
    ctx.session.lista = []
})

bot.on('text', verificaUsuario , processando, ctx=>{
    let msg = ctx.update.message.text
    ctx.session.lista.push(msg)
    ctx.reply(`${msg} foi adicionado a lista!`, botoes(ctx.session.lista))
})

bot.action(/delete (.+)/, ctx=>{
    ctx.session.lista = ctx.session.lista.filter(item=> item !== ctx.match[1])
    ctx.reply(`${ctx.match[1]} deletado!`, botoes(ctx.session.lista))
})

bot.startPolling()