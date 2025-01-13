const { InlineKeyboard } = require("grammy");

const createEvent = new InlineKeyboard()
  .text("Так", "createEventConfirm")
  .row()
  .text("Ні", "shareSupportConfirm")
  .row()
  .text("< В головне меню", "backToMainMenu");

const createEventConfirm = new InlineKeyboard()
  .text("Ділова (комерційна)", "createEventConfirmBusiness")
  .row()
  .text("Наукова", "createEventConfirmSciences")
  .row()
  .text("Policy shaping", "createEventConfirmPolicy")
  .row()
  .text("< В головне меню", "backToMainMenu");

const createEventConfirmBusiness = new InlineKeyboard()
  .text(
    "1.Консультативна рада (Advisory Board)",
    "createEventConfirmBusinessAdvisory"
  )
  .row()
  .text("Участь у конгресі", "createEventConfirmBusinessCongress")
  .row()
  .text(
    "Запуск продукту (Product Launch) ",
    "createEventConfirmBusinessProduct"
  )
  .row()
  .text(
    "Промоційний захід з залученням спікера",
    "createEventConfirmBusinessPromo"
  )
  .row()
  .text("Симпозіум", "createEventConfirmBusinessSymposium")
  .row()
  .text("< В головне меню", "backToMainMenu");

const createEventConfirmSciences = new InlineKeyboard()
  .text(
    "Консультативна  рада (Advisory Board)",
    "createEventConfirmSciencesAdvisory"
  )
  .row()
  .text("Участь у конгресі", "createEventConfirmSciencesCongress")
  .row()
  .text("Запуск продукту (Product Launch)", "createEventConfirmSciencesProduct")
  .row()
  .text("Обмін інформацієї після конресу", "createEventConfirmSciencesSwap")
  .row()
  .text("Наставництво (Preceptorship)", "createEventConfirmSciencesPreceptor")
  .row()
  .text("Медична освіта (RIME)", "createEventConfirmSciencesRime")
  .row()
  .text(
    "Захід щодо обміну науковою інформацією",
    "createEventConfirmSciencesInfo"
  )
  .row()
  .text("< В головне меню", "backToMainMenu");

const createEventConfirmPolicy = new InlineKeyboard()
  .text(
    "Консультативна рада (Advisory Board)",
    "createEventConfirmPolicyAdvisory"
  )
  .row()
  .text("Захід з залученням спікера", "createEventConfirmPolicySpeaker")
  .row()
  .text("Симпозіум", "createEventConfirmPolicySymposium")
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = {
  createEvent,
  createEventConfirm,
  createEventConfirmBusiness,
  createEventConfirmSciences,
  createEventConfirmPolicy,
};
