const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require('./db');

const app = express();
app.use(express.static(__dirname + '/'));
app.use('/node_modules', express.static('node_modules'));
app.use('/dist', express.static('dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/medicine', (req, res) => {
    connection.query('SELECT * FROM medicine', (err, result) => {
        if (err) return res.json({ error: err });
        
        // Send medicine data as JSON
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log("Running on port 3000");
});
