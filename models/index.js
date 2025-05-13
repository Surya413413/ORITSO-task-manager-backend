const sequelize = require('../config/db');
const Task = require('./task');

const syncDB = async () => {
  await sequelize.sync();
  console.log("Database synced");
};

module.exports = { Task, syncDB };
