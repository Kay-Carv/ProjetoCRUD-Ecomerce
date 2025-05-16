const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs').promises;

const app = express();
const Port = 3001;
//Middleware para permitir que o frontend acesse 
//o servidor backend em diferentes dominios
app.use(cors());
//Middleware para verificar se o corpo das requisições estão como json.
app.use(express.json());

//Middleware para 
app.use(express.static('static'));

// ROTA -GET-BUSCAR PRODUTOS
app.get('/produtos', async(req,res) =>{ //É uma ação que pode executar mais de uma coisa ao mesmo tempo
    // Tratamento de erros para evitar crashs
    try {
        const file =path.join(__dirname,'data','produtos.json');
        const data = await fs.readFile(file,'utf8'); //await = esperar antes para ler o arquivo
        const produtos = JSON.parse(data)
        res.json(produtos)
    } catch (error){
        console.log("Erro ao ler o arquivo", error)
        res.status(500).json({message:"Erro ao buscar os produtos"})
    }
})

// ROTA ADICIONAR PRODUTOS-POST

app.post('/carrinho/adicionar', (req,res)=>{
    const {produtoId, quantidade} =req.body;
    console.log(`Produto ${produtoId} adicionado ao carrinho ${quantidade}`);
    res.status(201).json({message: "Produto adicionado ao carrinho com sucesso"})
})

// RODAR O SERVIDOR BACKEND

app.listen(Port, ()=>{
    console.log(`Servidor rodadando em http:localhost:${Port}`)
})