const { Composer } = require("grammy");
const Worker = require("../models/Worker");
const mainMenu = require("../keyboards/mainMenu");

const checkContact = new Composer();

checkContact.on("message:contact", async (ctx) => {
  const phoneNumber = ctx.message.contact.phone_number.startsWith("+")
    ? ctx.message.contact.phone_number.slice(3)
    : ctx.message.contact.phone_number.slice(2);
  const telegramId = ctx.from.id;
  // console.log("phoneNumber is: " + phoneNumber);

  try {
    let worker = await Worker.findOne({ phoneNumber });
    if (worker) {
      console.log(worker);
      worker.username = ctx.from.username || `user_${Date.now()}`;
      worker.first_name = ctx.from.first_name;

      await worker.save();

      if (!worker.telegramId) {
        worker.telegramId = telegramId;
        await worker.save();
      }
      await ctx.reply("Доступ надано! Вітаємо в головному меню.", {
        reply_markup: mainMenu,
      });
    } else {
      await ctx.reply("Вибачте, у вас немає доступу до цього бота.");
    }
  } catch (error) {
    console.error("Помилка при аутентифікації користувача:", error);
    await ctx.reply(
      "Виникла помилка при обробці вашого запиту. Спробуйте пізніше."
    );
  }
});

module.exports = checkContact;
