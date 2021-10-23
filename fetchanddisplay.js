import fetch from 'node-fetch'
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=> response.json())
.then(data=>console.log(data)).catch((err)=>{
    console.log("There is error! ")
}).then(
function appenddata(data){
var main =document.getElementById("dataid");

for (var i=0;i<data.length;i++){   
    main.innerHTML=`<li>${data[i].name}</li>`;
   }
})
