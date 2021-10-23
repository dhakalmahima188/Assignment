
var id = 0;
function animation() {
  var elem = document.getElementById("circle");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
     pos++;
     if(pos!==300){
        elem.style.left=pos+'px';
     }
     else{
        clearInterval(id);
     }
    
  }
}