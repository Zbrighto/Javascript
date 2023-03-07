/*
if(condition is true){
    execute here
} otherwise don't 
*/
if(1){
    console.log('working');
}
if(0){
    console.log('working 2');
} else{
    console.log('not working');
}
var student= prompt("please enter your name")
if(student== 'samuel'){
    console.log(student + ' you are welcome');
}else{
    console.log(student + ' not your name');
}
var person= prompt('what is your name')
if (person=='john'){
    console.log(person + ' permitted');
}else if (person=='james') {
    console.log(person +' not permitted');

}else if (person=='daniel') {
    console.log(person +' not permitted');

}else if (person=='samson') {
    console.log(person +' not permitted');
}else{
    console.log('not permitted');
}