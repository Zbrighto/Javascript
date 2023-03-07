/*
she is [adverb] [verb] from a [adjective] [noun]

*/

//step1: create a variable to collect the adverb input
let myvariable = 4
alert (`you have ${myvariable} steps to complete this program`)
let myadverb = prompt('Enter an Adverb')

/*
let the use know how many messages he will type
*/

// let sentence = '<p>' + 'she is ' + myAdverb + '</p>';
let sentence = `she is ${myadverb} `

// step2: create a variable that collects the Adverb input 
myvariable -= 1
alert (`you have ${myvariable} steps to complete this program`)
let myVerb = prompt('Enter a verb')
sentence += `${myVerb} `

// step3: create a variable that collects the verb input 
myvariable -= 1
alert (`you have ${myvariable} steps to complete this program`)
let myAdjective = prompt('Enter a Noun');
sentence += `${myAdjective} `

// step4: create a variable that collects the adjective input 
myvariable -= 1
alert (`you have ${myvariable} steps to complete this program`)
let myNoun= prompt('Enter a Adverb');
sentence += `${myNoun} `


document.write(sentence);


/*
alert('you are done, please check the console for result');

document.write(`she is ${myAdverb} ${myVerb}  from a ${myAdjective} ${myNoun}`);
*/