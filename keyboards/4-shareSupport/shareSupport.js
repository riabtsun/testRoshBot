const { InlineKeyboard } = require("grammy");

const shareSupport = new InlineKeyboard()
  .text("Ні", "shareSupportReject")
  .row()
  .text("Так", "shareSupportConfirm")
  .row()
  .text("< В головне меню", "backToMainMenu");

const shareSupportReject = new InlineKeyboard()
  .text("a.\tМедична освіта", "shareSupportRejectEducation")
  .row()
  .text("b.\tНезалежна публікація", "shareSupportRejectPublication")
  .row()
  .text("c.\tПідтримка пацієнтської спільноти", "shareSupportRejectPatients")
  .row()
  .text("d.\tУчасть у конгресі", "shareSupportRejectCongress")
  .row()
  .text("e.\tОплата членської участі", "shareSupportRejectCharity")
  .row()
  .text("f.\tДослідження", "shareSupportRejectExplore")
  .row()
  .text(
    "g.\tПідтримка інфраструктури (надання обладнання, ремонт) ",
    "shareSupportRejectSupport"
  )
  .row()
  .text("< В головне меню", "backToMainMenu");

const shareSupportConfirm = new InlineKeyboard()
  .text("a.Менше 5 тисяч Євро", "shareSupportConfirm5k")
  .row()
  .text("b.Від 5 до 10 тисяч Євро", "shareSupportConfirm10k")
  .row()
  .text("c.Більше 10 тисяч Євро", "shareSupportConfirm11k")
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = { shareSupport, shareSupportReject, shareSupportConfirm };
