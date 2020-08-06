// Dados da aplicação
const proffys = [
    {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "98888888",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]

    },
    {
        name: "Emanuel Lázaro",
        avatar: "https://avatars0.githubusercontent.com/u/64848198?s=400&u=c38a3f483f00e8c2408a4416bf609ef64d1662a3&v=4",
        whatsapp: "98888888",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]

    }]

const subjects = [
    "Biologia",
    "Artes",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const position = +  subjectNumber - 1
    return subjects[position]
}

//Funcionalidades
function pageLanding(req, res){
    return res.render("index.html")
}


function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}


function pageGiveClasses(req, res){
    const data = req.query
    
    // Se tiver dados (data)
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        // Adicionar data ao objeto Proffy   
        proffys.push(data)
        return res.redirect("/study")
    }

    //Se não, mostrar a página
    return res.render("give-classes.html", {weekdays, subjects})
}




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
    // Configurar arquivos estáticos (CSS, scripts, imagens)
    .use(express.static("public"))
    
    //Rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)



    //Start server
    .listen(5500)
