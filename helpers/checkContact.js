const { Composer } = require("grammy");
const Worker = require("../models/Worker");
const menus = require("../keyboards");

const checkContact = new Composer();

checkContact.on("message:contact", async (ctx) => {
  const phoneNumber = ctx.message.contact.phone_number;
  const telegramId = ctx.from.id;

  try {
    let worker = await Worker.findOne({ phoneNumber });
    if (worker) {
      worker.username = ctx.from.username;
      worker.first_name = ctx.from.first_name;

      await worker.save();

      if (!worker.telegramId) {
        worker.telegramId = telegramId;
        await worker.save();
      }
      await ctx.reply("Доступ предоставлен! Добро пожаловать в главное меню.", {
        reply_markup: menus.mainMenu,
      });
    } else {
      await ctx.reply("Извините, у вас нет доступа к этому боту.");
    }
  } catch (error) {
    console.error("Ошибка при аутентификации пользователя:", error);
    await ctx.reply(
      "Произошла ошибка при обработке вашего запроса. Попробуйте позже."
    );
  }
});

module.exports = checkContact;
