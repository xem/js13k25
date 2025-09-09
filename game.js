// Achievements
achievements = [
  "get up on the wrong foot",  // ok
  "set the date to friday 13th",  // ok
  "wear green clothes",  // ok
  "sleep head north",  // ok
  "leave scissors open",  // ok
  "sleep with door open",  // ok
  "tip a salt shaker",  // ok
  "put hat on bed",  // ok
  "put bread upside down",  // ok
  "sit on table corner",  // ok
  "put shoes on table", // ok
  "cross knives", // ok
  "broom upside down", // ok
  "put two mirrors face to face", // ok
  "put glasses on table", // ok
  "drop a haircomb", // ok
  "put keys on table", // ok
  "open an umbrella inside", // ok
  "walk on a crack", // ok
  "break a mirror", // ok (bathroom)
  "hang horseshoe pointing down", // ok
  "walk under a ladder", //
  "a bird looks inside from the window", //
  "see an owl", // 
  "cross a black cat",
  "point to a rainbow",
  "walk under a tree during thunder",
  
  // let candle burn out
  // sleep with window open,
  // sleep with fan on,
  // watch new moon at...
  // broken clock
  //"kill a ladybug",
  //"carry an empty bucket",

];

completed = [

];



// Show a room
show = (room, pos) => {
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
    C.camera({x:roomX = -400,y:roomY = -300, z:0}) // bathroom
    guyX = roomX+300;
    guyY = roomY+310;
    C.move({n:"hero",x:guyX,y:guyY-40});
  }
  
  // Living room 
  if(room == 2){
    C.camera({x:roomX = 0,y:roomY = 50, z:0}) // living room
    guyX = roomX + 300;
    guyY = roomY + 310;
    C.move({n:"hero",x:300,y:-40+320});
  }
  
  // Kitchen
  if(room == 3){
    C.camera({x:roomX = -400,y:roomY = 50, z:0}) // kitchen
    guyX = roomX + 300;
    guyY = roomY + 310;
    C.move({n:"hero",x:-100,y:350});
  }
  
  // Garden
  if(room == 4){
    C.camera({x:roomX = -150,y:roomY = 840, z:0}) // garden
    guyX = roomX + 300;
    guyY = roomY + 210;
    if(pos == 2){
      onclick({pageX: innerWidth/2,pageY:540,target:{className:"floor"}});
    }
    else{
      C.move({n:"hero",x:guyX,y:guyY,sx:1,sy:1});
    }
  }
  
  // Toolshed
  if(room == 5){
    C.camera({x:roomX = -300,y:roomY = 1350, z:70}) // tool shed
    guyX = roomX + 300;
    guyY = roomY + 210;
    C.move({n:"hero",x:guyX,y:guyY,sx:1.5,sy:1.5});
    
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
  document.querySelector("#cupboard1").innerHTML = svg.cupboardopen;
  state[0].cupboard = 1;
  if(state[0].shirt != 0) document.querySelector(".shirt.blue").classList.remove("hidden");
  if(state[0].shirt != 1) document.querySelector(".shirt.red").classList.remove("hidden");
  if(state[0].shirt != 2) document.querySelector(".shirt.green").classList.remove("hidden");
  if(state[0].shoes != 1) document.querySelector("#shoes1").classList.remove("hidden");
}

closecupboard1 = () => {
  document.querySelector("#cupboard1").innerHTML = svg.cupboard;
  state[0].cupboard = 0;
  document.querySelector(".shirt.blue").classList.add("hidden");
  document.querySelector(".shirt.green").classList.add("hidden");
  document.querySelector(".shirt.red").classList.add("hidden");
  document.querySelector(".shoes").classList.add("hidden");
}

