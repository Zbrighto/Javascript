function student() {
    console.log('hello world');
}

// function add(params) {
    
// }
// calling

function add() {
    console.log(5+2);
}
add()
add()
add()
add()

function friend() {
    let friendName = 'samuel';
    let age = 20;
    let course = 'javascript';

    console.log(`${friendName} is ${age} and studying ${course} `);

}
friend()

function friends2(firstname, age, course) {
    console.log(`${firstname} is ${age} and studying ${course} `);
    // console.log(firstname + 'is '  + age + ' years old ' + 'studying ' + course );
}
friends2('john ',  20 , 'javascript')

friends2('samuel', 20, 'css')

// let avg = calculateAverage(4, 8, 12);
// console.log(avg); 
  
function calculateAverage(num1, num2, num3) {
    console.log ((num1 + num2 + num3) / 3);
}

calculateAverage(4, 5, 17)

//with return 

// function ageCalc(birthYear) {
//     const age =2023 - birthYear
//     return age
// }
//console.log(ageCalc(2002) + 4);
//console.log(ageCalc(2002));




// curent date lived
// function calculateSecondsSinceBirth(birthdate) {
//     const birthTime = birthdate.getTime();
//     const currentTime = new Date().getTime();
//     const diffInSeconds = Math.floor((currentTime - birthTime) / 1000);
//     return diffInSeconds;
//   }
//   const myBirthdate = new Date("1990-01-01"); // Replace with your actual birthdate
//   const mySecondsAlive = calculateSecondsSinceBirth(myBirthdate);
//   console.log(`I have been alive for ${mySecondsAlive} seconds`);



    
function ageCalc(firstName,birthYear) {
    const age =2023 - birthYear;
    return `${firstName} is ${age} years old`;
}
const result = ageCalc('john' , 2002);
console.log(result + ' he lives at wusezone5' );



//without parameter
function student() {
    let firstName = 'samuel';
    let age = 20;
    let course = 'javascript';

    console.log(`${firstName} is ${age} years old `);
}



//with parameter
function friends(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}


//with return
function name(birthYear) {
    const age =2023 - birthYear;
    return age;
}



//decleration
function all() {
    friends (1, 2, 3);
    student();
    console.log(name(2004));
}
all()

//function Expression

// let add2 = function() {
   
// }
// console.log(typeof(add2));

let add3 = function (a,b,c) {
    return a+b+c
}
console.log(add3(2,4,7));

//function decleration
// function calculateSecondsLived(age) {
//   const secondsInYear = 365 * 24 * 60 * 60;
//   return (age * secondsInYear);
// }

// const mySecondsLived = calculateSecondsLived(18);
// console.log(`I have lived for ${mySecondsLived} seconds`);

let calculateSecondsLived = function(age) {
    const secondsInYear = 365 * 24 * 60 * 60;
    return age * secondsInYear;
};

const mySecondsLived = calculateSecondsLived(18);
console.log(`I have lived for ${mySecondsLived} seconds`);

//arrow function
const y = function add (){
    return 5+2
}
console.log(y());
const x = () => 5+2
console.log(x());

const addFiveAndTwo = () => 5 + 2;

// Example usage:
const resul = addFiveAndTwo();
console.log(result);

const student2 = (age2,course2) =>{
    return `this student is ${age2} years old studying ${course2}`
}
student2 (19, 'javascript')
console.log(student2(19, 'javascript'));
