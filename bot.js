import "dotenv/config";
import { Bot, Keyboard, InlineKeyboard } from "grammy";
import { hydrateApi, hydrateContext } from "@grammyjs/hydrate";
import { Menu } from "@grammyjs/menu";
import MenuStat from "./models/MenuStats.js";
import connectDB from "./index.js";
import Worker from "./models/Worker.js";
import menus from "./keyboards.js";
import { text } from "express";

const bot = new Bot(process.env.BOT_API_KEY);

bot.use(hydrateContext());
bot.api.config.use(hydrateApi());

bot.api.setMyCommands([
  {
    command: "start",
    description: "запустити бота",
  },
  {
    command: "menu",
    description: "Головне меню",
  },
]);
connectDB();

const requestContactKeyboard = new Keyboard()
  .requestContact("Відправити номер телефону")
  .oneTime()
  .resized();

bot.command("start", async (ctx) => {
  await ctx.reply(
    "Добро пожаловать! Пожалуйста, отправьте свой номер телефона для доступа к боту.",
    { reply_markup: requestContactKeyboard }
  );
});

bot.callbackQuery("backToMainMenu", async (ctx) => {
  await ctx.callbackQuery.message.editText("Добро пожаловать в главное меню.", {
    reply_markup: menus.mainMenu,
  });
  await ctx.answerCallbackQuery();
});

bot.start();
const ADMIN_TELEGRAM_ID = process.env.ADMIN_TELEGRAM_ID;

bot.use(async (ctx, next) => {
  if (ctx.from.id === Number(ADMIN_TELEGRAM_ID)) {
    ctx.isAdmin = true;
  } else {
    ctx.isAdmin = false;
  }
  return next();
});

// В bot.js после обработки сообщений

bot.on("message:contact", async (ctx) => {
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

bot.callbackQuery("ethics-menu", async (ctx) => {
  await ctx.answerCallbackQuery("Документи з професійної етики");
  await ctx.callbackQuery.message.editText("Документи з професійної етики", {
    reply_markup: menus.ethicsMenu,
  });
});

bot.callbackQuery("hcpInteractionMenu", async (ctx) => {
  await ctx.answerCallbackQuery(
    "Я хочу взаємодіяти з професіоналами охорони здоров’я (ПОЗ)"
  );
  await ctx.callbackQuery.message.editText(
    "Я хочу взаємодіяти з професіоналами охорони здоров’я (ПОЗ) " +
      "\tЯк ви хочете взаємодіяти?",
    {
      reply_markup: menus.hcpInteractionMenu,
    }
  );
});

bot.callbackQuery("hcpInteractionWithoutPoz", async (ctx) => {
  await ctx.answerCallbackQuery(
    "Хочу залучити ПОЗ до участі у заході без надання послуг"
  );
  await ctx.callbackQuery.message.editText(
    "Хочу залучити ПОЗ до участі у заході без надання послуг",
    {
      reply_markup: menus.hcpInteractionWithoutPoz,
    }
  );
});

// bot.callbackQuery("hcpInteractionWithoutPozRequirements", async (ctx) => {
//   await ctx.answerCallbackQuery();
// });

bot.command("adduser", async (ctx) => {
  if (!ctx.isAdmin) {
    return ctx.reply("У вас нет прав для выполнения этой команды.");
  }

  const args = ctx.message.text.split(" ").slice(1);
  const phoneNumber = args[0];

  if (!phoneNumber) {
    console.log(`Команда adduser вызвана без номера телефона.`);
    return ctx.reply(
      "Пожалуйста, укажите номер телефона. Пример: /adduser +1234567890"
    );
  }

  try {
    let user = await Worker.findOne({ phoneNumber });

    if (user) {
      return ctx.reply("Пользователь с таким номером телефона уже существует.");
    }

    user = new Worker({
      phoneNumber,
    });
    await user.save();

    return ctx.reply(
      `Пользователь с номером телефона ${phoneNumber} успешно добавлен.`
    );
  } catch (error) {
    console.error("Ошибка при добавлении пользователя:", error);
    return ctx.reply("Произошла ошибка при добавлении пользователя.");
  }
});

// Middleware для проверки доступа
bot.use(async (ctx, next) => {
  // Игнорируем обработку команд /start и получение контакта
  if (ctx.message && (ctx.message.text === "/start" || ctx.message.contact)) {
    return next();
  }

  const telegramId = ctx.from.id;

  try {
    const user = await Worker.findOne({ telegramId });

    if (user) {
      return next();
    } else {
      return ctx.reply(
        "У вас нет доступа к этому боту. Пожалуйста, отправьте свой номер телефона.",
        {
          reply_markup: requestContactKeyboard,
        }
      );
    }
  } catch (error) {
    console.error("Ошибка при проверке доступа:", error);
    return ctx.reply("Произошла ошибка. Попробуйте позже.");
  }
});

// Обработка завершения работы
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
