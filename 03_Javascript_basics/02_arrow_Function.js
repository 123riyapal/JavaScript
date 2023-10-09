// this keyword

const obj = {
    Name:"Riya",
    Course:"MCA",
    context : function print(){
        console.log(`${this.Name} doing ${this.Course}`);
        // console.log(this); it give us a all context about obj
    }
}
obj.context();
// console.log(this);it give us empty obj

function myfunction(username){
    // console.log(`${this.username}`);  it does not work for function it only work for obj
}
myfunction("Riya");

// implict arrow function
// const val = (num1,num2)=> (num1+num2);
// console.log(val(2,3));
// explicit
const val = (num1,num2)=>{ return (num1+num2)};
console.log(val(2,3));
