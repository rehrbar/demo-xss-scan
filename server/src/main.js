const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>XSS Demo Server</title>
        <link rel="stylesheet" href="public/style.css">
    </head>
    <body>
        <h1>Hello World</h1>
        <script src="public/main.js"></script>
    </body>
  </html>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})