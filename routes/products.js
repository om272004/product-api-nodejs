const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        if(err) return res.status(500).send("Error occured.");
        res.json(JSON.parse(data));
    })
})

router.post('/', (req, res) => {

    const productData = req.body;

    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        if(err) return res.status(500).send("Error occured.");
        const dataArr = JSON.parse(data);
        dataArr.push(productData);

        fs.writeFile('./data/products.json', JSON.stringify(dataArr, null, 2), (err, data) => {
            if (err) return res.status(500).send("Error in creating product.");
            res.status(201).send("Product created successfully.")
        })
    })
});

router.get('/:id', (req, res) => {
    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send("Error occured");

        const dataArr = JSON.parse(data);
        const searchId = parseInt(req.params.id);

        const product = dataArr.find(u => u.id === searchId);

        if(!product) {
            res.status(500).send("Product not found.");
        }
        res.json(product);
    })
})

router.put('/:id', (req, res) => {
    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        const updateData = req.body;
        if (err) return res.status(500).send("Error occured");

        const searchId = parseInt(req.params.id);
        const dataArr = JSON.parse(data);
        const index = dataArr.findIndex(u => u.id === searchId);
        
        if(index === -1) return res.status(404).send("Product not found");

        dataArr[index] = {id : Number(searchId), updateData};

        fs.writeFile('./data/products.json', JSON.stringify(dataArr, null, 2), (err) => {
            if (err) return res.status(500).send("Error");
            res.send("successfull.");
        }) 
    })
})

router.delete('/:id', (req, res) => {
    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send("Error");

        const dataArr = JSON.parse(data);
        const id = parseInt(req.params.id);

        const newArr = dataArr.filter(u => u.id !== id);

        if (newArr.length === dataArr.length) return res.status(500).send("Product not found");

        fs.writeFile('./data/products.json', JSON.stringify(newArr, null, 2), (err) => {
            if (err) return res.status(500).send("error");
            res.send("Product deleted successfully.")
        })
    })
})

module.exports = router;