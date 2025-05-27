import { DataTypes } from 'sequelize';
import { sequelize } from '../database/sequelize.js';

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
});

export default Task;
