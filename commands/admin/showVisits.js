const { Composer } = require("grammy");
const MenuStat = require("../../models/MenuStat");

const showVisits = new Composer();
showVisits.command("visits", async (ctx) => {
  if (!ctx.isAdmin) {
    return ctx.reply("У вас немає прав для виконання цієї команди.");
  }

  try {
    const stats = await MenuStat.find();
    if (stats.length === 0) {
      return ctx.reply("Статистика відвідувань порожня");
    }
    let message = `Статистика відвідувань основних пунктів меню\n`;
    stats.forEach((stat) => {
      message += `• ${stat.menuItem}: <b>${stat.count}</b> відвідувань\n`;
    });
    return ctx.reply(message, { parse_mode: "HTML" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = showVisits;
