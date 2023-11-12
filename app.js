const express = require('express')
const app = express()
const port = 3000
app.get('/test', (req , res)=>res.send('Bonjour tout le monde !'))
app.listen(port, ()=>console.log(`http://localhost:${port}`))
