//  1)
let text1 = "Apple, Banana, Kiwi";
let part1 = text1.slice(7, 13);

console.log(part1);

//  2)
let text2 = "Apple, Banana, Kiwi";
let part2 = text2.substring(0, 5);

console.log(part2);

//  3)
let text3 = "Apple, Banana, Kiwi";
let part3 = text3.substr(15, 4);

console.log(part3);

//  4)
let text4 = "Hello World!";
let text5 = text4.toUpperCase();

console.log(text4);
console.log(text5);

//  5)
let text6 = "Hello World!";
let text7 = text6.toLowerCase();

console.log(text6);
console.log(text7);

//  6)
let text8 = "¡Hola";
let text9 = "Mundo!";
let text10 = text8.concat(" ", text9);

console.log(text10);

//  7)
let text11 = "      Hello World!      ";
let text12 = text11.trim();

console.log(text12);

//  8)
let text13 = "5";
let padded1 = text13.padStart(4,"0");

console.log(padded1);

//  9)
let text14 = "Hello world!";
let result1 = text14.repeat(2);

console.log(result1);

//  10)
let text15 = "Please visit Microsoft!";
let newText1 = text15.replace("Microsoft", "ITSES");

console.log(newText1);

//  11)
let text16 = "Apple, Banana, Kiwi, Pear, Orange, Tomato";
let newText2 = text16.split(",");
console.log(newText2);

//  12)
console.log("Banana".charAt(1));

//  13)
console.log("Banana"[1]);

//  14)
const a = "a";
const b = "b";
if (a < b) {
    // true
    console.log(`${a} es menor que ${b}`);
} else if (a > b) {
    onsole.log(`${a} es mayor que ${b}`);
} else {
    console.log(`${a} y ${b} son iguales.`);
}
