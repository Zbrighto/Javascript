for (let i = 0; i <=20; i++) {
    console.log(i);
    
}

friends=['benjamine','joy','Peter','john','paul','philip','praise','david','isaac' , 'daniella'];
console.log(typeof(friends));
for (let i = 0; i < friends.length; i++) {
    console.log(`${i}. ${friends[i]} is my friend`);
}

courses=['python','javascript','css','javascript','bootstrap','angular','wert'];
console.log(courses[courses.length-1]);

const ageCalculator = function (age) {
    return 2023 - age;
}

const yearArr =[1990, 1923, 1232, 1945, 1723,]
console.log();

const age1 =ageCalculator(yearArr [0]);
const age2 =ageCalculator(yearArr [1]);
const age3 =ageCalculator(yearArr [yearArr.length -1]);

const ages = [age1,age2,age3]
console.log(ages);

yearArr[0]=2000
console.log(yearArr);

yearArr.push(2001)
console.log(yearArr);

yearArr.unshift(2010)
console.log(yearArr);

yearArr.pop()
console.log(yearArr);