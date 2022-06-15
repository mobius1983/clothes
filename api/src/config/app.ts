export default {
  db: {
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME as string,
    driver: process.env.DB_DRIVER,
    port: Number(process.env.DB_PORT) || 5432,
  },
};
