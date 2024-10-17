const { InlineKeyboard } = require("grammy");

const docsTemplates = new InlineKeyboard()
  .url("Згода лікаря на обробку персональних даних", "google.com")
  .row()
  .url(
    "b.Згода лікаря на розкриття інформації про отримані кошти/підтримку",
    "google.com"
  )
  .row()
  .url("c.Договір про надання послуг", "google.com")
  .row()
  .url("d.Угода про співпрацю (TAE Development)", "google.com")
  .row()
  .url("e.Угода про співпрацю з пацієнтом ", "google.com")
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = docsTemplates;
