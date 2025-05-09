import express from 'express';
import useWebRoutes from './web.js';

const app = express();
const PORT = 3000;

useWebRoutes(app);

// Configuração EJS
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");


app.listen(PORT, () => {
  console.log(`Servidor escutando em http://127.0.0.1:${PORT}`);
});