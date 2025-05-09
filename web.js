export default function useWebRoutes(app) {

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    app.get('/eduardo', (req, res) => {
        res.send('Hello Eduardo!');
    });
    
    app.get('/user/:id', (req, res) => {
        
        res.json({
            params: req.params,
            query: req.query,
            method: req.method,
            headers: req.headers,
        });
    
    });

    app.get('/portifolio', (req, res) => {
        res.render('portifolio', {nome: req.query.nome});
    });
    
}