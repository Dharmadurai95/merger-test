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

function chunkArr(arr,len){
    let chunk =[];
    arr.map((val,ind)=> {
        if((!chunk.length  || !chunk[chunk.length-1].length) || chunk[chunk.length-1].length === len){
            chunk.push([val])
        }else if(chunk[chunk.length-1].length <len){
            chunk[chunk.length-1].push(val)
        }
    });
return chunk;}
    let arr = [1,2,3,1,2,3,5,2,5,5,2];
    console.log(chunkArr(arr,10));
// write a function that takes an array and a number and returns a new array with the first n elements of the array
const arr = [1,2,3,4,5,6,7,8,9,10];
function firstN(arr,n){
    let newArr = [];
    for(let i = 0; i<n; i++){
        newArr.push(arr[i])
    }
    return newArr;
}
console.log(firstN(arr,5));
