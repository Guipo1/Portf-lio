const express = require('express');
const app = express();
const path = require('path');
app.get('/', (req,res) => {
res.sendFile(path.join(__dirname, 'Portfólio.html'));
});
app.get('/style.css', (req, res) => {
res.sendFile(path.join(__dirname, 'style.css'));
});
app.listen(3000, () => console.log('rodando'));
