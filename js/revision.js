// var can be asseced outside a function or if condition it is globally available


// function numberGen () {
//     for (var i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// numberGen();


// let is only valid within the loop and the codeblock same as const


// function numberGen () {
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// numberGen();

if (1) {
    let x = 5
    var y = 7
    console.log(x);
    console.log(y);
}

// y +=3
// console.log(y);

// console.log(y);
// console.log(x);

// let it can imutate the variable value || but constant you can not imutate the variable value

let firstName = 'John';
firstName = 'age';

console.log(firstName);

// null means nothing undefined means unused variable unable to access the variable
let userName = '';
console.log(userName);

x = 5;
console.log(x);

const friends = ['John', 'doe', 'dav',]
friends.push ('james');
console.log(friends);
// friends.shift();
// console.log(friends);
// friends.unshift();
// console.log(friends);
// friends.pop();
// console.log(friends);

let friendsIndex = [];

for (let i = 0; i < friends.length; i++) {
    // console.log(friends[i]);
    console.log(`${i}. ${friends[i]}`);
    // friendsIndex[i] = friends.indexOf(friends[i]);
    friendsIndex.push(friends.indexOf(friends[i]));
}
console.log(friendsIndex);


//create an array of 3 values and print them from behind
let arrays = ["apple", "banana", "orange",];
console.log(arrays[2]); 
console.log(arrays[1]); 
console.log(arrays[0]); 


// create an array of 5 values and print the last two values from behind 
let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]); 
console.log(arr[arr.length - 2]); 
console.log('--------something------------- ')



let newArray = []
const norms = [1, 2, 3, 4, 5]
let firstValue = norms.pop()
let secondValue = norms.pop()

let add = firstValue + secondValue
console.log(add)
newArray = newArray.push(add);
console.log(newArray)


let arr3 = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(arr3[arr3.length - 1]);
console.log(arr3[arr3.length - 2]);

// create an array of 5 values and transform into capital letter
let fun = ['group', 'john', 'philip', 'paste', 'apple'];
fun = fun.map(str => str.toUpperCase());
console.log(fun);

let myArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
myArray = myArray.map(x => x.toUpperCase());
console.log(myArray);

let myAgrray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
myArray = myAgrray.map(str => str.toUpperCase());
console.log(myAgrray);

let myArray1 = [10, 20, 30];

for (let i = myArray1.length - 1; i >= 0; i--) {
  console.log(myArray1[i]);
}

//array of 5 values print the first two and last two using loop in javascript

let arr5 = [20, 30, 40, 50, 60];
let result = [];
for (let i = 0; i < arr5.length; i++) {
    // if(i === 2) continue
    console.log(arr5[i]);
}

//how to write an array?