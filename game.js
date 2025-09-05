// Achievements
achievements = [
  "get up on the wrong foot",
  "break a mirror",
  "tip a salt shaker",
  "open an umbrella inside",
  "set the date to friday 13th",
  "hang horseshoe pointing down",
  "put shoes on table",
  "walk under a ladder",
  "put hat on bed",
  "cross a black cat",
  "cross knives",
  "bird looks inside from window",
  "wear green clothes",
  "walk on a crack",
  "see an owl",
  "put bread upside down",
  "sleep head north",
  "put keys on table",
  "sit on table corner",
  "point to a rainbow",
  "sleep with fan on",
  "leave scissors open",
  "drop a haircomb",
  "broom upside down",
  "put glasses on table",
  "sleep with window open",
  "sleep with door open",
  "walk under a tree during thunder",
  
  // let candle burn out
  // watch new moon at...
  // broken clock
  //"carry an empty bucket",
  //"kill a ladybug",
  

];

completed = [

];



// Show a room
show = (room) => {
  
  hero.style.transition = "none";
  
  // Bedroom
  if(room == 0){
    C.camera({x:roomX = 0,y:roomY = -300, z:0}) // bedroom
    guyX = 300;
    guyY = -40;
    C.move({n:"hero",x:300,y:-40});
  }
  // Bathroom
  if(room == 1){
    C.camera({x:roomX = -300,y:roomY = -300, z:0}) // bathroom
    guyX = roomX + 300;
    guyY = roomY + 260;
  }
  // Living room 
  if(room == 2){
    C.camera({x:roomX = 0,y:roomY = 50, z:0}) // living room
    guyX = roomX + 300;
    guyY = roomY + 330;
    C.move({n:"hero",x:300,y:-40+340});
  }
  if(room == 3){
    C.camera({x:roomX = -300,y:roomY = 0, z:0}) // kitchen
  }
  if(room == 4){
    C.camera({x:roomX = -150,y:roomY = 700, z:0}) // garden
  }
  if(room == 5){
    C.camera({x:roomX = -300,y:roomY = 1350, z:70}) // tool shed
  }
  
  setTimeout(()=>{hero.style.transition = "transform .75s";},250);
}



// Timer
hour = 8;
min = 0;
setInterval(()=>{
  if(introanim < 2) return;
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

target = 0;





// Open and fill menu
openmenu = (opts) => {
  menushadow.style.display = "block";
  var html = "<div>" + target.className.replace(/ 1| 2/,"") + "</div>";
  for(var i in opts){
    html += "<div onclick='" + opts[i] + "()'>" + i + "</div>";
  }
  //html += "<div onclick=''>cancel</div>";
  menu.innerHTML = html;
}

closemenu = () => {
  menushadow.style.display = "none";
  menu.innerHTML = "";
}







// Actions
// =======


// Bedroom

rotatebed = () => {
  state[0].bed ++;
  state[0].bed %= 2;
  C.move({n:"bed",rz:-90 + state[0].bed * 90});
  if(state[0].bed == 1){
    C.move({n:"bed",x:241,y:-97,sx:-1})
  }
  else {
    C.move({n:"bed",x:253,y:-110,sx:1})
  }
}

sleep = () => {
  
}

openwindow1 = () => {
  document.querySelector("#window1").innerHTML = svg.windowopen;
  state[0].window = 1;
}

closewindow1 = () => {
  document.querySelector("#window1").innerHTML = svg.window;
  state[0].window = 0;
}

/*watchwindow1 = () => {
  
}*/

openwindow2 = () => {
  document.querySelector("#window2").innerHTML = svg.windowopen;
  state[2].window = 1;
}

closewindow2 = () => {
  document.querySelector("#window2").innerHTML = svg.window;
  state[2].window = 0;
}

opencupboard1 = () => {
  document.querySelector(".cupboard").innerHTML = svg.cupboardopen;
  state[0].cupboard = 1;
  document.querySelector(".shirt.hidden").classList.remove("hidden");
  document.querySelector(".shirt.hidden").classList.remove("hidden");
  document.querySelector(".shirt.hidden").classList.remove("hidden");
}

closecupboard1 = () => {
  document.querySelector(".cupboard").innerHTML = svg.cupboard;
  state[0].cupboard = 0;
  document.querySelector(".shirt.blue").classList.add("hidden");
  document.querySelector(".shirt.green").classList.add("hidden");
  document.querySelector(".shirt.red").classList.add("hidden");
}

removecalendar = () => {
  C.move({n:"calendar", x:385,y:-5,rz:95,sx:.6,sy:.7});
  state[0].calendar1 = 1;
}

watchcalendar = () => {
  setTimeout(()=>{
  menushadow.style.display = "block";
  menu.innerHTML = drawcal();
  },200);
}

markdate = () => {
  setTimeout(()=>{
    menushadow.style.display = "block";
    menu.innerHTML = drawcal();
  },200);
  setTimeout(()=>{
    menu.innerHTML = drawcal(1);
  },800);
    setTimeout(()=>{
    menu.innerHTML = drawcal(1,1);
  },1400);
  state[0].calendar2 = 1;
}

openscissors = () => {
  document.querySelector(".scissors").innerHTML = svg.scissorsopen;
  state[0].scissors = 1;
}

closescissors = () => {
  document.querySelector(".scissors").innerHTML = svg.scissors;
  state[0].scissors = 0;
}

takepen = () => {
  document.querySelector(".pen").style.display = "none";
  pocket.innerHTML += "<div id=pocketpen>"+svg.pen+"</div>";
  state[0].pen = 1;
}

takescissors = () => {
  document.querySelector(".scissors").style.display = "none";
  pocket.innerHTML += "<div id=pocketscissors>"+svg.scissors+"</div>";
  state[0].scissors = 2;
}

putdownpen = () => {
  pocketpen.remove();
  document.querySelector(".pen").style.display = "block";
  state[0].pen = 0;
}

putdownscissors = () => {
  pocketscissors.remove();
  document.querySelector(".scissors").style.display = "block";
  closescissors(); // implied: state[0].scissors = 0;
}

wearblue = () => {
  state[0].shirt = 0;
  hero.innerHTML = drawguy();
  document.querySelector(".shirt.blue").classList.add("wear");
  document.querySelector(".shirt.green").classList.remove("wear");
  document.querySelector(".shirt.red").classList.remove("wear");
}

weargreen = () => {
  state[0].shirt = 1;
  hero.innerHTML = drawguy();
  document.querySelector(".shirt.green").classList.add("wear");
  document.querySelector(".shirt.blue").classList.remove("wear");
  document.querySelector(".shirt.red").classList.remove("wear");
}

wearred = () => {
  state[0].shirt = 2;
  hero.innerHTML = drawguy();
  document.querySelector(".shirt.red").classList.add("wear");
  document.querySelector(".shirt.green").classList.remove("wear");
  document.querySelector(".shirt.blue").classList.remove("wear");
}

opendoor1 = () => {
  document.querySelector(".living.room.door").innerHTML = svg.door2;
  document.querySelector(".bedroom.door").innerHTML = svg.door3;
  state[0].door1 = 1;
  state[2].door1 = 1;
}

closedoor1 = () => {
  document.querySelector(".living.room.door").innerHTML = svg.door;
  document.querySelector(".bedroom.door").innerHTML = svg.door;
  state[0].door1 = 0;
  state[2].door1 = 0;
}

bedtoliving = () => {
  document.querySelector(".bedroom.door").innerHTML = svg.door3;
  setTimeout(()=>{document.querySelector(".living.room.door").innerHTML = svg.door2;},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 2);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".bedroom.door").innerHTML = svg.door;},1500);
  state[0].door1 = 0;
  state[2].door1 = 0;
}

