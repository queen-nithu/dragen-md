const report = async (m, gss) => {
  const reportedMessages = {};
  const devlopernumber = '911111111';
const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['menu']; 
  
  if (validCommands.includes(cmd)) {
    
  if (!text) return m.reply(`✨ 𝗱𝗿𝗮𝗴𝗲𝗻 𝗺𝗱 𝗺𝗲𝗻𝘂✨

> 𝗕𝗢𝗧 𝗗𝗘𝗣𝗬 𝗧𝗨𝗧𝗢𝗧𝗜𝗔𝗟 👉
https://youtube.com/@suvitech-c3q?si=Sd9VZnZsi40HGYvS
🔔

> 𝗕𝗢𝗧 𝗔𝗣𝗣
  https://www.mediafire.com/file/uc0yizt82oc68hj/nithustore.apk/file

𝗔𝗟𝗟 𝗠𝗘𝗡𝗨


 ✨𝗦𝗢𝗡𝗚  Song downloader

✨ 𝗙𝗕          Fb      downloader

✨  𝗣𝗜𝗡𝗚   

> DOWNLOAD NOW NITHU STORE`);

    const messageId = m.key.id;

    if (reportedMessages[messageId]) {
        return m.reply("This menu has already been forwarded to the owner. Please wait for a response.");
    }

    reportedMessages[messageId] = true;

    const textt = `*| alive |*`;
    const teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*alive*: ${text}`;
    const teks2 = `\n\n*Hi ${m.pushName}, your menu has been forwarded to my Owners.*\n*Please wait...*`;

    // Send the message to the first owner in the `owner` array
    gss.sendMessage(devlopernumber + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [m.sender],
    }, {
        quoted: m,
    });

    // Send a reply to the user
    m.reply("dragen md menu.");
   }
};

export default report;
