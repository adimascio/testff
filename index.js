const fs = require('fs');
const express = require('express');

const app = express();

app.use('/ajax', (req, res) => {
    res.json({ msg: 'hello' })
});

app.use('/page1', (req, res) => {
    const index_html = fs.readFileSync('index.html').toString()
    res.send(index_html.replace(/page1/g, 'page2'));
});

app.use('/page2', (req, res) => {
    const index_html = fs.readFileSync('index.html').toString()
    res.send(index_html);
});

app.use('/', (req, res) => {
    res.redirect('/page1');
});

app.listen(3000);