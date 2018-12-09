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

// host: process.env.MYSQL_URL,
//   user     : ,
//     password : ,
//       database :
module.exports = db;

// const Sequelize = require('sequelize');

// const db = new Sequelize('nearbyHomes', 'skim7', 'gorfldprxj#', {
//   host: 'hr-fcc-nearby-homes.cppzgmwnb7qi.us-east-1.rds.amazonaws.com',
//   dialect: 'mysql',
//   operatorsAliases: false,
//   define: {
//     timestamps: false,
//   },
// });

// module.exports = db;
