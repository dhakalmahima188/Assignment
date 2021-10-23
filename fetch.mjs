import fetch from 'node-fetch'
function getdata(){
    console.log("Step-1");
     let url="main.txt";
    fetch(url).then((response)=>{
        console.log("Inside first then");
        return response.text()
    }).then((response)=>{
        console.log("inside second then");
        return console.log(data)
    })
}
console.log("Before calling getdata");
getdata();
console.log("After calling getdata")