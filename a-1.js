const ps=require("prompt-sync");
const prompt=ps();
function convert(num){
    var cel=5*(num-32)/9;
    console.log("Equivalent Celsius: "+cel);
}
var far = prompt("Enter Farehneit:",95);
convert(far);