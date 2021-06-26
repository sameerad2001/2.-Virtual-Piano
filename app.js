/* 
Sameer Ahmed 
Fell free to contact me for any queries

Github : https://github.com/sameerad2001/PersonalWebsiteDemo/edit/master/README.md
Linkedin : https://www.linkedin.com/in/sameer-ahmed-0b7902176/
Email : Sameerad2001@gmail.com
*/

const express = require('express')

let app = express()

// Render static css and js
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(3000, () => {
    console.log('server started on port 3000');
})