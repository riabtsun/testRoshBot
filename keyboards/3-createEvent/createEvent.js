const { InlineKeyboard } = require("grammy");

const createEvent = new InlineKeyboard()
  .text("i.Так", "createEventConfirm")
  .row()
  .text("ii.Ні – перехід на сторінку Спонсорство", "createEventReject")
  .row()
  .text("< В головне меню", "backToMainMenu");

const createEventConfirm = new InlineKeyboard()
  .text("a.Ділова (комерційна)", "createEventConfirmBusiness")
  .row()
  .text("b.Наукова", "createEventConfirmSciences")
  .row()
  .text("c.Policy shaping", "createEventConfirmPolicy")
  .row()
  .text("< В головне меню", "backToMainMenu");

const createEventConfirmBusiness = new InlineKeyboard()
  .text(
    "1.Консультативна рада (Advisory Board)",
    "createEventConfirmBusinessAdvisory"
  )
  .row()
  .text("2.Участь у конгресі", "createEventConfirmBusinessCongress")
  .row()
  .text(
    "3.Запуск продукту (Product Launch) ",
    "createEventConfirmBusinessProduct"
  )
  .row()
  .text(
    "4.Промоційний захід з залученням спікера",
    "createEventConfirmBusinessPromo"
  )
  .row()
  .text("5.Симпозіум", "createEventConfirmBusinessSymposium")
  .row()
  .text("< В головне меню", "backToMainMenu");

const createEventConfirmSciences = new InlineKeyboard()
  .text(
    "1.Консультативна  рада (Advisory Board)",
    "createEventConfirmSciencesAdvisory"
  )
  .row()
  .text("2.Участь у конгресі", "createEventConfirmSciencesCongress")
  .row()
  .text(
    "3.Запуск продукту (Product Launch)",
    "createEventConfirmSciencesProduct"
  )
  .row()
  .text("4.Обмін інформацієї після конресу", "createEventConfirmSciencesSwap")
  .row()
  .text("5.Наставництво (Preceptorship)", "createEventConfirmSciencesPreceptor")
  .row()
  .text("6.Медична освіта (RIME)", "createEventConfirmSciencesRime")
  .row()
  .text(
    "7.Захід щодо обміну науковою інформацією",
    "createEventConfirmSciencesInfo"
  )
  .row()
  .text("< В головне меню", "backToMainMenu");

const createEventConfirmPolicy = new InlineKeyboard()
  .text(
    "1.Консультативна рада (Advisory Board)",
    "createEventConfirmPolicyAdvisory"
  )
  .row()
  .text("2.Захід з залученням спікера", "createEventConfirmPolicySpeaker")
  .row()
  .text("3.Симпозіум", "createEventConfirmPolicySymposium")
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = {
  createEvent,
  createEventConfirm,
  createEventConfirmBusiness,
  createEventConfirmSciences,
  createEventConfirmPolicy,
};