takeshoes = () => {
  document.querySelector("#shoes1").style.display = "none";
  pocket.innerHTML += "<div id=pocketshoes>"+svg.shoes+"</div>";
  state[0].shoes = 1;
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

puthat = () => {
  pockethat.remove();
  document.querySelector("#hat2").classList.remove("hidden");
  state[2].hat = 2;
}

hangmirror = () => {
  pocketmirror.remove();
  document.querySelector("#mirror2").classList.remove("hidden");
  state[3].mirror = 2;
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
  document.querySelector("#hat1").style.display = "none";
  pocket.innerHTML += "<div id=pockethat>"+svg.hat+"</div>";
  state[2].hat = 1;
}

takekey = () => {
  document.querySelector("#key").classList.add("hidden");
  pocket.innerHTML += "<div id=pocketkey>"+svg.key+"</div>";
  state[2].key = 1;
}

tipsalt = () => {
  document.querySelector(".salt").innerHTML = svg.salttip;
  C.move({n:"salt",x:225,y:240+180,rz:5});
  state[2].salt = 1;
}

putbread = () => {
  pocketbread.remove();
  document.querySelector("#bread2").classList.remove("hidden");
  state[3].bread = 2;
}

putkey = () => {
  pocketkey.remove();
  document.querySelector("#key").classList.remove("hidden");
  C.move({n:"key",x:250,y:390,z:310,rz:80,sy:1.2});
  state[2].key = 2;
}

putshoes = () => {
  pocketshoes.remove();
  document.querySelector("#shoes2").classList.remove("hidden");
  state[0].shoes = 2;
}

putglasses = () => {
  pocketglasses.remove();
  document.querySelector("#glasses2").classList.remove("hidden");
  state[1].glasses = 2;
}

returnbread = () => {
  document.querySelector("#bread2").innerHTML = svg.breadr;
  C.move({n:"bread2",sx:-.9});
  state[3].bread = 3;
}

// Kitchen

openplane = () => {
  document.querySelector("#plane").innerHTML = svg.plane2;
  state[3].plane = 1;
  if(state[3].bread == 0) document.querySelector("#bread").classList.remove("hidden");
}

closeplane = () => {
  document.querySelector("#plane").innerHTML = svg.plane;
  state[3].plane = 0;
  document.querySelector(".bread").classList.add("hidden");
}

takebread = () => {
  document.querySelector("#bread").classList.add("hidden");
  pocket.innerHTML += "<div id=pocketbread>"+svg.bread+"</div>";
  state[3].bread = 1;
}

takeknive = () => {
  document.querySelector("#knive1").classList.add("hidden");
  pocket.innerHTML += "<div id=pocketknive>"+svg.knive+"</div>";
  state[3].knive = 1;
}

putknive = () => {
  pocketknive.remove();
  document.querySelector("#knive3").classList.remove("hidden");
  state[3].knive = 2;
}

returnbroom = () => {
  document.querySelector("#broom").innerHTML = state[3].broom ? svg.broom : svg.broom2;
  C.move({n:"broom",rz: state[3].broom ? -90 : 90});
  state[3].broom = state[3].broom ? 0 : 1;
}

takemirror = () => {
  document.querySelector("#mirror1").style.display = "none";
  pocket.innerHTML += "<div id=pocketmirror>"+svg.mirror+"</div>";
  state[3].mirror = 1;
}

hanghorseshoe2 = () => {
  document.querySelector("#horseshoe2").classList.remove("hidden");
  pockethorseshoe.remove();
  state[5].horseshoe = 2;
}

hanghorseshoe3 = () => {
  document.querySelector("#horseshoe3").classList.remove("hidden");
  pockethorseshoe.remove();
  state[5].horseshoe = 2;
}

hanghorseshoe4 = () => {
  document.querySelector("#horseshoe4").classList.remove("hidden");
  pockethorseshoe.remove();
  state[5].horseshoe = 2;
}


// Bathroom

opencupboard2 = () => {
  document.querySelector("#cupboard2").innerHTML = svg.cupboardopen2;
  state[1].cupboard = 1;
  if(state[1].comb == 0) document.querySelector(".comb").classList.remove("hidden");
  if(state[1].comb == 0) document.querySelector(".glasses").classList.remove("hidden");
}

closecupboard2 = () => {
  document.querySelector("#cupboard2").innerHTML = svg.cupboard;
  state[1].cupboard = 0;
  if(state[1].comb == 0) document.querySelector(".comb").classList.add("hidden");
  if(state[1].comb == 0) document.querySelector(".glasses").classList.add("hidden");
}

dropcomb = () => {
  C.move({n:"comb",x:-38,y:67,rz: 204,sx:-.9,sy:.9});
  state[1].comb = 1;
}

takeglasses = () => {
  document.querySelector("#glasses").classList.add("hidden");
  pocket.innerHTML += "<div id=pocketglasses>"+svg.glasses+"</div>";
  state[1].glasses = 1;
}

breakmirror = () => {
  document.querySelector("#bathmirror").innerHTML = svg.bathmirror2;
  state[1].mirror = 1;
}

// Garden


openumbrella = () => {
  document.querySelector("#umbrella1").classList.add("hidden");
  guy.innerHTML=svg.umbrella2;
}

closeumbrella = () => {
  document.querySelector("#umbrella1").classList.remove("hidden");
  hero.innerHTML=drawguy();
}

// Tool shed

takeladder = () => {
  document.querySelector("#ladder1").classList.add("hidden");
  pocket.innerHTML += "<div id=pocketladder>"+svg.ladder+"</div>";
  state[5].ladder = 1;
}

takeseed = () => {
  pocket.innerHTML += "<div id=pocketseed>"+svg.seed+"</div>";
  state[5].seed = 1;
}

takehatchet = () => {
  document.querySelector(".hatchet").classList.add("hidden");
  pocket.innerHTML += "<div id=pockethatchet>"+svg.hatchet+"</div>";
  state[5].hatchet = 1;
}


takehorseshoe = () => {
  document.querySelector("#horseshoe1").classList.add("hidden");
  pocket.innerHTML += "<div id=pockethorseshoe>"+svg.horseshoe+"</div>";
  state[5].horseshoe = 1;
}





// Doors

opendoor1 = () => {
  document.querySelector("#lrd1").innerHTML = svg.door2;
  document.querySelector(".bedroom.door").innerHTML = svg.door3;
  state[0].door1 = 1;
  state[2].door1 = 1;
}

closedoor1 = () => {
  document.querySelector("#lrd1").innerHTML = svg.door;
  document.querySelector(".bedroom.door").innerHTML = svg.door;
  state[0].door1 = 0;
  state[2].door1 = 0;
}

bedtoliving = () => {
  document.querySelector(".bedroom.door").innerHTML = svg.door3;
  setTimeout(()=>{document.querySelector("#lrd1").innerHTML = svg.door2;},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 2);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".bedroom.door").innerHTML = svg.door;},1500);
  state[0].door1 = 0;
  state[2].door1 = 0;
}

