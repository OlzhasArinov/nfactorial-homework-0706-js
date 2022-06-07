// SHOP

// LET VS CONST
let customer;
customer = "Beknar";
customer = "Aidar";

const ADDRESS = "Satpayev 22";
const SHOP_NAME = "Dalida's vegetable shop";

// "", '', ``
const SELLER = "Dalida";
const SECOND_SELLER = "AIDANA";
const BADGE = `Name: ${SELLER}`;

// DATA TYPES
let employees = 2;
let shopIsOpened = false;
shopIsClosed = true;

customer = "Mura";
let basket = null;
console.log(basket); // undefined

// DATA TYPES.OBJECTS
let product = {
  name: "banana",
  price: 800,
  origin: "Brazil",
  "srok-godnosti": "06.06.2022",
};

alert(product.name);
alert(product.price);

// Adding property
product.label = "red";

// Deleting property
delete product.label;

// variable as a key
let key = "label-color";
product[key] = "red";

// Same name property
let name = "banana";
let price = 800;
let product = { name, price };

// Functions in objects
product.print = function () {
  console.log(this.name + this.price);
};
product.print();

// Check if property in object
alert("origin" in product);

// For in
for (key in product) {
  console.log(key);
}

// DATA TYPES.ARRAYS
let fruits = ["apple", "orange", "banana"];
let vegetables = ["cucumber", "potato", "cabbage"];
console.log(vegetables.length); // 3

vegetables.push("tomato"); // ["cucumber", "potato", "cabbage", "tomato"]
vegetables.pop(); // ["cucumber", "potato", "cabbage"]
let lastVegetable = vegetables.pop(); // ["cucumber", "potato"]

vegetables.unshift("mango"); // ["mango", "cucumber", "potato"]
vegetables.shift(); // ["cucumber", "potato"]
let firstVegetable = vegetables.shift(); // ["potato"]

let groceries = fruits.concat(vegetables); // ['apple', 'orange', 'banana', 'potato']

// CONTROL FLOW
// CONTROL FLOW.REGULAR VS STRICT COMPARISON
alert(2 > 1);
alert(2 == 1);
alert(2 != 1);
alert("2" > 1);
alert("01" == 1);
alert("42" == 42);
alert(null == undefined);

alert("01" === 1);
alert("42" === 42);
alert(null === undefined);

// CONTROL FLOW.Ternary expression Условный оператор „?“
let result = 1 === "1" ? "true" : "false";
console.log(result);

// CONTROL FLOW.Coalescing operator Оператор нулевого слияния (??)
let selectedFruit;
let finalFruit = selectedFruit ?? "limon";
console.log(finalFruit);

// CONTROL FLOW.TRUTHY FALSY VALUE Преобразование к логическому типу
let selectedVegetable = "orange";
if (selectedVegetable) {
  console.log("Buy " + selectedVegetable);
} else {
  console.log("Basket is empty");
}

// TRUTHY
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)

// FALSY
// if (false)
// if (0)
// if (-0)
// if ("")
// if (null)
// if (undefined)

// CONTROL FLOW.FOR LOOP
groceries = [
  "apple",
  "orange",
  "banana",
  "cucumber",
  "potato",
  "cabbage",
  "orange",
];

let count = 0;
for (let i = 0; i < groceries.length; i++) {
  if (groceries[i] === "orange") {
    count += 1;
  }
}
console.log(count);

// FUNCTIONS
function countGroceries() {
  return groceries.length;
}

countGroceries();

function canBuyProduct(product) {
  return groceries.includes(product);
}

canBuyProduct("water");
canBuyProduct("watch");
canBuyProduct("apple");

// DESCTRUCTURING
let fruit = {
  name: "banana",
  price: 800,
  origin: "Brazil",
};

function show(fruit) {
  console.log(`${fruit.name} costs ${fruit.price}tg`);
}

function show(name, price) {
  console.log(`${name} costs ${price}tg`);
}

function show({ name, price }) {
  console.log(`${name} costs ${price}tg`);
}

function show({ name: n, price: p }) {
  console.log(`${n} costs ${p}tg`);
}

// FUNCTIONS.FUNCTION EXPRESSION
let countGroceries = function () {
  return groceries.length;
};

// FUNCTIONS.ARROW FUNCTION
let countGroceries = () => {
  return groceries.length;
};
let canBuyProduct = (product) => {
  return groceries.includes(product);
};
// FUNCTIONS.ARROW FUNCTION ONE LINE

// FUNCTIONS.MAP, FILTER, REST, SPREAD
fruits = ["apple", "orange", "banana", "orange", "banana"];
let oranges = fruits.filter((fruit) => fruit === "orange"); // ["orange", "orange"]s
let slicedFruits = fruits.map((fruit) => marker(fruit));

// REST puts the rest of some specific user-supplied values into a JavaScript array.
// So for instance, you can call the sort(), map(), forEach(), or pop() method on a rest parameter.
function buy(name, cost, ...vegetable) {
  return `${name} buys ${vegetable} for ${cost}`;
}
buy("Beknar", 988, "apple", "orange", "banana", "orange", "banana");

const { firstName, lastName, ...otherInfo } = {
  firstName: "Dalida",
  lastName: "Yerkuli",
  companyName: "Dalida's vegetable shop",
  profession: "Queen",
  gender: "Female",
};

console.log(otherInfo);

// SPREAD helps you expand iterables into individual elements. So effectively, it does the opposite thing from the rest operator.
// Он не сворачивает элементы, а наоборот, растягивает их. С его помощью обычно копируют или сливают массивы.
const greeting = ["Dalida", "Yerkuli", "ovoshaya"];
const aboutMe = ["Zdravstvuite", ...greeting, "Chem mogu pomoch?"];
console.log(aboutMe);

// How to Use Spread to Convert a String into Individual Array Items
const myName = "Dalida Yerkuli";
console.log([...myName]);

// Spread Example 3: How the Spread Operator Works in a Function Call
const numbers = [1, 3, 5, 7];
function addNumbers(a, b, c, d) {
  return a + b + c + d;
}
console.log(addNumbers(...numbers));

// Spread Example 3:
const myName = "Dalida";
function spellName(a, b, c) {
  return a + b + c;
}
console.log(spellName(...myName));
