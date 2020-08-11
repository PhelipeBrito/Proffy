const express = require('express')
const server = express()

const {
    pageLanding,
    study,
    giveClasses,
    saveClasses
} = require('./pages')
//configurar o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//start and configuration of the server
server
//get the data from req.body
.use(express.urlencoded({extended: true}))
//config static files
server.use(express.static("public"))
//aplication route
.get("/", pageLanding) //rotas
.get("/study", study)
.get("/give-classes", giveClasses)
.post("/save-classes", saveClasses)
//server start
.listen(5500)  