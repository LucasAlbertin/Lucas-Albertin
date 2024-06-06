const express = require('express');
const app = express();
const PORT = 3000;

const alunos = [
    { RA: '10502923210044', nome: 'Lucas', email: 'lucas.albertin@fatec.com'},
    { RA: '10502923210045', nome: 'Luca', email: 'luca.albertin@fatec.com'},
    { RA: '10502923210046', nome: 'Luc', email: 'luc.albertin@fatec.com'},
];

app.get('/alunos', (req, res) => {
    res.json(alunos);
});

app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
})