/*let strFoobar = "Foobar";
let count = 0;

for (i = 0; i < strFoobar.length; i++) {
  if (count === 1) {
    console.log(strFoobar[i]);
    count = 0;
  } else {
    count += 1;
  }
}*/

/*
let attendees = ["Aaron", "Hans", "Peter", "Benny", "Chris", "Ertan"];

for (let item of attendees) {
  console.log(item);
}

attendees.reverse();
{
  console.log(attendees);
}

const strToArray = "Aaron".split("");

strToArray.reverse();
{
  console.log(strToArray.join(""));
}

const strName = "Aaron";

for (i = 0; i < strName.length; i++) {
  console.log(strName.length);
}

//Add to basket

const addToCart = [];

function strAddToCart(item) {
  addToCart.push(item);
}

strAddToCart("Coffe");
strAddToCart("Jam");

console.log(addToCart.toString());

addToCart.reverse();
{
  console.log(addToCart);
  console.log(addToCart.length);
}*/

// add2basket
/*‚

const cart = ["Jam", "Coffee", "Mild"];

console.log(cart.length);

cart.reverse();
{
  console.log(cart);
}

function addToBasket(item) {
  cart.push(item);
}

addToBasket("Honey");

console.log(cart);

function delFromBasket(item) {
  cart.pop(item);
}

delFromBasket("Honey");

console.log(cart);

const strToArray = "Aaron".split("");

strToArray.reverse();
{
  console.log(strToArray.join(""));
}

const firstName = "Aaron".split("");

firstName.reverse();
{
  console.log(firstName.join(""));
  console.log(firstName.length);
}

let counter = 0;

for (i = 0; i < firstName.length; i++) {
  if (counter === 1) {
    console.log(firstName[i]);
    counter = 0;
  } else {
    counter += 1;
  }
}

// add to basket

const basket = [];

function addToBasket2(item) {
  basket.push(item);
}

addToBasket2("Coffee");
addToBasket2("Jam");

console.log(basket.toString());

const names = ["Aaron", "Mike", "Huso", "Patrick"];

names.reverse();
{
  console.log(names);
}

console.log(names.length);

let count2 = 0;

for (i = 0; i < names.length; i++) {
  if (count2 === 1) {
    console.log(names[i].toLocaleUpperCase());
    count2 = 0;
  } else {
    count2 += 1;
  }
} */

let names = "Aaron";
let counter = 0;

for (i = 0; i < names.length; i++) {
  if (counter === 1) {
    console.log(names[i].toLocaleUpperCase());
    counter = 0;
  } else {
    counter += 1;
  }
}

const str = ["Aaron", "Huso"];

for (i = 0; i < str.length; i++) {
  if (i % 2 === 1) {
    str = str[i].toLocaleUpperCase();
    console.log(str);
  } else {
    console.log("nix");
  }
}
