const express = require('express')

let app = express()

// Render static css and js
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})