const { InlineKeyboard } = require("grammy");
const {mainMenu} = require('../mainMenu')
// const {bot} = require("bot")
//
// bot.on( "callback_query:data", async (ctx)=>{
//   const callBackData = ctx.callbackQuery.data;
//   switch (callBackData) {
//     case "hcpInteractionWithoutPozRequirementsGeneral":
//       await ctx.callbackQuery.message.editText("Рош Україна уникає надання будь-яких благ ПОЗ  або закладам охорони здоров'я, які можуть бути сприйняті як неправомірні стимули для призначення, рекомендації, закупівлі, замовлення, постачання, використання, продажу, оренди або введення лікарських засобів Roche, і бере до уваги можливе сприйняття таких дій перед тим, як їх здійснити. \n" +
//         "\n" +
//         "ПОЗ має бути зареєстрований в EpicX.  \n" +
//         "\n" +
//         "Якщо Ви залучаєте ПОЗ до участі в заході, Ви маєте визначити критерії на підставі яких Ви обираєте саме цього ПОЗ для залучення.  ",{reply_markup: mainMenu})
//   }
// })