//switch
var student= prompt("please enter your name")
var age = Number(prompt("please enter your age"))
switch(true){
    case student == 'john' && age <=17:
        if (age == 15){
            console.log (student + " congratulation you are given medcine");
        }else if(age === 16){
            console.log (student + " congratulation you are given engineering");
        }else if(age === 17){
            console.log (student + " congratulation you are given architecture");
        }else{
            console.log (student + " please go to the registar");
        }
        
        break;
    case student == 'peter' && Regnumber=="01b":
        console.log(student + ' you are the best student');
        break;
    case student == 'james' && Regnumber=="01c":
        console.log(student + ' you tried');
        break;
    default:
        console.log('work both hard & smart');
        break;
}