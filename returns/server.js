
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let returnedProducts = [];

app.post('/return', (req, res) => {
    const { productName } = req.body;
    returnedProducts.push(productName);
    res.status(200).send({ message: 'Product returned successfully' });
});

app.get('/returned-products', (req, res) => {
    res.status(200).send(returnedProducts);
});
app.post('/reset-returned-products', (req, res) => {
    returnedProducts = [];
    res.status(200).send({ message: 'Returned products reset successfully' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});