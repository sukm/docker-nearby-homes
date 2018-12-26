const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
      timestamps: false,
    },
  },
);

module.exports = db;
