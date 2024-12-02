const { InlineKeyboard } = require("grammy");

const docsTemplates = new InlineKeyboard()
  .url("Згода лікаря на обробку персональних даних", "https://docs.google.com/document/d/11D2w039owMPNlOmTSK_NyMhSqMZbS9Om/edit?usp=drive_link&ouid=117136388431829468750&rtpof=true&sd=true")
  .row()
  .url(
    "b.Згода лікаря на розкриття інформації про отримані кошти/підтримку",
    "https://docs.google.com/document/d/1lmnaeK5uLaCyS2vAJYQfb8OU_LY_gBbx/edit?usp=drive_link&ouid=117136388431829468750&rtpof=true&sd=true"
  )
  .row()
  .url("c.Договір про надання послуг", "https://docs.google.com/document/d/1kZ5u7o6sBjAyMLjgMkmGNOWLylE7858v/edit?usp=drive_link&ouid=117136388431829468750&rtpof=true&sd=true")
  .row()
  .url("d.Угода про співпрацю (TAE Development)", "https://docs.google.com/document/d/1wEagnanpME3yuAORNlK54KvHA7fly-NT/edit?usp=drive_link&ouid=117136388431829468750&rtpof=true&sd=true")
  .row()
  .url("e.Угода про співпрацю з пацієнтом ", "https://drive.google.com/drive/folders/1zS-XAvz5-Ina38A8qPG4PZY-YooxcoEh?usp=drive_link")
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = docsTemplates;
