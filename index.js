// Code your solutions in this file

const { getNamespaceURI } = require("jsdom/lib/jsdom/browser/documentAdapter");

/*
const newArray = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}
*/
function writeCards(names, event) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        newArray.push(message);
    }
    return newArray;
}

function countDown(counter) {
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}