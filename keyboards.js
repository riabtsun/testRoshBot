const { Keyboard, InlineKeyboard } = require("grammy");
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
  .text("3.Я хочу створити захід", "mainmenu3")
  .row()
  .text("4.Я хочу надати підтримку на запит", "mainMenu4")
  .row()
  .text(
    "5.Я хочу створити рішення для підтримки пацієнтів (текст)",
    "mainMenu5"
  )
  .row()
  .text("6.Я хочу створити партнерство (текст)", "mainMenu6")
  .row()
  .text("7.Шаблони документів", "mainMenu7")
  .row()
  .text("8.Запобігання корупції", "mainMenu8");

const ethicsMenu = new InlineKeyboard()
  .text("a.Кодекс етичної поведінки (посилання)", "ethicMenu1")
  .row()
  .text("b.Глобальні документи (посилання)", "ethicsMenu2")
  .row()
  .text("c.Локальні документи (посилання)", "ethicsMenu3")
  .row()
  .text("d.Етичний стандарт Рош Україна (посилання)", "ethicsMenu4")
  .row()
  .text("< В головне меню", "backToMainMenu");

const hcpInteractionMenu = new InlineKeyboard()
  .text(
    "i.Хочу залучити ПОЗ до участі у заході без надання послуг",
    "hcpInteractionWithoutPoz"
  )
  .row()
  .text("ii.Хочу залучити ПОЗ до надання послуг", "hcpInteractionWithPoz")
  .row()
  .text("< В головне меню", "backToMainMenu");

const mainMenuBtn = new InlineKeyboard().text(
  "< В головне меню",
  "backToMainMenu"
);

const hcpInteractionWithoutPoz = new InlineKeyboard()
  .text("1.Вимоги і обмеження", "hcpInteractionWithoutPozRequirements")
  .row()
  .text(
    "2.Коротка інструкція щодо реєстрації залучення",
    "hcpInteractionWithoutPozInstruction"
  )
  .row()
  .text(
    "3.Збирання доказів правомірного і етичного залучення",
    "hcpInteractionWithoutPozEvidence "
  )
  .row()
  .text("< В головне меню", "backToMainMenu");

const hcpInteractionWithoutPozRequirements = new InlineKeyboard()
  .text("a.Загальні вимоги", "hcpInteractionWithoutPozRequirementsGeneral")
  .row()
  .text(
    "b.Місце проведення заходу",
    "hcpInteractionWithoutPozRequirementsPlace"
  )
  .row()
  .text("c.Харчування", "hcpInteractionWithoutPozRequirementsFood")
  .row()
  .text("d.Проїзд і проживання", "hcpInteractionWithoutPozRequirementsDrive")
  .row()
  .text("< В головне меню", "backToMainMenu");

const menus = {
  mainMenu,
  ethicsMenu,
  mainMenuBtn,
  hcpInteractionMenu,
  hcpInteractionWithoutPoz,
};
module.exports = menus;
