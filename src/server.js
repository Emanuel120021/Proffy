const Database = require('./database/db')
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')
//Servidor
const express  = require('express')
const server   = express()


//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCash: true
})


// Início e configuração do servidor
server
    // Receber os dados do req.body

    .use(express.urlencoded({ extended: true}))

    // Configurar arquivos estáticos (CSS, scripts, imagens)
    .use(express.static("public"))
    
    //Rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)



    //Start server
    .listen(5500)
