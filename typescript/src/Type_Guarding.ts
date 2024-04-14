/* challenge - "TypeOf Guard"

* */
type ValueType=string | number | boolean;
let value:ValueType;
const random=Math.random();
value=random<0.33?"String":random<0.66?123.234:true;
function checkvalue(value:ValueType){
    if(typeof value==="string"){
        return value.toLowerCase()
    }else if(typeof value==='number') {
        return value.toFixed(2)
    }//if the value neither a string nor a number
    return `boolean: ${value}`

}
checkvalue("userName")
/**
 * Challenge - Equality Narrowing
 * In TypeScript , equality narrowing is a from of type narrowing that occurs when you use equality
 * checks like ==== or !== in your code
*/

type Dog ={type:'Dog',name:string,bark:()=>void}
type Cat={type:'Cat',name:string,meow:()=>void }
type Animal=Dog|Cat;
function makeSound(animal:Animal){
    if(animal.type==="Dog"){
        animal.bark;
    }else {
        animal.meow
    }
}
makeSound({type:"Dog",name:"Shrek",bark:()=>console.log("bark")})
//Check for the function
function makesound_two(animal:Animal):void{
    if('bark' in animal ){
        animal.bark
    }else {
        animal.meow
    }
}
makesound_two({type:"Cat",name:"tome",meow:()=>console.log("meow")})
function checkInput(input:Date | string):string{
    return input instanceof Date ? input.getFullYear().toString() : input;
}
checkInput(new Date())

type Student= {
   readonly name: string;
    study:()=>void;
}
type User ={
   readonly name:string;
    login:()=>void;
}
type Persone =Student|User;
const randomPerson=():Persone=>{
    return Math.random()>0.5?{name:"jhone",study:()=>console.log("study")}:{name:"user",login:()=>console.log("user")}
}
randomPerson();
/** Predicate
 * */
function isStudent(person:Persone):person is Student{
    // return 'study' in person
    return (person as Student).study !== undefined
}
isStudent({name:"user",login:()=>console.log("I'M Users....")});
/*************************************************/
type IncrementAction={
type:"Increment";
amount:number;
timestamp:number;
user:string
}
type DecrementAction={
    type:"decrement";
    amount:number;
    timestamp:number;
    user:string
}
type Action=IncrementAction | DecrementAction
function reducefunc(state:number,action:Action ){
    switch (action.type){
        case "Increment":
            action.amount+=state
            break
        case "decrement":
            action.amount-=state
            break
        default:
            const inexpectedAction:never=action;
            throw
    }
}
console.log(reducefunc(10,{
    type:"Increment",
    amount:1234,
    timestamp:1234,
    user:"hello world !"

}))





