import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storage_path = path.join(__dirname, '../database');

// Configuração do banco de dados
export default {
  default: 'sqlite',

  sqlite: {
    dialect: 'sqlite',
    storage: path.join(storage_path, "database.sqlite")
  }, 

  mysql: {
    database: 'projetoweb',
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
  }, 

  pgsql: {
    database: 'projetoweb',
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: '5432',
    dialect: 'pgsql'
  }
}
