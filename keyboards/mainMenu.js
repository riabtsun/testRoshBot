const { InlineKeyboard } = require("grammy");
// import { Menu } from "@grammyjs/menu";
// Основне меню

const mainMenu = new InlineKeyboard()
  .text("Документи compliance", "ethics-menu")
  .row()
  .text("Я хочу взаємодіяти з HCP", "hcpInteractionMenu")
  .row()
  .text("Я хочу створити захід", "createEvent")
  .row()
  .text("Я хочу надати підтримку на запит", "shareSupport")
  .row()
  .text("Я хочу створити PSP", "createPatientsSupport")
  .row()
  .text("Я хочу створити партнерство", "createPartnership")
  .row()
  .text("Шаблони документів", "docsTemplates")
  .row()
  .text("Запобігання корупції", "antiCorruption");

module.exports = mainMenu;
