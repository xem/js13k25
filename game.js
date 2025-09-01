C.camera({x:0,y:-300, z:0}) // bedroom
//C.camera({x:-300,y:-300, z:0}) // bathroom
//C.camera({x:0,y:0, z:0}) // living room
//C.camera({x:-300,y:0, z:0}) // kitchen
//C.camera({x:-150,y:700, z:0}) // garden
//C.camera({x:-300,y:1350, z:70}) // tool shed



guyX = 300;
guyY = -40;

roomX = 0;
roomY = -300;

onmousemove = (e) => {
  var x = -(window.innerWidth-600)/2+e.pageX, y = e.pageY-30, angle;
  if(x>0&&y>0&&x<600&&y<600){
    //console.log(x,y);
    angle=Math.atan2(y-(guyY-roomY),x-(guyX-roomX))-1.6;
    guy.style.transform="rotate("+angle+"rad)";
    text.innerHTML = e.target.className;
  }
}

hour = 7;
min = 0;
setInterval(()=>{
  min++;
  if(min > 60){
    min = 0;
    hour ++;
  }
  if(hour > 24){
    hour = 0;
  }
  time.innerHTML = (""+hour).padStart(2,"0") + ":" + (""+min).padStart(2,"0");
},1000);

onclick = (e) => {
}