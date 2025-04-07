const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const productRoute = require('./routes/products');

app.use((req, res, next) => {
    const logEntry = {
        "timestamp" : new Date().toISOString(),
        "method" : req.method,
        "url" : req.url
    }

    fs.readFile('./data/logs.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send("Error.");

        const logs = JSON.parse(data);
        logs.push(logEntry);

        fs.writeFile('./data/logs.json', JSON.stringify(logs, null, 2), (err) => {
            if (err) return res.status(500).send("Error.")
        })
    })    
    next();
})

app.use('/products', productRoute);

app.use((err, req, res, next) => {
    console.error(`Error :  ${err.message}`);
    res.status(500).send("Error occured.")
})

app.listen(3000, ()=> console.log('Server stated...'))