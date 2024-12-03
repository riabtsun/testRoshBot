const { InlineKeyboard } = require("grammy");
// import { Menu } from "@grammyjs/menu";
// Основне меню

const mainMenu = new InlineKeyboard()
  .text("1. Документи з професійної етики", "ethics-menu")
  .row()
  .text(
    "2.Я хочу взаємодіяти з професіоналами охорони здоров’я (ПОЗ)",
    "hcpInteractionMenu"
  )
  .row()
  .text("3.Я хочу створити захід", "createEvent")
  .row()
  .text("4.Я хочу надати підтримку на запит", "shareSupport")
  .row()
  .text(
    "5.Я хочу створити рішення для підтримки пацієнтів",
    "createPatientsSupport"
  )
  .row()
  .text("6.Я хочу створити партнерство", "createPartnership")
  .row()
  .text("7.Шаблони документів", "docsTemplates")
  .row()
  .text("8.Запобігання корупції", "antiCorruption");

module.exports = mainMenu;
