// handles add to bag buttons
let addToBag1 = document.querySelector("#addToBag1");
let addToBag2 = document.querySelector("#addToBag2");
let addToBag3 = document.querySelector("#addToBag3");
let addToBag4 = document.querySelector("#addToBag4");
let addToBag5 = document.querySelector("#addToBag5");
let addToBag6 = document.querySelector("#addToBag6");
let addToBag7 = document.querySelector("#addToBag7");
let addToBag8 = document.querySelector("#addToBag8");
let addToBag9 = document.querySelector("#addToBag9");


// used this in ordered to access dynamic content
document.body.addEventListener("click", (event) => {
  if (event.target.id == "addToBag1") {
    addToBag(1);
  }
  else if (event.target.id  == "addToBag2") {
    addToBag(2)
  }
  else if (event.target.id  == "addToBag3") {
    addToBag(3)
  }
  else if (event.target.id  == "addToBag4") {
    addToBag(4)
  }
  else if (event.target.id  == "addToBag5") {
    addToBag(5)
  }
  else if (event.target.id  == "addToBag6") {
    addToBag(6)
  }
  else if (event.target.id  == "addToBag7") {
    addToBag(7)
  }
  else if (event.target.id  == "addToBag8") {
    addToBag(8)
  }
  else if (event.target.id  == "addToBag9") {
    addToBag(9)
  }
});

