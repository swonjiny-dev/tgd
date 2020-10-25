require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DATABASE,
    host: '127.0.0.1',
    port : process.env.DB_DEV_PORT,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_DATABASE,
    host: "127.0.0.1",
    port : process.env.DB_DEV_PORT,
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_PROD_USER,
    password: process.env.DB_PROD_PASSWORD,
    database: process.env.DB_DEV_DATABASE,
    host: '127.0.0.1',
    dialect: 'mysql',
    port : process.env.DB_PROD_PORT,
    logging: false,
  },
};