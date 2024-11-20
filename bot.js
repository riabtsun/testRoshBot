require("dotenv/config");
const { Bot, Keyboard, InlineKeyboard } = require("grammy");
const { hydrateApi, hydrateContext } = require("@grammyjs/hydrate");
const connectDB = require("./index");
const Worker = require("./models/Worker");
const mainMenu = require("./keyboards/mainMenu");
const ethicsMenu = require("./keyboards/1-profEthicDocs/ethicsMenu");
const {
  hcpInteractionMenu,
  hcpInteractionWithoutPoz,
  hcpInteractionWithoutPozRequirements,
  hcpInteractionWithPoz,
} = require("./keyboards/2-POZ/poz");
const {
  createEvent,
  createEventConfirm,
  createEventConfirmBusiness,
  createEventConfirmSciences,
  createEventConfirmPolicy,
} = require("./keyboards/3-createEvent/createEvent");
const {
  shareSupport,
  shareSupportReject,
  shareSupportConfirm,
} = require("./keyboards/4-shareSupport/shareSupport");
const docsTemplates = require("./keyboards/7-docsTemplates/docsTemplates");
const antiCorruption = require("./keyboards/8-antiCorruption/antiCorruption");
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
    { reply_markup: requestContactKeyboard },
  );
});

bot.callbackQuery("backToMainMenu", async (ctx) => {
  await ctx.callbackQuery.message.editText("Добро пожаловать в главное меню.", {
    reply_markup: mainMenu,
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
  //1 menu docs
  switch (callBackData) {
    case "ethics-menu":
      await ctx.answerCallbackQuery("Документи з професійної етики");
      await incrementMenuStat("Документи з професійної етики");
      await ctx.callbackQuery.message.editText(
        "Документи з професійної етики",
        {
          reply_markup: ethicsMenu,
        },
      );
      break;
    //2 ethic menu
    case "hcpInteractionMenu":
      await ctx.answerCallbackQuery(
        "Я хочу взаємодіяти з професіоналами охорони здоров’я (ПОЗ)",
      );
      await incrementMenuStat(
        "Я хочу взаємодіяти з професіоналами охорони здоров’я (ПОЗ)",
      );
      await ctx.callbackQuery.message.editText("Як ви хочете взаємодіяти?", {
        reply_markup: hcpInteractionMenu,
      });
      break;
    case "hcpInteractionWithoutPoz":
      await ctx.answerCallbackQuery(
        "Хочу залучити ПОЗ до участі у заході без надання послуг",
      );
      await ctx.callbackQuery.message.editText(
        "Хочу залучити ПОЗ до участі у заході без надання послуг",
        {
          reply_markup: hcpInteractionWithoutPoz,
        },
      );
      break;
    case "hcpInteractionWithoutPozRequirements":
      await ctx.answerCallbackQuery("Вимоги і обмеження");
      await ctx.callbackQuery.message.editText("Вимоги і обмеження", {
        reply_markup: hcpInteractionWithoutPozRequirements,
      });
      break;
    case "hcpInteractionWithPoz":
      await ctx.answerCallbackQuery("Хочу залучити ПОЗ до надання послуг");
      await ctx.editMessageText("Хочу залучити ПОЗ до надання послуг", {
        reply_markup: hcpInteractionWithPoz,
      });
      break;
    //3 create event
    case "createEvent":
      await ctx.answerCallbackQuery("Це захід Рош?");
      await incrementMenuStat("Я хочу створити захід");
      await ctx.editMessageText("Це захід Рош?", {
        reply_markup: createEvent,
      });
      break;
    case "createEventConfirm":
      await ctx.answerCallbackQuery("Яка мета?");
      await ctx.editMessageText("Яка мета?", {
        reply_markup: createEventConfirm,
      });
      break;
    case "createEventConfirmBusiness":
      await ctx.answerCallbackQuery("Ділова (комерційна)");
      await ctx.editMessageText("Який тип заходу?", {
        reply_markup: createEventConfirmBusiness,
      });
      break;
    case "createEventConfirmSciences":
      await ctx.answerCallbackQuery("Наукова");
      await ctx.editMessageText("Який тип заходу?", {
        reply_markup: createEventConfirmSciences,
      });
      break;
    case "createEventConfirmPolicy":
      await ctx.answerCallbackQuery("Policy shaping");
      await ctx.editMessageText("Який тип заходу?", {
        reply_markup: createEventConfirmPolicy,
      });
      break;
    // 4 support
    case "shareSupport":
      await ctx.answerCallbackQuery("Policy shaping");
      await incrementMenuStat("Я хочу надати підтримку на запит");
      await ctx.editMessageText(
        "Рош отримує вигоду в обмін на надання підтримки?",
        {
          reply_markup: shareSupport,
        },
      );
      break;
    case "shareSupportReject":
      await ctx.answerCallbackQuery("Це благодійність. Яка мета підтримки?");
      await ctx.editMessageText("Це благодійність. Яка мета підтримки?", {
        reply_markup: shareSupportReject,
      });
      break;
    case "shareSupportConfirm":
      await ctx.answerCallbackQuery("1.Це спонсорство. Який бюджет? ");
      await ctx.editMessageText("1.\tЦе спонсорство. Який бюджет? ", {
        reply_markup: shareSupportConfirm,
      });
      break;
    // 7 docs templates
    case "docsTemplates":
      await ctx.answerCallbackQuery("7.Шаблони документів");
      await incrementMenuStat("Шаблони документів");
      await ctx.editMessageText("Шаблони документів", {
        reply_markup: docsTemplates,
      });
      break;
    // 8 anti corruption
    case "antiCorruption":
      await ctx.answerCallbackQuery("Запобігання корупції");
      await incrementMenuStat("Запобігання корупції");
      await ctx.editMessageText("Запобігання корупції", {
        reply_markup: antiCorruption,
      });
      break;
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
        },
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
