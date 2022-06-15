import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import app from './app';
import { Admin } from '../models/admin';
import { Client } from '../models/client';

const sequelize = new Sequelize({
  database: app.db.name,
  username: app.db.user,
  password: app.db.password,
  host: app.db.host,
  dialect: app.db.driver as Dialect,
  port: app.db.port,
  logging: console.log,
  models: [Admin, Client],
});

export default sequelize;
