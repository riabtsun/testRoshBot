const { InlineKeyboard } = require("grammy");

const ethicsMenu = new InlineKeyboard()
  .url("a.Кодекс етичної поведінки", "https://www.roche.com/about/governance/code-of-conduct")
  .row()
  .url("b.Глобальні документи", "https://sites.google.com/roche.com/grouplegal/roche-directives-guidelines")
  .row()
  .url("c.Локальні документи", "https://drive.google.com/drive/folders/1KJv4iLn2lUK7nf3k7CtbYqNUm_q0xlRo ")
  .row()
  .url("d.Етичний стандарт Рош Україна", "https://sites.google.com/roche.com/roche-ua-guide/%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8-%D1%96-%D0%BE%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F")
  .row()
  .text("< В головне меню", "backToMainMenu");

module.exports = ethicsMenu;
