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
let foundBook:string |  undefined;
for(let booke of books ){
    if(booke==='1984'){
        foundBook=booke
        console.log(foundBook);
        break;
    }
}
/**
 * Challenge 2
 * */
let orderStatus:'processing'| 'shipped ' | 'devlivered'='processing';
let discount:number|string=20;
discount='20%';
let array:(string|boolean)[]=["One",false,"Two",true]
let mexedArray:(string|number)[]=["userName",1,'userName',2]
/*Object Type*/
let car:{brand:string,year:number} ={brand:'dacia',year:2013};
let book:{title: string, cost: number }={title:'book',cost:10};
let pen ={title:'pen',cost:2002020};
let notBook={title :'noteBook'}

let bookList:Array<object>=[book,pen,notBook]
// bookList[0].title='new title';====>Cannot assign to title because it is a read-only property
let bike:{brand:string, year:number}={brand:'yamaha',year:2020}
//bike.year='older';
let laptop:{brand:string,year:number}={brand:"Dell",year:2020}
let product1={title:'shirt',price:20-10};
let product2={title:'pants',price:2};
let product3={title:'shirt'};
let productList:{title:string,price?:number}[]=[product1,product2,product3]
productList.push({title:'book',price:200})
productList.map(e=>e.price!-10)






