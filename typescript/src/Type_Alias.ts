import {User} from "./modules/User.ts";

function addUser(user:User){
let usersList:User[]=[{id:1,userName:"userOne",userAga:0,userAdd:"newYork"}];
usersList.map(e=>{
    if(user.id===e.id){
        console.log("this Account All Ready Exist ")
    }else {
        console.log("A count Created successfully ✔ ")
    }
})

}
addUser({id:2,userName:"Name",userAga:10,userAdd:"hollow"})
type Theme='light'|'dark';
let theme:Theme
theme='dark';
theme='light'
function setTheme(t:Theme){
    theme=t;
}
setTheme('dark');
/*challenge for type Alias */
type Empolyee={id:number;name:string;department:string};
type Manager={id:number,name:string;employees:Empolyee[]};
const alice:Empolyee={id:1,name:'alice',department:'Sales'}
const steve:Empolyee={id:1,name:'steve',department:'HR'}
const bob:Manager={id:1,name:'bobo',employees:[alice,steve]}
type Staff=Empolyee|Manager;
function printStaffDetails(staff:Staff):void{
    if('employees' in staff){
        console.log(`${staff.name} is an manger in the ${staff.employees.length} employs`)
    }else{
    console.log(`${staff.name} is an employees`)
    }
}
printStaffDetails(bob);
/******************* Type alice *********************/
type Booke={id:number,name:string,price:number}
type DiscounteBook=Booke & {discount:number}
const book1:Booke={
    id:1,
    name:'how to cook a dragon',
    price:15
};
const book2:Booke={
    id:2,
    name:'the secret life of unicorns',
    price:18
}
const discounteBook:DiscounteBook={
    id:3,
    name:'Gnomes vs , Goblins: the Ultimate Guide',
    price:18,
    discount:0.15
}
console.log(book1,book2,discounteBook)
const propName ='age';
type Animal={[propName]:number}
let tiger:Animal={[propName]:5}















