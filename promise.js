let p= new Promise((resolve,reject)=>{
    let a=1+3
    if(a==2){
        resolve("Its true! ")
    }
    else{
        reject("Its False! ")
    }
})
p.then((message)=>{
    console.log("INside then "+ message)
}).catch((message)=>{
console.log("From catch block !" + message)})
