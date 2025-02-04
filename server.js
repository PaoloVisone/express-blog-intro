// Importo express
const express = require('express')
const app = express()
const port = 3000

// Asset statici
app.use(express.static('public'));

// Rotta '/'
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// Rotta '/bacheca'
app.get('/bacheca', (req, res) => {
    const menu = [

    ]
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
1
