const { Composer } = require("grammy");
const Worker = require("../../models/Worker");

const addUser = new Composer();

addUser.command("adduser", async (ctx) => {
  if (!ctx.isAdmin) {
    console.log(ctx.from);
    return ctx.reply("У вас немає прав для виконання цієї команди.");
  }

  const args = ctx.message.text.split(" ").slice(1);
  const phoneNumber = args[0];

  if (!phoneNumber) {
    console.log(`Команда adduser викликана без номера телефону.`);
    return ctx.reply(
      "Будь ласка, вкажіть номер телефону. Приклад: /adduser 0501234567"
    );
  }

  try {
    let user = await Worker.findOne({ phoneNumber });

    if (user) {
      return ctx.reply("Користувач з таким номером телефону вже існує.");
    }

    user = new Worker({
      phoneNumber,
      username: `user_${Date.now()}`,
    });
    await user.save();

    return ctx.reply(
      `Користувач з номером телефону ${phoneNumber} вдало доданий.`
    );
  } catch (error) {
    console.error("Помилка при додаванні користувача:", error);
    return ctx.reply("Виникла помилка при додаванні користувача.");
  }
});

module.exports = addUser;
