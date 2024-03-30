console.log("Hello Shinbashi!!!!!!!!!!!!");


let nickname = 'tarou';
console.log(nickname);

nickname = 'sample';
console.log(nickname);

const firstName = ('yuta');
console.log(firstName);

// const firstName = ('jiro');
// console.log(firstName);

let fruit = 'apple';
console.log(typeof fruit);

let age1 = '29';
let age2 = 29;
console.log(typeof age2);

let circleRatio = 3.14;
console.log(typeof circleRatio);

let isActive = true;
console.log(typeof isActive);

let coler;
console.log(typeof coler);

let box = null;
console.log(typeof box);


let product = {
    name: "apple",
    price: 250,
};

console.log(product);

product.name = 'orange';
product.price = 500;
console.log(product);


let fruit2 = ['apple', 'orange'];
console.log(fruit2);

fruit2[0] = 'bunna';
console.log(fruit2);
fruit2[3] = 'apple';
console.log(fruit2);
fruit2[2] = 'tomat';
console.log(fruit2);
console.log(fruit2.length);

const outputProductInfo = (productName, productPrice) => {
    console.log('Hello!');
    console.log(`${productName}の値段は${productPrice}です！`);
};

outputProductInfo('orange', 500);
outputProductInfo('apple', 350);
outputProductInfo('banna', 150);

const add =(a, b) => {
    return a + b;
};
console.log(add(1, 2));

let x = 10;
let y = 3;

console.log(x + y);
console.log(x * y);

x += 5
console.log(x);

x -= 5
console.log(x);

console.log(x > 5); 
console.log(x > 20); 


let userAge = 25;
let userType = userAge > 20 ? "adult" : "child";
console.log(userType);
userAge = 15;
console.log(userType); 
