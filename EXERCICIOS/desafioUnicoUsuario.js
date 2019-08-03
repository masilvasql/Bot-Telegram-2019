/* Verificar a partir do usuário que enviou a mensagem, verificar o ID do usuário
    1 - Ao seu dispor mestre caso o ID seja igual ao seu, senão, sinto muito, mas só falo com meu mestre
*/

const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx=>{
    const from = ctx.update.message.from
    if(from.id == '627852128'){
        ctx.reply("Olá, Mestre!")
    }else{
        ctx.reply("Sinto muito, mas, só falo com meu mestre ;)")
    }
})

bot.startPolling()