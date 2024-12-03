const { InlineKeyboard } = require("grammy");

const createPatientsSupport = new InlineKeyboard()
  .text("Читати далі", "createPatientsSupportPt2")
  .row()
  .text("< В головне меню", "backToMainMenu");

const createPatientsSupportPt2 = new InlineKeyboard()
  .text("Читати спочатку", "createPatientsSupport")
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = { createPatientsSupport, createPatientsSupportPt2 };
