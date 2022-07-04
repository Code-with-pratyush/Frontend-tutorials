console.log("This is a tutoril for javascript");


function greet(name,greettext)//parameters
{
    console.log(greettext+" "+name);
    console.log(name+ "is a good boy");
}
let name1="Harry";
let name2="Pratyush";
//let name3="Palki";
let name4="Soham";
let greettext="Good Morning";
greet(name1,greettext);
greet(name2,greettext);
//greet(nam,greettexte3);
greet(name4,greettext);

function sum(a,b,c){
    let d=a+b+c;
    return d;
}
let returnval=sum(1,2,3);
console.log(returnval);