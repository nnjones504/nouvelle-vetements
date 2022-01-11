const baseURL = `http://localhost:4004/api`;

let arr;

const errCallback = (error) => console.log(error.response.data);
const productsContainer = document.querySelector("#productsContainer");
const footerContainer = document.querySelector(".footerContainer");

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

const addToBag = (product) => {
  console.log(product);
  axios
    .post(`${baseURL}/bag`, product)
    .then((res) => {
      console.log(res);
    })
    .catch(errCallback);
};
const createProductCard = (product) => {
  formattedPrice = product.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
  return `<div class="column">
    <img src=${product.image} />
    <h2>${product.name}</h2>
    <button type="button" class="addToBag" id="addToBag${product.id}">add to bag</button>
    <p>$ ${formattedPrice}</p>
    </div>`;
};
//  <button type="button" onclick="addToBag(${product})">add to bag</button>
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

const createQuoteFooter = (str) => {
  footerContainer.innerHTML += `<p>${str}</p>`;
};

getAllProducts();
getQuote();

//init buttons
const addToBag1 = document.querySelector("#addToBag1");
const addToBag2 = document.querySelector("#addToBag2");
const addToBag3 = document.querySelector("#addToBag3");
const addToBag4 = document.querySelector("#addToBag4");
const addToBag5 = document.querySelector("#addToBag5");
const addToBag6 = document.querySelector("#addToBag6");
const addToBag7 = document.querySelector("#addToBag7");
const addToBag8 = document.querySelector("#addToBag8");
const addToBag9 = document.querySelector("#addToBag9");

console.log(document.querySelector("#addToBag1"));
//button functionality

addToBag1.addEventListener("click", addToBag(1));
addToBag2.addEventListener("click", function(){ alert("Hello World!"); });
addToBag3.addEventListener("click", function(){ alert("Hello World!"); });
addToBag4.addEventListener("click", function(){ alert("Hello World!"); });
addToBag5.addEventListener("click", function(){ alert("Hello World!"); });
addToBag6.addEventListener("click", function(){ alert("Hello World!"); });
addToBag7.addEventListener("click", function(){ alert("Hello World!"); });
addToBag8.addEventListener("click", function(){ alert("Hello World!"); });
addToBag9.addEventListener("click", function(){ alert("Hello World!"); });

// const addToCartBtn = document.querySelectorAll(".addToBag");
// addToCartBtn.addEventListener("click", function() {
//   console.log("clicked");
// })
// const addToCartBtns = document.querySelectorAll(".addToBag").forEach((btn) =>
//   btn.addEventListener("click", function () {
//     console.log(btn))}
// );
// const addToBagBtns = document.querySelectorAll(".addToBag").forEach((btn) => {
//   btn.addEventListener("click", function() {
//     console.log("clicked");
//   });
// });
// console.log(document.querySelectorAll(".addToBag"));
// console.log(document.getElementsByClassName("addToBag"));
// const add2cart = document.querySelector(".addToBag").addEventListener("click", function(){alert("clicked")})
