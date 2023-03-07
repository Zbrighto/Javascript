// var product= (prompt("please enter your product name"))
// if(product== 'cheese burger'){
//     console.log(product + ' ');
// }else{
//     console.log(product + ' ERROR');
// }

// var number= parseInt(prompt("please enter your purchase price"))
// if(number==700){
//     console.log(number + ' ');
// }else{
//     console.log(number + ' ERROR');
// }

// var price= parseInt(prompt("please enter your selling price"))
// if(price==750){
//     console.log(price + ' ');
// }else{
//     console.log(price + ' Declined');
// }

// var quantity= parseInt(prompt("please enter your quantity"))
// if(quantity==1000){
//     console.log(quantity + ' ');
// }else{
//     console.log(quantity + ' Not Match');
// }

// var profit= parseInt(prompt("Check If You Made Profit"))
// if(profit==75000){
//     console.log(profit  + ' Cheese burger Made Profit');
// }else{
//     console.log(profit + ' LOST');
// }

let product=prompt('write Your Product Name');

let price=parseInt(prompt('Write Your purchase Price'));

let sale=parseInt(prompt('Write Your Selling Price'));

let profit=sale-price
console.log(`${sale}-${price}=${profit}`);

console.log(`${product} was sold with a profit of ${profit}`);