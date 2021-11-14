const express = require('express')

const app = express()
const path = require('path')

app.set('port', 5000)

//routes
app.get('/', (req,res)=> {
    res.send('Bienvenidos')
})

app.listen(app.get('port'), () => {
    console.log(`Bienvenido a mi aplicacion de node pouerto ${app.get('port')})`)
})