livingtobed = () => {
  document.querySelector("#lrd1").innerHTML = svg.door2;
  setTimeout(()=>{document.querySelector(".bedroom.door").innerHTML = svg.door3;},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 0);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector("#lrd1").innerHTML = svg.door;},1500);
  state[0].door1 = 0;
  state[2].door1 = 0;
}

opendoor2 = () => {
  document.querySelector("#lrd2").innerHTML = svg.door2;
  document.querySelector(".kitchen.door").innerHTML = svg.door3;
  state[3].door2 = 1;
  state[2].door2 = 1;
}

closedoor2 = () => {
  document.querySelector("#lrd2").innerHTML = svg.door;
  document.querySelector(".kitchen.door").innerHTML = svg.door;
  state[3].door2 = 0;
  state[2].door2 = 0;
}

kitchentoliving = () => {
  document.querySelector(".kitchen.door").innerHTML = svg.door3;
  setTimeout(()=>{document.querySelector("#lrd2").innerHTML = svg.door2;},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 2);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".kitchen.door").innerHTML = svg.door;},1500);
  state[3].door2 = 0;
  state[2].door2 = 0;
}

livingtokitchen = () => {
  document.querySelector("#lrd2").innerHTML = svg.door2;
  setTimeout(()=>{document.querySelector(".kitchen.door").innerHTML = svg.door3;},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 3);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector("#lrd2").innerHTML = svg.door;},1500);
  state[3].door2 = 0;
  state[2].door2 = 0;
}

opendoor3 = () => {
  document.querySelector("#bathdoor").innerHTML = svg.door2;
  document.querySelector(".bathroom.door").innerHTML = svg.door3;
  state[3].door2 = 1;
  state[1].door2 = 1;
}

closedoor3 = () => {
  document.querySelector("#bathdoor").innerHTML = svg.door;
  document.querySelector(".bathroom.door").innerHTML = svg.door;
  state[3].door2 = 0;
  state[1].door2 = 0;
}

kitchentobath = () => {
  document.querySelector("#bathdoor").innerHTML = svg.door2;
  setTimeout(()=>{document.querySelector(".bathroom.door").innerHTML = svg.door3;},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 1);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector("#bathdoor").innerHTML = svg.door;},1500);
  state[3].door3 = 0;
  state[1].door3 = 0;
}

bathtokitchen = () => {
  document.querySelector(".bathroom.door").innerHTML = svg.door3;
  setTimeout(()=>{document.querySelector("#bathdoor").innerHTML = svg.door2;},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 3);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".bathroom.door").innerHTML = svg.door;},1500);
  state[3].door3 = 0;
  state[1].door3 = 0;
}

goout = () => {
  document.querySelector(".entrance.door").innerHTML = svg.door3;
  setTimeout(()=>{document.querySelector(".exit.door").innerHTML = svg.door2;document.querySelector("#key").classList.add("hidden")},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 4);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".entrance.door").innerHTML = svg.door;},1500);
  state[4].door1 = 0;
  state[2].door1 = 0;
}

goin = () => {
  document.querySelector(".exit.door").innerHTML = svg.door2;
  setTimeout(()=>{document.querySelector(".entrance.door").innerHTML = svg.door3;document.querySelector("#key").classList.add("hidden")},100);
  setTimeout(()=>{fade.style.opacity=1;},500);
  setTimeout(()=>{show(room = 2);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".exit.door").innerHTML = svg.door;if(state[2].key == 0)document.querySelector("#key").classList.remove("hidden")},1500);
  state[4].door3 = 0;
  state[2].door3 = 0;
}

opendoor4 = () => {
  document.querySelector(".exit.door").innerHTML = svg.door2;
  document.querySelector("#key").classList.add("hidden")
  document.querySelector(".entrance.door").innerHTML = svg.door3;
  state[4].door4 = 1;
  state[2].door4 = 1;
}

closedoor4 = () => {
  document.querySelector(".entrance.door").innerHTML = svg.door;
  document.querySelector(".exit.door").innerHTML = svg.door;
  if(state[2].key == 0)document.querySelector("#key").classList.remove("hidden");
  state[4].door4 = 0;
  state[2].door4 = 0;
}

entershed = () => {
  setTimeout(()=>{fade.style.opacity=1;},100);
  setTimeout(()=>{show(room = 5);fade.style.opacity=0},600);
}

exitshed = () => {
  setTimeout(()=>{fade.style.opacity=1;},100);
  setTimeout(()=>{show(room = 4, pos=2);fade.style.opacity=0},600);
}