// telegram
const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();
const bot = new Telegraf(process.env.APIKEY);
bot.start((ctx) => {
  ctx.reply("Hello I am kle bot");
});
bot.command("kle", (ctx) => {
  ctx.reply("KLE Technological University");
});
bot.command("link", (ctx) => {
  ctx.replyWithHTML(`<a>http://www.klescpdds.edu.in</a>`);
});
bot.command("location", (ctx) => {
  ctx.replyWithLocation(16.39, 75.11);
});
bot.command("meme", async (ctx) => {
  await ctx.replyWithAnimation(
    "https://media.tenor.com/g0dhpJ4aLGoAAAAM/coming-late-to-home-gilli-movie.gif"
  );
});
bot.command("audio", async (ctx) => {
  await ctx.replyWithAudio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
});
bot.command("video", async (ctx) => {
  await ctx.replyWithVideo(
    "http://techslides.com/demos/sample-videos/small.mp4"
  );
});
bot.launch();
