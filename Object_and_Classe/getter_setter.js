class user{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    // it is neccesary to use _ otherwise it shows erroe 
    // maximised call stack because it does not understand 
    // that we use constructor password or set password
    get password(){
        return `${this._password}`;
    }
    set password(value){
        this._password=value
    }
}
const User=new user("Riya", 123);
console.log(User.password);
User.password=679//it  work
console.log(User.password);