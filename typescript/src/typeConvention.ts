 let someValue:any='this is a string';
 let strLength:number=(someValue as string).length
 type Bird={
     name:string
 }
 let birdString="{'name':'Eagle'}"
 let dogString="{breed:'Poodle'}"
 let birdObject =JSON.parse(birdString) as Bird
 let dogObject=JSON.parse(dogString)
 let dog:Bird =dogObject as Bird
 enum Status{
  Pending="pending",
  Declined="declined"
 }
 type UserObject={
  name:string,
  status:Status,
 }
 //Save Status.Pending in the DB as a String
 // retrieve string from the DB
// type assertion it s that we know more about the type
 const statusValue ="pending"
 const userObject:UserObject={name:"John",status:statusValue as Status}
 /** the unknown type in TypeScript is a type-safe counterpart of
  * any type. it's like saying that a variable cloud be anything, but we need to perform
  * some type-checking before we can use it
  * "error Instance Error" checks if the error object is an instance of the Error class
  * */
 let unknownValue:unknown
 unknownValue="String";
 unknownValue=["userName","userName"]
 // unkonwValue.toFixed(1);===>compile time error bcs the compiler doesn't know the type
 // before calling any methode to type unknown we have to check the type first
 function runSomeCode(){
     const random:number=Math.random();
     if(random<0.5){
         throw new Error('there was error');
     }else {
         throw "some error"
     }
 }
try{
     runSomeCode()
}catch (error){
     if(error instanceof  Error){
         console.log(error.message)
    }else {
         console.log(error )
     }
}
 /**In typeScript, never is a type that represent the type of values that never occur. you can't assign any value to
  *  a variable of type never TypeScript will give a compile error if there are any unhandled cases, helping ensure that
  *  all cases are handled
  */





