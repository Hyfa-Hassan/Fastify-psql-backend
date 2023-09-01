import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
// export const db = new sequelize('postgres://postgres:postgres@127.0.0.1:5432/demo') // Example for postgres

export const db = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

export const connectDb = async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}