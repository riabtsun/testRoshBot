const { InlineKeyboard } = require("grammy");

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

module.exports = ethicsMenu;
