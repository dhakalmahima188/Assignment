const students=[
    {
        name:"mahima",
        age:12
    },
    {
        name:"dhakal",
        age:10
    }
]
function enroll(student,callback){
    setTimeout(()=>{
        console.log("First !");
        students.push(student);
        callback();

    },2000)
}
function getstudents(){
    setTimeout(()=>{
        var str="";
        students.forEach((student)=>{
            str=`<li>${student.name}</li>`;
           document.write(str)
           
        })
    },2000)
}
let st={
    name:"Hari",
    age:45
}
enroll(st,getstudents);

