const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx=>{
    const from = ctx.update.message.from
    await ctx.reply(`Olá! ${from.first_name} 😀`)
    await ctx.replyWithHTML(`Destacando Mensagem <b>HTML</b>
        <i>de Várias</i> <code>formas</code> <pre>Possíveis</pre>
        <a href="http://www.google.com.br">Google</a> `)
    await ctx.replyWithMarkdown('Destacando mensagem *MarkDown*'
    + ' _de várias_ `formas` ```Possíveis```'
    + ' [Google](http://www.google.com.br)')
    await ctx.replyWithMarkdown('Destacando mensagem *MarkDown*')
    await ctx.replyWithPhoto({source: `${__dirname}/cat.jpg`})
    await ctx.replyWithPhoto('https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-9/64601523_420618292115695_5862968085203386368_n.jpg?_nc_cat=101&_nc_oc=AQn3QpGW6-ISkflyIlcUD0UinCHAz2ZPXIWqslVdklLoOtPMbhzfanFF6KOfYm7ocqZFmB7CRosctNg0l-ZQnfLg&_nc_ht=scontent.ffln1-1.fna&oh=9cc8ec6a5c4a35c1a003a1f22a9b979b&oe=5DEE6AB9',
    {caption:"Olha o estilo"})
    await ctx.replyWithPhoto({url:'https://images5.alphacoders.com/876/thumb-350-876590.png'})
    await ctx.replyWithLocation(29.977308, 31.1303068)
   // await ctx.replyWithVideo('https://youtu.be/KFj8EOktfwA')
})




bot.startPolling()