// Achievements
achievements = [
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
  "keys on table",
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

// Show a room
show = (room) => {
  if(room == 0){
    C.camera({x:roomX = 0,y:roomY = -300, z:0}) // bedroom
    guyX = 300;
    guyY = -40;
  }
  if(room == 1){
    C.camera({x:roomX = -300,y:roomY = -300, z:0}) // bathroom
  }
  if(room == 2){
    C.camera({x:roomX = 0,y:roomY = 0, z:0}) // living room
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
}

room = 0;
show(room);



// Timer
hour = 8;
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

target = 0;

// Mousemove (show names / rotate hero)
onmousemove = (e) => {
  var x = -(window.innerWidth-600)/2+e.pageX, y = e.pageY-30, angle;
  if(x>0&&y>0&&x<600&&y<600){
    //console.log(x,y);
    angle=Math.atan2(y-(guyY-roomY),x-(guyX-roomX))-1.6;
    guy.style.transform="rotate("+angle+"rad)";
    text.innerHTML = e.target.className;
    target = e.target;
  }
}

// Rooms states
state = [
  
  // 0: Bedroom
  {
    window: 0, // closed
    door1: 0,  // bathroom, closed
    door2: 0,  // living room, closed
    cupboard: 0, // closed
    calendar1: 0, // on wall
    calendar2: 0, // marked
    bed: 0, // angle
    scissors: 0, // open
  }
]

// Click (interact)
onclick = (e) => {
  
  // Compute in-game coordinates
  var x = -(window.innerWidth-600)/2+e.pageX, y = e.pageY-30;
  
  // Move hero
  if(x>0&&y>0&&x<600&&y<600){
    if(e.target.className=="floor"){
      C.move({n:"hero",x:300-(300-x)/2+roomX,y:250-(300-y)/2+roomY});
      guyX = x+roomX;
      guyY = y+roomY;
    }
  }
  
  // Open menu
  if(room == 0){
    if(target.className == "bed"){
      openmenu({"rotate": "rotatebed", "sleep":"sleep"});
    }
    if(target.className == "window"){
      if(state[0].window == 0){
        openmenu({"open": "openwindow1", "watch":"watchwindow1"});
      }
      else {
        openmenu({"close": "closewindow1", "watch":"watchwindow1"});
      }
    }
    
    if(target.className == "cupboard"){
      if(state[0].cupboard == 0){
        openmenu({"open": "opencupboard1"});
      }
      else {
        openmenu({"close": "closecupboard1"});
      }
    }
    
    if(target.className == "calendar"){
      if(state[0].calendar1 == 0){
        openmenu({"put on desk": "removecalendar","watch":"watchcalendar"});
      }
      else {
        openmenu({"watch":"watchcalendar"});
      }
    }
    
    if(target.className == "scissors"){
      if(state[0].scissors == 0){
        openmenu({"open": "openscissors"});
      }
      else {
        openmenu({"close":"closescissors"});
      }
    }
    
    if(target.className == "pen" && state[0].calendar1 && !state[0].calendar2){
      openmenu({"mark date": "markdate"});
    }
  }
  
}



// Open and fill menu
openmenu = (opts) => {
  menushadow.style.display = "block";
  var html = "<div>" + target.className + "</div>";
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
  document.querySelector(".window").innerHTML = svg.windowopen;
  state[0].window = 1;
}

closewindow1 = () => {
  document.querySelector(".window").innerHTML = svg.window;
  state[0].window = 0;
}

watchwindow1 = () => {
  
}

opencupboard1 = () => {
  document.querySelector(".cupboard").innerHTML = svg.cupboardopen;
  state[0].cupboard = 1;
}

closecupboard1 = () => {
  document.querySelector(".cupboard").innerHTML = svg.cupboard;
  state[0].cupboard = 0;
}

removecalendar = () => {
  C.move({n:"p22", x:385,y:-5,rz:95,sx:.6,sy:.7});
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