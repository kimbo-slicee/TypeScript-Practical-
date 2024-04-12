enum SeverResponseStatus{
    Success=200,
    Error='Error',
}
Object.values(SeverResponseStatus).forEach(value=>console.log(value))
interface ServerResponnse{
    result:SeverResponseStatus;
    data:string[]
}
function getServerResponse():ServerResponnse{
    return {
        result:SeverResponseStatus["Success"],
        data:['firsItem','secondItem']
    }
}
const response:ServerResponnse=getServerResponse();
/*challenge*/
enum UserRole{
    Admine='Admine',
    Manager='Manger',
    Employee='Employee'
}
type User={id:number, name:string, role:UserRole, contact:[email:string,phone:string]}
let userliste:User[];
const userData:User= {id: 1, name: 'user', role: UserRole['Admine'], contact: ["User@gmail.com", "+1 203 3030" + " 123"]}
function createUser(user:User):User{
    /*Data Base*/
    if(!userliste.includes(user)) userliste.push(user)
    return user;
}
const newUser=createUser(userData)