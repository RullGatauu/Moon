import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `ʜᴀɪ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ɴᴀɢᴀᴛᴏʀᴏ ʙᴏᴛ ʏᴀɴɢ ᴅɪ ᴄɪᴘᴛᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴍ ʀᴜʟʟ :ᴠ\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://instagram.com/nagatorobot', 'ɪɴsᴛᴀɢʀᴀᴍ', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nsᴀʏᴀ sᴀᴍɢᴇ sᴀᴍᴀ ᴀɴɪᴍᴇᴋ`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
