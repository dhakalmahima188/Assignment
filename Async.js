import fetch from 'node-fetch'
globalThis.fetch = fetch
async function test(){
    console.log("inside test");
    const response= await fetch("https://api.github.com/users");
    console.log("Before response");
    const users =await response.json();
    console.log("users resolved")
    return users;

}
console.log("Before calling test");
let a= test();
console.log("After calling test");
console.log(a);
a.then((data)=>console.log(data))
console.log("Last line");
