const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`E aí, ${from.first_name}?`)
})

bot.on('text', ctx =>
    ctx.reply(`Texto '${ctx.update.message.text}' recebido com sucesso.`))

    bot.on('location', ctx => {
        const location = ctx.update.message.location
        console.log(location)
        ctx.reply(`Entendido, você está em
            Lat: ${location.latitude},
            Lon: ${location.longitude}!`)
    })

    bot.on('contact', ctx => {
        const contact = ctx.update.message.contact
        console.log(contact)
        ctx.reply(`Ok. Vou lembrar de ligar para:
            ${contact.first_name}, ${contact.phone_number}`)
    })

    bot.on('voice', ctx => {
        const voice = ctx.update.message.voice
        console.log(voice)
        ctx.reply(`Meu anjo, não tenho tempo pra escutar esse seu podcast de ${voice.duration} segundos. #sorry`)
    })

    bot.on('photo', ctx => {
        const photo = ctx.update.message.photo
        console.log(photo)
        photo.forEach((ph, i) =>{
            ctx.reply(`Foto ${i}, com resolução ${ph.width}x${ph.height}`)
        })
    })

    bot.on('sticker', ctx => {
        const sticker = ctx.update.message.sticker
        console.log(sticker)
        ctx.reply(`${sticker.emoji}`)
    })

bot.startPolling()