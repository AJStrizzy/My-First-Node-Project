const { add, subtract, beBasic } = require('./myModule')

let name = 'Ariel Strizower';
console.log(name);

function printName(person) {
    return `Hello, ${person}`;
}

console.log(printName(name))


console.log(beBasic())

console.log(add(5,10))
console.log(subtract(10,5))