const express = require('express');

const host = "127.0.0.1";
const porta = "5500";

const app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
})

app.listen(porta, function(){
    console.log(`Servidor rodando em: http://${host}:${porta}`);
});