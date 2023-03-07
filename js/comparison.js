let student=prompt('Please enter your name')
console.log(student!='john');

let age=parseInt(prompt('please enter your age'))
console.log(age< 25);

console.log(student=='samuel' && age==25);
console.log(student=='john' && age==25);
console.log(student=='samuel' && age==34);
console.log(student=='john' && age==34);
console.log(student=='samuel' || age==34);
console.log(student=='john' || age==20);