const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    const name = req.query?.name || "world";
    res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>XSS Demo Server</title>
        <link rel="stylesheet" href="public/style.css">
    </head>
    <body>
        <h1>Hello ${name}</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
            <input type="submit" />
        </form>
        <script src="public/main.js"></script>
    </body>
  </html>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})