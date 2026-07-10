require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

// ==========================================
// KONFIGURASI
// ==========================================
const BOT_TOKEN        = process.env.BOT_TOKEN;
const CHANNEL_ID_SAMBUT = process.env.CHANNEL_ID_SAMBUT;

// ==========================================
// BOT SIAP DIGUNAKAN
// ==========================================
client.once('ready', () => {
    console.log(`✅ Bot aktif sebagai: ${client.user.tag}`);
    client.user.setActivity('Menyambut anggota baru', { type: 'LISTENING' });
});

// ==========================================
// FITUR PENYAMBUTAN SAAT ADA YANG MASUK
// ==========================================
client.on('guildMemberAdd', async anggota => {
    const saluranSambut = anggota.guild.channels.cache.get(CHANNEL_ID_SAMBUT);
    if (!saluranSambut) return;

    await saluranSambut.send(`## 🎮 SELAMAT DATANG DI SERVER DISCORD
# 🔴 POINT BLANK • EVOS REBORN
### Halo ${anggota}! 👋
### Selamat datang di markas resmi komunitas EVOS Reborn khusus pecinta game Point Blank! 🚀
### Di sini tempat kita berkumpul, latihan bareng, berbagi info turnamen, cari teman mabar, dan tentunya membuktikan bahwa kita adalah pasukan yang tak terkalahkan! 
## 📜 HAL PENTING UNTUK DIBACA DULU:
**✅ Baca dan patuhi peraturan di sini <#1520016599871000668>**
**✅ Untuk informasi update silahkan cek disini <#1520544487762297073>**
**✅ Untuk info info seputar Point Blank Evos Reborn bisa cek disini <#1520073319594983608>, dan disini <#1520015703703556117>**
**✅ Gunakan saluran sesuai topiknya ya!**
**✅ Kalo ada pertanyaan terkait game bisa mention mereka ya <@&1520106637594202132>, <@&1520016964326527137>**
## ⚡ APA YANG KAMU DAPAT DI SINI:
**🔹 Info turnamen PB resmi & komunitas**
**🔹 Tips trik, update senjata, dan meta terbaru**
**🔹 Cari teman mabar, scrim, atau lawan tanding**
**🔹 Berita update Point Blank terbaru**
`);
});

// Jalankan bot
client.login(BOT_TOKEN);
