const { InlineKeyboard } = require("grammy");

const backToMainMenu = new InlineKeyboard().text(
  "Повернутись в головне меню",
  "backToMainMenu"
);

module.exports = backToMainMenu;
