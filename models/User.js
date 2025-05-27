import { DataTypes } from 'sequelize';
import { sequelize } from '../database/sequelize.js';

const table_options = {
  tableName: 'users'
};

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  api_key: {
    type: DataTypes.STRING(64),
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
}, table_options);

export default User;
