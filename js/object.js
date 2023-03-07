const student ={
    firstName: 'john',
    lastName: 'doe',
    age: 25,
    job:'developer',
    friends: ['john', 'doe', 'sam','john', 'yusuf']
};
//dot(.) notation
console.log(student.firstName);

//john has 5 friends and his best friends is yusuf
console.log(`${student.firstName} has ${student.friends.length} friends and his bestfriend is ${student.friends[4]}`);

//bracket notation
console.log(student['firstName']);

// adding more data to the project 
student['location']= 'Abuja'
console.log(student);
student.siblings =4;
console.log(student);


//accesing multiple values from an object
const newName = 'Name'
console.log(student['first' + newName]);
console.log(student['last' + newName]);

//to get information from an object
const findInfo = prompt('what are you interested about this student(name, friend, location, no of siblings); ');
console.log(findInfo);
//console.log(student[findInfo]);

//console.log(student[findInfo]);
// if(student[findInfo]){
//     console.log(student[findInfo]);
// }else{
//     prompt('wrong info about this student: try again (name,job,friends.location,no of siblings');
// }

// let firstName = 'peter'
// let age = 20
// let carier= 'accountant'

// const person ={
//     myname: firstName,
//     myAge: age,
//     myJob: carier
// }
// console.log(person);

// looping through an object using values

const personInfo = Object.values(student);
console.log(personInfo);
//if you want to get the keys object.keys

personInfo.forEach((info) => console.log(info));

console.log('testing the keys');
const personKeys = Object.keys(student);
personKeys.forEach((info) => console.log(info));

console.log('**testing the entries**');
const personEntries = Object.entries(student);
personEntries.forEach((info) => console.log(info));

//object methods

const studentInfo ={
    firstName: 'john',
    lastName: 'doe',
    birthyear: 2000,
    job:'developer',
    friends: ['john', 'doe', 'sam','john', 'yusuf'],

    // ageCal: function(){
    //     this.age =  2023 - this.birthyear;
    //     return this.age
    // }

    johnInfo: function () {
       return `${this.firstName} was born ${this.birthyear}, his last name is ${this.lastName} he works as ${this.job} and he has this friends ${this.friends}`
    }
};
console.log(studentInfo.johnInfo)
// console.log(studentInfo.ageCal(2000));
// console.log(studentInfo['ageCal'](2000));

// console.log(studentInfo.ageCal(studentInfo.yearofbirth));
// console.log(studentInfo['ageCal'](studentInfo.yearofbirth));

// console.log(studentInfo.ageCal());
// studentInfo.ageCal();

// console.log(studentInfo.age);
// console.log(studentInfo.age);
// console.log(studentInfo.age);
// console.log(studentInfo.age);
// console.log(studentInfo['ageCal'](2000));