var square=(x)=>{
    var result=x*x;
    return result;
}
console.log(square(9));
var user={
    name:'akib',
    sayHi:()=>{console.log(`Hi ${this.name}`);
    console.log(arguments);
},
    sayHiAlt(){
        console.log(`Hi ${this.name}`);
    }

}

user.sayHi(1,2,3);