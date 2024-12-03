const { InlineKeyboard } = require("grammy");

const antiCorruption = new InlineKeyboard()
  .text("Заборона корупції та неправомірної вимоги", "antiCorruptionBan")
  .row()
  .text("Конфлікт інтересів", "antiCorruptionConflict")
  .row()
  .text(
    "Повідомити про корупцію або конфлікт інтересів",
    "antiCorruptionInform"
  )
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = antiCorruption;
