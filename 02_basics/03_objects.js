// singleton :- when we create a obj through constructor(Object.create) then this object is the only one object

//there are 2 ways to create Objects :- 1. obj constructor &    2. Obj ltereal

// Object.create -> obj constructor -> singleton

// object literals

const mySym = Symbol("key1") //Interview question => how to add the symbol in any object & access it? 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   //ans1 -> adding the symbol in object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  //ans2 -> accessing the symbol of object => [Symbol(key1)]: 'myKey1'

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this backtick(``) is known as string interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
