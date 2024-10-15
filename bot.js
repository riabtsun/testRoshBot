require("dotenv/config");
const { Bot, Keyboard, InlineKeyboard } = require("grammy");
const { hydrateApi, hydrateContext } = require("@grammyjs/hydrate");
// import { Menu } from "@grammyjs/menu";
const MenuStat = require("./models/MenuStat");
const connectDB = require("./index");
const Worker = require("./models/Worker");
const menus = require("./keyboards");
const { text } = require("express");
const incrementMenuStat = require("./helpers/menuStat");
const addUser = require("./commands/admin/addUser");
const removeUser = require("./commands/admin/removeUser");
const showVisits = require("./commands/admin/showVisits");
const checkContact = require("./helpers/checkContact");

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
  ctx.isAdmin = ctx.from.id === Number(ADMIN_TELEGRAM_ID);
  return next();
});

bot.on("callback_query:data", async (ctx) => {
  const callBackData = ctx.callbackQuery.data;
  console.log(callBackData);
  switch (callBackData) {
    case "ethics-menu":
      await ctx.answerCallbackQuery("Документи з професійної етики");
      await incrementMenuStat("Документи з професійної етики");
      await ctx.callbackQuery.message.editText(
        "Документи з професійної етики",
        {
          reply_markup: menus.ethicsMenu,
        }
      );
    case "hcpInteractionMenu":
      await ctx.answerCallbackQuery(
        "Я хочу взаємодіяти з професіоналами охорони здоров’я (ПОЗ)"
      );
      await incrementMenuStat(
        "Я хочу взаємодіяти з професіоналами охорони здоров’я (ПОЗ)"
      );
      await ctx.callbackQuery.message.editText(
        "Я хочу взаємодіяти з професіоналами охорони здоров’я (ПОЗ) " +
          "\tЯк ви хочете взаємодіяти?",
        {
          reply_markup: menus.hcpInteractionMenu,
        }
      );
    case "hcpInteractionWithoutPoz":
      await ctx.answerCallbackQuery(
        "Хочу залучити ПОЗ до участі у заході без надання послуг"
      );
      await ctx.callbackQuery.message.editText(
        "Хочу залучити ПОЗ до участі у заході без надання послуг",
        {
          reply_markup: menus.hcpInteractionWithoutPoz,
        }
      );
    // case "hcpInteractionWithoutPozRequirements":
    //   await ctx.answerCallbackQuery("a.Загальні вимоги");
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

    if (user || Number(ctx.from.id) === Number(process.env.ADMIN_TELEGRAM_ID)) {
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

bot.use(addUser);
bot.use(removeUser);
bot.use(showVisits);
bot.use(checkContact);

// Обработка завершения работы
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
