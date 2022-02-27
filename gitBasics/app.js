// const axios = require('axios');
// let newData;
// function call() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(json => newData = json)
// }
// call();
// console.log(newData)
// function getPost() {
//     let timer;
//     return function () {
//         if (timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             const input = document.querySelector('#inputsearch').value;

//             filter = newData.filter((value) => value.title.indexOf(input) !== -1)
//             console.log(filter.length || input? filter : newData)
//         }, 300)
//     }

// }
// const callMe = getPost()

// function chunkArr(arr, len) {
//     let chunk = [];
//     arr.map((val, ind) => {
//         if ((!chunk.length || !chunk[chunk.length - 1].length) || chunk[chunk.length - 1].length === len) {
//             chunk.push([val])
//         } else if (chunk[chunk.length - 1].length < len) {
//             chunk[chunk.length - 1].push(val)
//         }
//     });
//     return chunk;
// }
// let arr = [1, 2, 3, 1, 2, 3, 5, 2, 5, 5, 2];
// console.log(chunkArr(arr, 10));


// function curry(fn) {
//     let args = [];
//     return function curried(...arg) {
//         args = args.concat(arg);
//         if (args.length < fn.length) {
//             return curried;
//         } else {
//             return fn.apply(this, args);
//         }
//     }
// }
// function add(a, b, c) {
//     return a + b + c;
// }
// const curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)(3));


//write a debounce function
// function debounce(fn, delay) {
//     let timer;
//     return function () {
//         if (timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.apply(this, arguments)
//         }, delay)
//     }
// }
// function print() {
//     console.log('hello')
// }
// const debouncedPrint = debounce(print, 1000);
// debouncedPrint();

//write a throttle function
// function throttle(fn, delay) {
//     let timer;
//     return function () {
//         if (timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.apply(this, arguments)
//         }, delay)
//     }
// }
// function print() {
//     console.log('hello')
// }
// const throttledPrint = throttle(print, 1000);
// throttledPrint();


// write function and return binary number
function binary(num) {
    let binary = '';
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}
// console.log(binary(5));



//find first name last name inside array of objects
const arr = [{
    name: 'John',
    age: 30
}, {
    name: 'Mike',
    age: 23
}, {
    name: 'Jane',
    age: 40
}];

const getYoungPerson = arr.reduce((acc, curr) => {
    if (curr.age < 40) {
        acc.push(curr.name);
    }

    return acc;

}, [])
// console.log(getYoungPerson);


const dharma = {
    name: 'dharma',
    age: 30,
    job: 'developer',
    getName() {
        console.log(this, 'this key word')
        return this.name + "" + this.age;
    }

}
const lohisal = {
    name: 'lohisal',
    age: 30,
    job: 'developer',

}
function getName() {
    console.log(this, 'this key word')
    return this.name + "" + this.age;
}
const getFullName = dharma.getName.bind();
// getFullName()


//polyfill for bind
if (!Function.prototype.bind) {
    Function.prototype.bind = function (...oThis) {
        const fn = this,
            context = oThis[0],
            args = oThis.slice(1);

        return function (...params) {
            return fn.apply(context, [...args, ...params])
        }
    }
}



//write a recursive function
const sumOfRecursive = num => num1 => num1 ? sumOfRecursive(num + num1) : num;

// console.log(sumOfRecursive(5)(500)());

const factorial = num => num ? num * factorial(num - 1) : 1;
console.log(factorial(5));


// created nested object
const nestedObj = {
    name: 'dharma',
    age: 30,
    job: 'developer',
    address: {
        personalAddress: {

            home: 'kathmandu',
            city: 'kolkata',
            state: 'west bengal',
            country: 'india'
        },
        officeAddress: {
            home: 'mumbai',
            city: 'delhi',
            state: 'delhi',
            country: 'india'
        }


    },
    maritalStatus: 'single',
    skills: {
        skill1: 'html',
        skill2: 'css',
        skill3: 'javascript',
        additionalSkills: {
            skill4: 'react',
            skill5: 'node',
            skill6: 'mongodb'

        }
    }

};


const resultObj = {};

const recursiveKeyValue = (nestedObj,parentKey) => {
    for (let key in nestedObj) {
        if (typeof nestedObj[key] === 'object')  recursiveKeyValue(nestedObj[key],`${parentKey}_${key}`);
        else resultObj[`${parentKey}_${key}`] = nestedObj[key];
    }
}
recursiveKeyValue(nestedObj,'nestedOb');
console.log(resultObj,'resultObj')




