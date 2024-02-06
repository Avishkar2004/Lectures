const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')


app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.get("/list_movies", (req, res) => {
    fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
        res.json(data);
    });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});