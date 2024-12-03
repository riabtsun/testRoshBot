const { InlineKeyboard } = require("grammy");

const hcpInteractionMenu = new InlineKeyboard()
  .text(
    "i.Хочу залучити ПОЗ до участі у заході без надання послуг",
    "hcpInteractionWithoutPoz"
  )
  .row()
  .text("ii.Хочу залучити ПОЗ до надання послуг", "hcpInteractionWithPoz")
  .row()
  .text("< В головне меню", "backToMainMenu");

const hcpInteractionWithPoz = new InlineKeyboard()
  .text("1.Вимоги і обмеження", "hcpInteractionWithPozRequirements")
  .row()
  .text("2.Критерії вибору ПОЗ", "hcpInteractionWithPozCriteria")
  .row()
  .text(
    "3.Збирання доказів правомірного і етичного залучення",
    "hcpInteractionWithPozEvidence"
  )
  .row()
  .text("< В головне меню", "backToMainMenu");

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
    "hcpInteractionWithoutPozEvidence"
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

module.exports = {
  hcpInteractionMenu,
  hcpInteractionWithPoz,
  hcpInteractionWithoutPoz,
  hcpInteractionWithoutPozRequirements,
};
