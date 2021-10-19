var ps= require("prompt-sync");
const prompt=ps();
var item=[];

var test=true;
while(test){
    var title= prompt("Enter Title: ");
var des=prompt("Enter description: ");
item.push(`{title: ${title},description: ${des}}`);
var check=prompt("anymore? y/n: ")
if (check!='y'){
    test=false;

}

}
console.log(item);


