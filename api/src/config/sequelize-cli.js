require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER || 'postgres',
    port: process.env.DB_PORT,
    timezone: 'UTC',
    logging: (log) => {
      console.log(log);
    },
    dialectOptions: {
      decimalNumbers: true,
    },
    decimalNumbers: true,
    pool: {
      max: 100,
      min: 0,
      idle: 20000,
      acquire: 20000,
    },
    define: {
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
    logging: false,
    timezone: 'UTC',
    define: {
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  },
};
