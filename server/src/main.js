const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.originalUrl)
    next()
})

app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    const name = req.query?.name || "world";
    const theme = req.query?.theme || "";
    res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>XSS Demo Server</title>
        <link rel="stylesheet" href="public/style.css">
    </head>
    <body>
        <h1 data-theme="${theme}">Hello ${name}</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
            <label for="theme">Theme</label>
            <select name="theme" id="theme">
                <option value="">--default--</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input type="submit" />
        </form>
        <script src="public/main.js"></script>
    </body>
  </html>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})