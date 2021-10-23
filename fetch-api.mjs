
/*
 Show the array response that you get from above endpoint in list view in HTML (<li>)
      Hint: use `createElement()` and `innerHTML`. You may need to use `appendChild` as well.
 */
import fetch from 'node-fetch'
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=> response.json())
.then(data=>console.log(data)).catch((err)=>{
    console.log("There is error! ")
})