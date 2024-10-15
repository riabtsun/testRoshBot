const MenuStat = require("../models/MenuStat.js");

async function incrementMenuStat(menuItem) {
  try {
    let stat = await MenuStat.findOne({ menuItem });

    if (stat) {
      stat.count += 1;
      await stat.save();
      console.log(`Статистика для ${menuItem} оновлена: ${stat.count}`);
    } else {
      stat = new MenuStat({ menuItem, count: 1 });
      await stat.save();
      console.log(`Статистика для ${menuItem} створена: 1`);
    }
  } catch (error) {
    console.error("Помилка при оновленні статистики:", error);
  }
}

module.exports = incrementMenuStat;
