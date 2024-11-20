const { Composer } = require("grammy");
const Worker = require("../../models/Worker");

const addUser = new Composer();

addUser.command("adduser", async (ctx) => {
  if (!ctx.isAdmin) {
    console.log(ctx.from);
    return ctx.reply("У вас нет прав для выполнения этой команды.");
  }

  const args = ctx.message.text.split(" ").slice(1);
  const phoneNumber = args[0];

  if (!phoneNumber) {
    console.log(`Команда adduser вызвана без номера телефона.`);
    return ctx.reply(
      "Пожалуйста, укажите номер телефона. Пример: /adduser +1234567890",
    );
  }

  try {
    let user = await Worker.findOne({ phoneNumber });

    if (user) {
      return ctx.reply("Пользователь с таким номером телефона уже существует.");
    }

    user = new Worker({
      phoneNumber,
      username: `user_${Date.now()}`,
    });
    await user.save();

    return ctx.reply(
      `Пользователь с номером телефона ${phoneNumber} успешно добавлен.`,
    );
  } catch (error) {
    console.error("Ошибка при добавлении пользователя:", error);
    return ctx.reply("Произошла ошибка при добавлении пользователя.");
  }
});

module.exports = addUser;