livingtobed = () => {
  document.querySelector(".living.room.door").innerHTML = svg.door2;
  setTimeout(()=>{document.querySelector(".bedroom.door").innerHTML = svg.door3;},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 0);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".living.room.door").innerHTML = svg.door;},1500);
  state[0].door1 = 0;
  state[2].door1 = 0;
}

// Living room

pullchair1 = () => {
  C.move({n:"chair1", y:335});
  state[2].chair1 = 1;
}

pushchair1 = () => {
  C.move({n:"chair1", y:355});
  state[2].chair1 = 0;
}

pullchair2 = () => {
  C.move({n:"chair2", x:275,y:355, rz:70});
  state[2].chair2 = 1;
}

pushchair2 = () => {
  C.move({n:"chair2",x:265,y:390,rz:90});
  state[2].chair2 = 0;
}

sitchair1 = () => {
  guyX = 185;
  guyY = 328;
  C.move({n:"hero",x:300-(300-guyX)/2+roomX,y:250-(300-guyY)/2+roomY});
  setTimeout(()=>{C.move({n:"hero",sx:.8,sy:.8});},500);
  sit = 1;
  guy.style.transform="rotate(0rad)";
}

sitchair2 = () => {
  guyX = 258;
  guyY = 350;
  C.move({n:"hero",x:300-(300-guyX)/2+roomX,y:250-(300-guyY)/2+roomY});
  setTimeout(()=>{C.move({n:"hero",sx:.8,sy:.8});},500);
  sit = 1;
  guy.style.transform="rotate(1rad)";
}

sitcouch = () => {
  guyX = 420;
  guyY = 240;
  C.move({n:"hero",x:300-(300-guyX)/2+roomX,y:250-(300-guyY)/2+roomY});
  setTimeout(()=>{C.move({n:"hero",sx:.8,sy:.8});},500);
  sit = 1;
  guy.style.transform="rotate(1rad)";
}

takehat = () => {
  document.querySelector(".hat").style.display = "none";
  pocket.innerHTML += "<div id=pockethat>"+svg.hat+"</div>";
  state[2].hat = 1;
}

takemirror = () => {
  document.querySelector("#mirrorliving").style.display = "none";
  pocket.innerHTML += "<div id=pocketmirror>"+svg.mirror+"</div>";
  state[2].mirror = 1;
}