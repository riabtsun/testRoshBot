const { Composer } = require("grammy");
const Worker = require("../../models/Worker");

const removeUser = new Composer();

removeUser.command("removeuser", async (ctx) => {
  if (!ctx.isAdmin) {
    return ctx.reply("У вас нет прав для выполнения этой команды.");
  }

  const args = ctx.message.text.split(" ").slice(1);
  const phoneNumber = args[0];

  if (!phoneNumber) {
    console.log(`Команда removeuser вызвана без номера телефона.`);
    return ctx.reply(
      "Пожалуйста, укажите номер телефона. Пример: /removeuser +1234567890"
    );
  }

  // const phoneNumber = phoneNumber.replace(/[\s\-()]/g, "");

  console.log(`Удаление пользователя с номером телефона: ${phoneNumber}`);

  try {
    const user = await Worker.deleteOne({ phoneNumber: phoneNumber });

    if (user.deletedCount === 0) {
      console.log(`Пользователь с номером телефона ${phoneNumber} не найден.`);
      return ctx.reply("Пользователь с таким номером телефона не найден.");
    }

    console.log(
      `Пользователь с номером телефона ${phoneNumber} успешно удалён.`
    );
    return ctx.reply(
      `Пользователь с номером телефона ${phoneNumber} успешно удалён.`
    );
  } catch (error) {
    console.error("Ошибка при удалении пользователя:", error);
    return ctx.reply("Произошла ошибка при удалении пользователя.");
  }
});

module.exports = removeUser;
