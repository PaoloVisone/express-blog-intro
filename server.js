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
        {
            titolo: "Ciambellone",
            contenuto: ["uova", "farina", "burro"],
            immagine: "http://localhost:3000/images/ciambellone.jpeg",
            tags: ["ciambella", "dolce", "cucina"]
        },
        {
            titolo: "Cracker barbabietola",
            contenuto: ["barbabietola", "farina", "sale", "semi"],
            immagine: "http://localhost:3000/images/cracker_barbabietola.jpeg",
            tags: ["cracker", "dolce", "cucina", "barbabietola"]
        },
        {
            titolo: "Pane fritto dolce",
            contenuto: ["pane", "latte", "zucchero"],
            immagine: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
            tags: ["pane", "dolce", "cucina", "fritto"]
        },
        {
            titolo: "Pasta barbabietola",
            contenuto: ["pasta", "barbabietola", "semola"],
            immagine: "http://localhost:3000/images/pasta_barbabietola.jpeg",
            tags: ["pasta", "barbabietola", "cucina"]
        },
        {
            titolo: "Torta Paesana",
            contenuto: ["pane", "farina", "burro", "uova", "cacao"],
            immagine: "http://localhost:3000/images/torta_paesana.jpeg",
            tags: ["Torta", "dolce", "cucina", "cacao"]
        }
    ]

    // res oggetto in formato json
    res.type('json').send(menu);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
1
