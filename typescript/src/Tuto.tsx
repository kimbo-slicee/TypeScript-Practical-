console.log('typeScript Tutorial')
interface userInterFace{
    id:number
    name:string,
    age:number
}
let user: userInterFace={
    id:1,
    name:"unknown",
    age:1000
}
console.log(user)
/*union type*/
let tax :number| string =10;
tax=10;
tax="100";
console.log(tax)
/**
 *  literal types
 * There are three sets of literal types available in TypeScript today:
 * strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.
 * */
let resquestStatus:'pending'|'success'|'error'='pending';
resquestStatus='error';
// resquestStatus='Hello World !';===> compile time error
/**
 * Any Marker
 * but be colourful when u use any as a type
 * it s just an option
 * */
let notSure :any =1
notSure='maybe a string instead ';
notSure=false
let random:any
/**
 * Array type
 * */
const books:string[]=['1984','Brave New World','Fahrenheit 451']
let foundBook:string;
for(let booke of books ){
    if(booke==='1984'){
        foundBook=booke
        console.log(foundBook);
        break;
    }
}
