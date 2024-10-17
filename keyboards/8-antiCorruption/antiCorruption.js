const { InlineKeyboard } = require("grammy");

const antiCorruption = new InlineKeyboard()
  .text("a.Заборона корупції та неправомірної вимоги", "antiCorruptionBan")
  .row()
  .text("b.Конфлікт інтересів ", "antiCorruptionConflict")
  .row()
  .text(
    "c.Повідомити про корупцію або конфлікт інтересів",
    "antiCorruptionInform"
  )
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = antiCorruption;
