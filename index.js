const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

var clients = [
    {id: 1, nome: "Gustavo Viegas", telefone: "53981125790"},
    {id: 2, nome: "Eduardo Banana", telefone: "53912345679"},
    {id: 3, nome: "Marcus Person", telefone: "53894545166"},
    {id: 4, nome: "Steve Morgan", telefone: "53923165146"},
    {id: 5, nome: "Adriano Terrera", telefone: "53965646594"},
    {id: 6, nome: "Tranca Rua", telefone: "53971005669"},
    {id: 7, nome: "Frango Temperado", telefone: "53561654128"},
    {id: 8, nome: "Kai'sa Ichatia", telefone: "53231656481"}
];
function middleware (req, res, next) {
    const {url, method} = request;
    console.log(`${method} - ${url} at ${new Date()}`)
}

app.use(middleware)

app.get('/clients', (req, res) => res.json(clients));

app.get('/clients/:id', (req, res) => {
    const client = clients.filter(value => value.id == req.params.id)
    res.json(client)
})

app.post('/clients', (req, res) =>{
    clients.push(req.body)
    res.send(req.body)
})

app.put('/clients/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    let client = clients.filter(value => value.id == id);
    if(client == undefined){
        res.status(400).send()
    }else {
        client.nome = nome;
        res.status(200).json(client)
    }

})

app.delete('/clients/:id', (req, res) => {
    const id = req.params.id;
    const index = clients.findIndex(value => value.id == id);
    if(index == -1){
        res.status(400).send()
    }else {
        clients.splice(index, 1);
        response.status(204).send();
    }

})
app.listen(3000)