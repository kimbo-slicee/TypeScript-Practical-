/** Type using interFaces */
interface Book{
    readonly isbn:number;
    title:string;
    auhtor:string;
    genre?:string;
    printAuthor():void;
    printTitle(message:string):string;//set up the methode
    printSomething:(value:string)=>string;//set up the properties
}
const deepWork:Book={
    isbn :123,
    title:'deep Working',
    auhtor:'cal newPort',
    genre:'self-help',
    printAuthor:():void =>console.log('hello world !'),
    printTitle(message: string): string {
        return `${this.title}+${message}`;
    },
    printSomething:(value)=>{
        return value;
    }
}
deepWork.printAuthor();
let result =deepWork.printTitle('is awesome Book ')
/**type using type Alias  */
// type Books={readonly isbn:number,title:string,auth:string,genre?:string}
// const ColoringBook :Books &{pageNumber:number}={
//     isbn:190101,
//     title:"coloring Book",
//     auth:'Me and My frends ',
//     pageNumber:20
// }
// // deepWork.isbn=10101010; can't chnage this value of isbn
/** InterFace Challenge */
interface Computer{
    readonly id:number;
    brand:string;
    ram:number;
    storage?:number
    upGardeRame:(value:number)=>number
}
const HP :Computer={
    id:1,
    brand:'HP',
    ram:8,
    upGardeRame:(Ram:number)=>HP.ram+Ram
}
HP.upGardeRame(2);
interface Person{
    name:string,
    getDetails():string
}
interface DogOwner{
    dogName:string,
    getDogDetails():string
}

const persone:Person={
    name:"Name",
    getDetails(): string {
        return `Name:${this.name}`
    }
}
interface Employee extends Person{
readonly emplyeeId:number
    age:number;
}
const employee:Employee={
    emplyeeId:1,
    age:1.2,
    name:'EmployeeName',
    getDetails(){
        return ``;
    }
}







