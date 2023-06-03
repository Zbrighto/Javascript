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

// function calculateAge(birthDate, personName) {
//     const now = new Date();
//     const diff = now.getTime() - birthDate.getTime();
//     const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//     return `${personName} is ${age} years old.`;
// }
  
// const birthDate = new Date('2003-12-31');
// const personName = 'John Doe';
// const ageString = calculateAge(birthDate, personName);
// console.log(ageString);
  

const calculateAge = (birthYear) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const age = currentYear - birthYear;
    return age;
};
  
const getPersonInfo = (name, birthYear) => {
    const age = calculateAge(birthYear);
    return `${name} is ${age} years old`;
};
  
const hello = () => "working";
console.log(hello());

const hello2 = function (){
    return 'working2'
}
console.log(hello2());

const studentName = name => `${name} is my friend`;
console.log(studentName('john'));

stuIfo = (name, age, course ) => `${name} is ${age} years old studying ${course} @ gskills`;
console.log(stuIfo('john', 20, 'js'));

stuIfo2 = (Firstname, yearBirth, course ) => {
    age=2023-yearBirth;
    return `${Firstname} is ${age} studying ${course} @ gskills`;
}
console.log(stuIfo2('Doe', 2000, 'python'));

// const form = document.getElementById("my-form");
// const usernameField = form.elements["username"];
// const username = usernameField.value;
// console.log("Username: " + username);

// function submitForm() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     console.log("Name: " + name);
//     console.log("Email: " + email);
//     console.log("Message: " + message);

// }

//form-----------

function submitForm(){
    // alert('is working')
    // let name = document.getElementById("name").value;
    // let email = document.getElementById("email").value;
    // let subject = document.getElementById("subject").value;
    // let message = document.getElementById("message").value;

    // alert(` ${name}, email is ${email} and subject is ${subject} and message is ${message}`);

   
    // let name = document.getElementById("name");
    // let email = document.getElementById("email");
    // let message = document.getElementById("message");

    // const nameValue = name.value
    // const emailValue = email.value
    // const subjectValue = subject.value
    // const messageValue = message.value

    // let namelenght = nameValue.length
    // let emaillenght = emailValue.length
    // let subjectLength = subjectValue.length
    // let messageLength = messageValue.length

    // if(namelenght < 5 ){
    //     name.style.border="2px solid red";
    // }
    // if (emaillenght > 5){
    //     email.style.border="2px solid red";
    // }
    // if (subjectLength > 5){
    //     subject.style.border="2px solid red";
    // }
    // if (messageLength > 5 ){
    //     message.style.border="2px solid red";
    // }
   
    // return false
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let username = document.forms['good']['name'].value;
    let emailuser = document.forms['good']['email'].value;

    if(username === 'isaac' && emailuser === 'info@isaac.com'){
        window.location.href= "success.html";
    }
    
}