const { InlineKeyboard } = require("grammy");

const hcpInteractionMenu = new InlineKeyboard()
  .text("Без надання послуг", "hcpInteractionWithoutPoz")
  .row()
  .text("Надання послуг HCP", "hcpInteractionWithPoz")
  .row()
  .text("< В головне меню", "backToMainMenu");

const hcpInteractionWithPoz = new InlineKeyboard()
  .text("Вимоги і обмеження", "hcpInteractionWithPozRequirements")
  .row()
  .text("Критерії вибору HCP", "hcpInteractionWithPozCriteria")
  .row()
  .text("Збирання доказів", "hcpInteractionWithPozEvidence")
  .row()
  .text("< В головне меню", "backToMainMenu");

const hcpInteractionWithoutPoz = new InlineKeyboard()
  .text("Вимоги і обмеження", "hcpInteractionWithoutPozRequirements")
  .row()
  .text("Реєстрація залучення", "hcpInteractionWithoutPozInstruction")
  .row()
  .text("Збирання доказів", "hcpInteractionWithoutPozEvidence")
  .row()
  .text("< В головне меню", "backToMainMenu");

const hcpInteractionWithoutPozRequirements = new InlineKeyboard()
  .text("Загальні вимоги", "hcpInteractionWithoutPozRequirementsGeneral")
  .row()
  .text("Місце проведення заходу", "hcpInteractionWithoutPozRequirementsPlace")
  .row()
  .text("Харчування", "hcpInteractionWithoutPozRequirementsFood")
  .row()
  .text("Проїзд і проживання", "hcpInteractionWithoutPozRequirementsDrive")
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = {
  hcpInteractionMenu,
  hcpInteractionWithPoz,
  hcpInteractionWithoutPoz,
  hcpInteractionWithoutPozRequirements,
};
