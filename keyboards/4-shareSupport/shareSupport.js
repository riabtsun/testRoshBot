const { InlineKeyboard } = require("grammy");

const shareSupport = new InlineKeyboard()
  .text("Ні", "shareSupportReject")
  .row()
  .text("Так", "shareSupportConfirm")
  .row()
  .text("< В головне меню", "backToMainMenu");

const shareSupportReject = new InlineKeyboard()
  .text("Медична освіта", "shareSupportRejectEducation")
  .row()
  .text("Незалежна публікація", "shareSupportRejectPublication")
  .row()
  .text("Підтримка пацієнтської спільноти", "shareSupportRejectPatients")
  .row()
  .text("Участь у конгресі", "shareSupportRejectCongress")
  .row()
  .text("Оплата членської участі", "shareSupportRejectCharity")
  .row()
  .text("Дослідження", "shareSupportRejectExplore")
  .row()
  .text(
    "Підтримка інфраструктури (надання обладнання, ремонт) ",
    "shareSupportRejectSupport"
  )
  .row()
  .text("< В головне меню", "backToMainMenu");

const shareSupportRejectEducation = new InlineKeyboard()
  .text("Бюджет менше 10 тисяч Євро", "shareSupportRejectEducationSmall")
  .row()
  .text("Бюджет 10 тисяч Євро або більше", "shareSupportRejectEducationBig");

const shareSupportRejectPublication = new InlineKeyboard()
  .text("Бюджет менше 10 тисяч Євро", "shareSupportRejectPublicationSmall")
  .row()
  .text("Бюджет 10 тисяч Євро або більше", "shareSupportRejectPublicationBig");

const shareSupportRejectPatients = new InlineKeyboard()
  .text("Бюджет менше 10 тисяч Євро", "shareSupportRejectPatientsSmall")
  .row()
  .text("Бюджет 10 тисяч Євро або більше", "shareSupportRejectPatientsBig");

const shareSupportRejectCongress = new InlineKeyboard()
  .text("Бюджет менше 10 тисяч Євро", "shareSupportRejectCongressSmall")
  .row()
  .text("Бюджет 10 тисяч Євро або більше", "shareSupportRejectCongressBig");

const shareSupportRejectCharity = new InlineKeyboard()
  .text("Бюджет менше 10 тисяч Євро", "shareSupportRejectCharitySmall")
  .row()
  .text("Бюджет 10 тисяч Євро або більше", "shareSupportRejectCharityBig");

const shareSupportRejectExplore = new InlineKeyboard()
  .text("Бюджет менше 10 тисяч Євро", "shareSupportRejectExploreSmall")
  .row()
  .text("Бюджет 10 тисяч Євро або більше", "shareSupportRejectExploreBig");

const shareSupportRejectSupport = new InlineKeyboard()
  .text("Бюджет менше 10 тисяч Євро", "shareSupportRejectSupportSmall")
  .row()
  .text("Бюджет 10 тисяч Євро або більше", "shareSupportRejectSupportBig");

const shareSupportConfirm = new InlineKeyboard()
  .text("a.Менше 5 тисяч Євро", "shareSupportConfirm5k")
  .row()
  .text("b.Від 5 до 10 тисяч Євро", "shareSupportConfirm10k")
  .row()
  .text("c.Більше 10 тисяч Євро", "shareSupportConfirm11k")
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = {
  shareSupport,
  shareSupportReject,
  shareSupportConfirm,
  shareSupportRejectEducation,
  shareSupportRejectPublication,
  shareSupportRejectPatients,
  shareSupportRejectCongress,
  shareSupportRejectCharity,
  shareSupportRejectExplore,
  shareSupportRejectSupport,
};
