/** Tuple is an Array withe fixed size */
let person:[string,number]=['userName',1];
let date:readonly[ number,number,number]//fixed Array
//Example
function getPerson():[string,number]{
    return ['john',25];
}
let randomePerson:[string,number]=getPerson();
console.log(randomePerson[0]);
console.log(randomePerson[1]);
let users:[string,number?]=['susan',20]
/*Enums it s a list of constant value but we don't have Enums in Java */