import express from 'express';
import webRouter from "./routes/web.js";
import './database/database.js'; 

const app = express();

// Configuração EJS
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", ["./views", "./views/includes"]);

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Configuração de rotas
app.use('/', webRouter);

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Servidor web iniciado: http://localhost:${PORT}/`);
    console.log('Pressione Ctrl+C para encerrar o servidor.');
});