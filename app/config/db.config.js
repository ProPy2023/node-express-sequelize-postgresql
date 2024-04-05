/*module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
*/

module.exports = {
  HOST: "dpg-co7bpEn109ks73860js0-a.oregon-postgres.render.com",
  USER: "postgres_user",
  PASSWORD: "J4lg1IhBM7viuX8EH6PnUKx8Q9U8xECm",
  DB: "testdb_vnej",
  dialect: "postgres",
  dialectOptions: {
    "ssl": true   ,
    keepAlive: true
  },
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
