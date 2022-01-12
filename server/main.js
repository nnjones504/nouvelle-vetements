const express = require("express");
const cors = require("cors");
require("dotenv").config() 

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static("client"));

//import controller file
const controller = require("./controller");

app.get('/', (req,res) => {
    res.sendFile("index.html")
})

app.get(`/api/quote`, controller.getQuote);
app.get(`/api/`, controller.getProducts);
app.post(`/api/bag`, controller.addToBag);
app.get(`/api/bag`,controller.getBag);
app.post(`/api/reservation`, controller.submitForm)
app.delete(`/api/bag/:id`, controller.deleteProduct)


const port = process.env.PORT || process.env.SERVER_PORT;
app.listen(port, () => console.log(`Server running on PORT:${port}`));