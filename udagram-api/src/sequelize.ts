import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
// const DATABASE_URI="postgresql://postgres:123456789@localhost:5432/udagram"
// console.log(config.password)
// console.log(config.username)
// console.log(config.database)
 //export const sequelize = new Sequelize(`postgresql://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);
//export const sequelize = new Sequelize(DATABASE_URI);

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port:config.dbport,
  
  dialect: "postgres",
  storage: ":memory:",
});
