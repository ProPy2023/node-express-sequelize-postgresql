const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });


// Connection string
const connectionString = 'postgres://postgres_user:J4lg1IhAM7viuX8EH6PnUKx8Q9U8xECm@dpg-co7bp0n109ks73860js0-a.oregon-postgres.render.com/testdb_vnej';

// Initialize Sequelize with the connection string
const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres', // Specify the dialect
  dialectOptions: {
    ssl: true // Enable SSL
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
