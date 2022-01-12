// dynamically populates main page

const baseURL = `${window.location.origin}`;
require("dotenv").config();

const errCallback = (error) => console.log(error.res.data);
const productsContainer = document.querySelector("#productsContainer");
const footerContainer = document.querySelector(".footerContainer");
const bagCount = document.getElementById("bagCount");

const getQuote = () => {
  axios
    .get(`${baseURL}/quote`)
    .then(function (response) {
      const quote = response.data;
      createQuoteFooter(quote);
    })
    .catch(errCallback);
};
const getAllProducts = () => {
  axios
    .get(baseURL)
    .then((res) => {
      arr = res.data;
      displayProducts(arr);
    })
    .catch(errCallback);
};

const getBag = () => {
  axios
    .get(`${baseURL}/bag`)
    .then((res) => {
      arr = res.data;
      displayProducts(arr);
    })
    .catch(console.log("didnt get bag"));
};

const addToBag = (productId) => {
  let id = { id: productId };
  axios
    .post(`${baseURL}/bag`, id)
    .then((res) => {
      console.log(JSON.stringify(res.data));
    })
    .catch(console.log("didnt add to bag"));
};

const createQuoteFooter = (str) => {
  footerContainer.innerHTML += `<p>${str}</p>`;
};

const displayProducts = (arr) => {
  createRows(arr);
  let x = 0;
  const rowClass = document.getElementsByClassName("row");

  for (let i = 0; i < rowClass.length; i++) {
    let row = document.querySelector(`#row${i}`);
    for (x; x < arr.length; x++) {
      if (row.childElementCount === 3) {
        break;
      }
      row.innerHTML += createProductCard(arr[x]);
    }
  }
};


function createProductCard(product) {
  formattedPrice = product.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
  return `<div class="column">
  <img src=${product.image} />
  <button type="button" class="addToBag" id="addToBag${product.id}">add to bag</button>
  <h2>${product.name}</h2>
  <p>$ ${formattedPrice}</p>
  </div>`;
}

const createRows = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.id = `row${num}`;
      num += 1;
      productsContainer.appendChild(row);
    }
  }
};

function displayBag(arr) {
  bagCount.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createProductCard(arr[i]);
  }
}

getAllProducts();
getQuote();
