const database = require("./db.json");
let quotes = database.quotes;
let products = database.products;
let bag = database.bag;
let reservations = database.reservation

module.exports = {
  getQuote: (req, res) => {
    let randIndex = Math.floor(Math.random() * quotes.length);
    let randQuote = quotes[randIndex];
    res.status(200).send(randQuote);
  },
  getProducts: (req, res) => {
    res.status(200).send(products);
  },
  addToBag: (req, res) => {
    let index = products.findIndex((elem) => elem.id === +req.body.id);
    let product = products[index];
    bag.push(product);
    res.status(200).send(`added ${product.name} to bag.`);
  },
  getBag: (req, res) => {
      res.status(200).send(bag)
  },

  submitForm: (req, res) => {
      let reservation = req.body.userInput;
      reservations.push(reservation)
      console.log(reservations);
      res.status(200).send(reservation);
  },
  deleteProduct: (req, res) => {
    console.log(req.params.id);
    let index = bag.findIndex((elem) => elem.id === +req.params.id);
    console.log(bag);
    bag.splice(index, 1);
    console.log(bag);
    res.status(200).send(bag)
  }


};
