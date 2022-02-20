// function House() {
//     console.log('design')
// }

// second function contractor

// function Factory() {
//     console.log('Factory design')
// }

//attached common method to Factory so that we can access this method without duplication
// Factory.prototype.basicProperty = function () {
//     console.log('land,ground water source transport ')
// }


// // //house function wants to access this basic property method so we can attach this method to house prototype obj
// // House.prototype= Object.create(Factory.prototype)
// // //whenever you reset you function constructor prototype also reset your constructor ;
// // House.prototype.constructor  = Houser; 


// // //we have lots of factory
// // const f1 = new Factory()
// // const f2 = new Factory()


// // //instance of house 
// // const h1 = new House();



// var d=document.createElement('NOSCRIPT');
// var dd= document.createElement('IFRAME');
// dd.src='https://google.com';
// d.appendChild(dd);
// document.body.appendChild(d)

// const btn = document.getElementById('btn');
// btn.addEventListener('click',debouncing(magicFun,300))
// function magicFun(){
//     console.log('magic function')
// }
// function debouncing (fun,del){
//    let timer;
//    return ()=> {
//        console.log(timer)
//        if(timer) clearTimeout(timer);
//        timer = setTimeout(()=> fun(),del)
//    } 
// }


// const ob= {
//     name:{
//         acc:{
//             modal:{
//                 val:10000
//             }
//         }
//     }
// }
// function getting (obj,con,def){
//     let value = [] ;

// //   return  con.split('][').map((val,ind)=> {
// //       console.log(val)
// //       if(obj[val]&& ind===0)return  value =val

// //       else if(obj[parseInt(value)])return value +=`.${val}`;
// //       else  return def
// //   })
// // } 
// // console.log(getting(ob,'name.acc.modal.val','not found'))
// //

// // console.log(name1)
// // ff()
// // var,let,const 

// //variable declaration 
// let name1  = 'dharmadurai';
// name1=10;
// const name2 = 'sathish';
// // name2 = 'kumar';
// // function declaration 
//  function ff() {
//     console.log('function call') 
// }
// //
// const ff2 = function(){console.log('function expression')}

// const btn = document.getElementById('btn');
// const para1 = document.querySelector('.para1')
// let para2 = document.querySelector('.para2')
// console.log(para2)
// btn.addEventListener('click',function(){btn.className='button';para2.innerHTML= para1.innerHTML})

// ff()
// console.log(name1,name2)


// const arr = [{name:'d',age:'25'},{name:'b',age:'25'},{name:'a',age:'25'},{name:'c',age:'25'}]
// arr.find(v=>v.name === 'd')

// document.getElementById('btn').addEventListener('click',debounce(()=>console.log('bounce'),500));
// function debounce(fun,del){let timer; return function(){if(timer)clearTimeout(timer);timer=setTimeout(()=> {fun()},del)}}


var arr = [
    ["0092000115", 1, "0.354", "2019-06"],
    ["0092000115", 1, "0.354", "2019-05"],
    ["0092000115", 1, "0.456", "2019-04"],
    ["0092000115", 1, "0.892", "2019-03"],
    ["0092000115", 1, "0.654", "2019-02"],
    ["0092000115", 1, "0.64", "2019-01"],
    ["0092000115", 2, "0.795", "2019-02"],
    ["0092000138", 3, "0.654", "2019-03"],
    ["0092000138", 3, "0.64", "2019-02"],
    ["0092000138", 3, "0.94", "2019-01"],
    ["0092000138", 4, "0.795", "2019-04"]
];


function pivod(array) {

    let header = [];
    let identify = {};
    let periods = {}

    array.map((value, index) => {
        if (!identify[value[1]]) identify[value[1]] = value[0];
        if (!periods[value[1]]) periods[value[1]] = {};
        if (periods[value[1]]) periods[value[1]][value[3]] = value[2]

        value.map((innerArr, inerIdx) => {
            if (inerIdx === 3 && !header.includes(innerArr)) header.push(innerArr);
        })

    })
    const identifyKey = Object.keys(identify).sort();
    header.sort()
    header.unshift(...['Identify', 'TAG']);
    let result = [header,];
    identifyKey.map((indendifyVal, ind) => {
        let bodyRow = [identify[indendifyVal], indendifyVal];
        header.map((headerVal, index) => {
            bodyRow.push(periods[indendifyVal][headerVal] || '_')
        })
        result.push(bodyRow)
    })
    // console.log(result)
    return result;
}
pivod(arr)

//map method new 
let myMap = new Map()

// Add new elements to the map
myMap.set('bar', 'foo')
myMap.set(1, 'foobar')

// Update an element in the map
myMap.set('bar', 'baz')
console.log(myMap);


/////////////
const myObject ={name:'dharmadurai',age:'26'};

//call,apply,bind

// every function method can access the call,apply,bind methods
function printNameAge(...param) {
    console.log(this.name,this.age,...param)
};

Function.prototype.polyBind = function(...arg) {
    const fun = this;
    let rest = arg.slice(1)
    return (...param) => {fun.apply(arg[0],[...rest,...param])}
}

const getCall = printNameAge.bind(myObject,'yoyo')
const getCall1 = printNameAge.polyBind(myObject,'yoyo test','first')
getCall()
getCall1('parmameter')






