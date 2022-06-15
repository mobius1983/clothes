import 'reflect-metadata';
import sequelize from './config/sequelize';
import { startServer } from './app';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('connection database sucessfully');

    const server = await startServer();

    server.listen(process.env.PORT, () => {
      console.log(`Server running in port ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
