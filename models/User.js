
import { DataTypes } from "sequelize";
import { db } from "../db/db.js";

const User = db.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
    },
    email_id: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      // values: ['male', 'female', 'others']
    },
  },
  
);
export default User;
