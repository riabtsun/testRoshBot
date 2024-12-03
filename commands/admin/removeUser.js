const { Composer } = require("grammy");
const Worker = require("../../models/Worker");

const removeUser = new Composer();

removeUser.command("removeuser", async (ctx) => {
  if (!ctx.isAdmin) {
    return ctx.reply("У вас немає прав для виконання цієї команди.");
  }

  const args = ctx.message.text.split(" ").slice(1);
  const phoneNumber = args[0];

  if (!phoneNumber) {
    console.log(`Команда removeuser викликана без номера телефону.`);
    return ctx.reply(
      "Будь ласка, вкажіть номер телефону. Приклад: /removeuser 0501234567"
    );
  }

  // const phoneNumber = phoneNumber.replace(/[\s\-()]/g, "");

  console.log(`Видалення користувача з номером телефону: ${phoneNumber}`);

  try {
    const user = await Worker.deleteOne({ phoneNumber: phoneNumber });

    if (user.deletedCount === 0) {
      console.log(`Користувача з номером телефону ${phoneNumber} не знайдено.`);
      return ctx.reply("Користувача з таким номером телефону не знайдено.");
    }

    console.log(
      `Користувач з номером телефону ${phoneNumber} вдало видалений.`
    );
    return ctx.reply(
      `Користувач з номером телефону ${phoneNumber} вдало видалений.`
    );
  } catch (error) {
    console.error("Помилка при видаленні користувача:", error);
    return ctx.reply("Виникла помилка при видаленні користувача.");
  }
});

module.exports = removeUser;
