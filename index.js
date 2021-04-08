const express = require('express')
const path = require('path')

const app = express()
const port = 5014 || process.env.PORT 
const rootDirectory = path.join(__dirname, '/public')

app.use(express.static(rootDirectory))

app.listen(port, () => {
    console.log('listening up to port:', port)
})
