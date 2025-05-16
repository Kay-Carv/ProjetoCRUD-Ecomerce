# Objetivo

Esse repositório foi utilizado como base de conteúdo para a CP6 de WebDev, onde é preciso criar um ecomerce dinamico que salva dados na pasta `backend/data` dentro de um servidor `NODE`, que são utilizados para devolver essas informção para a tela de frontend em `REACT`

# Como instalar e rodar o projeto

**Pré requisitos**

**Node**: Versão mais recente do `NODE.js` instalada

_Para verificar a versão instalada_
```bash
node -v
```

_Verifique que o `npm` esteja instalado_
```bash
npm -v
```

Antes de continuar os próximos passos: Certifique que o `node.js` está instaldo ou _Instale o node.js se necessário_

**01.** Instale ou clone o projeto:

```bash
git clone <link_desse_repositório.git
cd <nome do arquivo do projeto   #Acesse a pasta do projeto
```


**02.** Instalação dos módulos no backend

_Certifiqui-se de acessar a pasta correta_

```bash
cd backend   #Acessar a pasta backend
```

_Instalar dependências_
```bash
npm install
```

**03.** Instalação dos módulos no frontend


_Certifiqui-se de acessar a pasta correta_

```bash
cd frontend   #Acessar a pasta frontend
```

_Instalar dependências_
```bash
npm install
```

**04.** Rodando o projeto

Após seguir os precedimentos dos passos anteriores, rode as partes do projeto de maneira simultanea

- Acesse a pasta backend
```bash
cd backend   #Acessar a pasta backend
```


- Rode o servidor node 
```bash    
node server.js
```

**Crie um novo terminal**

- Acesse a pasta ``frontend``
```bash
cd frontend   #Acessar a pasta frontend
```
- Rode a dependencia em REACT
```bash
npm run dev   
```
**OBS:** Logo após isso, acesse o link que aparecerá no seu terminal parecido com:
        _Local_:   [http://localhost:5173/](http://localhost:5173/)



# Veja também

Projeto loja de bicicletas usando `CRUD` e gerenciamento inteligente de imagens: [Clique aqui](https://github.com/GrupoCodeNexus/CP5-WebDev_REACT-NODE.git)