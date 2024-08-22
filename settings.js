const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==wbnBjaF5ER2N2XIdkbjF2TQpUWMJUNwA3ROR1YqtULZVndn12QWJlRJZkMjEETUJERrF1apwd=52788924749',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now ! 🔶𝘛𝘏𝘈𝘕𝘒𝘈𝘚 𝘍𝘖𝘙 𝘜𝘚𝘐𝘕𝘎 𝘔𝘠 𝘉𝘖𝘛🔶
    🇰🇷난한케 사람헤🇰🇷

𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥>:𝚖𝚛 𝚑𝚊𝚜𝚑𝚒𝚢𝚊

𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗡𝗢>https://wa.me/94773076130?text=Hi👋_Brother♥️

𝙵𝙾𝙻𝙻𝙾𝚆 𝙼𝙴=https://whatsapp.com/channel/0029VaaVTVCJpe8o4HQnAU2e

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

𝐌𝐑 𝐇𝐀𝐒𝐇𝐈𝐘𝐀 𝐖𝐀 𝐁𝐎𝐓 𝐌𝐎𝐃𝐄𝐋`,
  ALIVE_MEDIA: 'https://telegra.ph/file/c77bcf6707010f5ab5e65.mp4',
  MONGODB_URL: 'mongodb+srv://kavishkahashan60:VyJNa4sqYoBO0nzu@cluster0.den4hzx.mongodb.net/', 
  PREFIX: '.$&',
  LANGUAGE: 'SI',
  PORT: 3000,
  BOT_NAME: '𝐐𝐔𝐄𝐄𝐍 𝐄𝐋𝐈𝐒𝐀',
  OWNER_NAME: '𝐇𝐀𝐒𝐇𝐀𝐍 𝐊𝐀𝐕𝐈𝐒𝐇𝐊𝐀',
  OWNER_NUMBER: '94773076130',
  SUDO: '94715166712',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '🇰🇷𝐌𝐑 𝐇𝐀𝐒𝐇𝐈𝐘𝐀 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋🇰🇷 ꜱʟ ᴏꜰꜰɪᴄɪᴀʟ ʙᴏᴛ ɢʀᴏᴜᴩ',
  STICKER_AUTHOR: '✨𝕊𝕃 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 𝔹𝕆𝕋 𝔾ℝ𝕆𝕌ℙ✨',
  STICKER_PACK: '𝐌𝐑 𝐇𝐀𝐒𝐇𝐈𝐘𝐀',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '🇰🇷',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: true,
  INBOX_BLOCK: true,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: true,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: true,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
