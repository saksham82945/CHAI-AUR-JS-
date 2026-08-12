class user {
    constructor(username){
         this.username = username
    }

    LogMe(){
        console.log(`username : ${this.username}`);
    }
     static  createId(){
        return `1233`
    }
}

const hitesh = new User("hitesh")
//  console.log(hitesh.createId())

 class Teacher extends user{
     constructor(email,username){
super(username)
        this.email = email

     }
 }
const iphone = new Teacher("iphone","i@phone.com")
iphone.LogMe();

