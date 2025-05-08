import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/eduardo', (req, res) => {
    res.send('Hello Eduardo!');
});

app.get('/user/:id', (req, res) => {
    
    res.send(`Hello ${req.method}!`);
    res.json({
        params: req.params,
        query: req.query,
        method: req.method,
        headers: req.headers,
    });

});

app.listen(PORT, () => {
  console.log(`Servidor escutando em http://127.0.0.1:${PORT}`);
});