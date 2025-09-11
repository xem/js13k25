// Mousemove (show names / rotate hero)
onmousemove = (e) => {
  var x = -(window.innerWidth-600)/2+e.pageX, y = e.pageY-30, angle;
  if(x>0&&y>0&&x<600&&y<600){
    angle=Math.atan2(y-(guyY-roomY),x-(guyX-roomX))-1.6;
    if(!sit) guy.style.transform="rotate("+angle+"rad)";
    try{text.innerHTML = e.target.className.replace(/ 1| 2/,"");}catch(e){}
    target = e.target;
  }
  else {
    text.innerHTML = "";
  }
}

oldguyX = 0;
oldguyY = 0;

// Click (interact)
onclick = (e) => {
  tmp = {};
  
  // Compute in-game coordinates
  var x = -(window.innerWidth-600)/2+e.pageX, y = e.pageY-30;
  
  // Move hero on floor
  if(x>0&&y>0&&x<600&&y<600){
    if(e.target.className=="floor"){
      sit = 0;
      C.move({n:"hero",x:300-(300-x)/2+roomX,y:250-(300-y)/2+roomY,sx:room==5?1.5:1,sy:room==5?1.5:1});
      guyX = x+roomX;
      guyY = y+roomY;
    }
  }
  
  // Check walk under ladder
  if(((oldguyX < 30 && guyX > 89)||(guyX < 30 && oldguyX > 89)) && oldguyY > 1002 && oldguyY < 1064 && guyY > 1002 && guyY < 1064){
    achievements[21][1] = 1;
    
  }
  
  // Backup coords
  oldguyX = guyX;
  oldguyY = guyY;
  
  if(sit){
    C.move({n:"hero",sx:1,sy:1});
  }
  
  // intro
  if(introanim == 1){
    title.innerHTML = "<div class=tuto>Today is your big (unlucky) day! Your goal is to trigger as many bad luck events as possible before midnight and return to bed to see how unlucky you've been. There is a total of 26 bad luck events to trigger based on famous superstitions.<h1>OK";
    introanim++;
  }
  else if(introanim == 2){
    intro.remove();
    introanim++;
  }
  
  // Open menu
  
  // Bedroom
  if(room == 0){
    
    // Bed
    if(target.className == "bed"){
      tmp = {"rotate": "rotatebed"};
      if(state[2].hat == 1){
        tmp["put hat on bed"] = "puthat";
      }
      tmp["sleep (and see your score)"] = "sleep";
      openmenu(tmp);
    }
    
    // Cupboard
    if(target.id == "cupboard1"){
      if(state[0].cupboard == 0){
        openmenu({"open": "opencupboard1"});
      }
      else {
        openmenu({"close": "closecupboard1"});
      }
    }
    
    // Calendar    
    if(target.className == "calendar"){
      tmp = {"watch":"watchcalendar"};
      
      if(state[0].calendar1 == 0){
        tmp["put on desk"] = "removecalendar";
      }
      
      else if(state[0].pen == 1){
        tmp["mark date"] = "markdate";
      }
      
      openmenu(tmp);
    }
    
    // hanger
    if(target.id=="hanger1" && state[0].calendar1 != 0){
      tmp = {};
      if(state[3].mirror == 1 && state[0].mirror == 0 && state[0].horseshoe == 0){
        tmp["hang mirror"] = "hangmirror";
      }
      if(state[5].horseshoe == 1 && state[0].mirror == 0 && state[0].horseshoe == 0){
        tmp["hang horseshoe"] = "hanghorseshoe4";
      }
      if(JSON.stringify(tmp) != '{}') openmenu(tmp);
    }
    
    // remove horseshoe
    // todo ?
    
    // Scissors
    if(target.className == "scissors"){
      tmp = {"take":"takescissors"};
      if(state[0].scissors == 0){
        tmp["open"] = "openscissors";
      }
      else {
        tmp["close"]= "closescissors";
      }
      openmenu(tmp);
    }
    
    // Pen
    if(target.className == "pen"){
      openmenu({"take":"takepen"});
    }
    
    // Shoes
    if(target.id == "shoes1"){
      openmenu({"take":"takeshoes"});
    }
    
    // Desk
    if(target.className == "desk"){
      tmp = {};
      if(state[0].pen){
        tmp["put down pen"] = "putdownpen";
      }
      if(state[0].scissors == 2){
        tmp["put down scissors"] = "putdownscissors"
      }
      if(JSON.stringify(tmp) != '{}') openmenu(tmp);
    }
    
    // Shirts
    if(target.className == "blue shirt"){
      openmenu({"wear":"wearblue"});
    }
    
    if(target.className == "green shirt"){
      openmenu({"wear":"weargreen"});
    }
    
    if(target.className == "red shirt"){
      openmenu({"wear":"wearred"});
    }
    
    // Doors
    if(target.id == "lrd1"){
      tmp = {"go to living room": "bedtoliving"};
      if(state[0].door1){
        tmp["close"] = "closedoor1";
      }
      else {
        tmp["open"] = "opendoor1";
      }
      openmenu(tmp);
    }
    
    // Window
    if(target.id == "window1"){
      tmp = {};
      if(state[0].window == 0){
        tmp["open"] = "openwindow1";
      }
      else {
        tmp["close"] = "closewindow1";
      }
      tmp["watch outside"] = "watchout";
      if(state[5].seed == 1){
        tmp["put seed on windosill"] = "putseed1";
      }
      openmenu(tmp);
    }
    
  }
  
  // Living room
  else if(room == 2){
    
    if(target.className == "window"){
      tmp = {};
      if(state[2].window == 0){
        tmp["open"] = "openwindow2";
      }
      else {
        tmp["close"] = "closewindow2";
      }
      tmp["watch"] = "watchout";
      if(state[5].seed == 1){
        tmp["put seed on windosill"] = "putseed2";
      }
      openmenu(tmp);
    }
    
    // Chair
    if(target.id == "chair1"){
      if(state[2].chair1){
        openmenu({"sit": "sitchair1","push":"pushchair1"});
      }
      else {
        openmenu({"pull": "pullchair1"});
      }
    }
    if(target.id == "chair2"){
      if(state[2].chair2){
        openmenu({"sit": "sitchair2","push":"pushchair2"});
      }
      else {
        openmenu({"pull": "pullchair2"});
      }
    }
    
    // Couch
    if(target.className == "couch"){
      openmenu({"sit": "sitcouch"});
    }
    
    // hat
    if(target.className == "hat"){
      openmenu({"take":"takehat"});
    }
    
    // key
    if(target.id == "key"){
      openmenu({"take":"takekey"});
    }
    
    // Doors
    if(target.className == "bedroom door"){
      tmp = {"go to bedroom": "livingtobed"};
      if(state[2].door1){
        tmp["close"] = "closedoor1";
      }
      else {
        tmp["open"] = "opendoor1";
      }
      openmenu(tmp);
    }
    
    if(target.className == "kitchen door"){
      tmp = {"go to kitchen": "livingtokitchen"};
      if(state[2].door2){
        tmp["close"] = "closedoor2";
      }
      else {
        tmp["open"] = "opendoor2";
      }
      openmenu(tmp);
    }
    
    if(target.className == "exit door"){
      tmp = {"go outside": "goout"};
      if(state[2].door4){
        tmp["close"] = "closedoor4";
      }
      else {
        tmp["open"] = "opendoor4";
      }
      openmenu(tmp);
    }
    
    // Salt
    if(target.className == "salt"){
      openmenu({"tip":"tipsalt"});
    }
    
    // Table
    if(target.className == "table"){
      tmp = {};
      if(state[3].bread == 1){
        tmp["put bread"] = "putbread";
      }
      if(state[0].shoes == 1){
        tmp["put shoes"] = "putshoes";
      }
      if(state[1].glasses == 1){
        tmp["put glasses"] = "putglasses";
      }
      if(state[2].key == 1){
        tmp["put keys"] = "putkey";
      }
      if(JSON.stringify(tmp) != '{}') openmenu(tmp);
    }
    
    // bread
    if(target.id == "bread2"){
      if(state[3].bread == 2){
        openmenu({"return":"returnbread"});
      }
    }
    
    // hanger
    if(target.id=="hanger2" && state[5].horseshoe == 1 && state[2].hat != 0){
      openmenu({"hang horseshoe": "hanghorseshoe3"});
    }
  }
  
  // Kitchen
  else if(room == 3){
    
    // Plane
    if(target.id == "plane"){
      if(state[3].plane){
        openmenu({"close":"closeplane"});
      }
      else {
        openmenu({"open":"openplane"});
      }
    }
    
    // bread
    if(target.id == "bread"){
      if(state[3].bread == 0){
        openmenu({"take":"takebread"});
      }
    }
    
    // Door
    if(target.id == "lrd2"){
      tmp = {"go to living room": "kitchentoliving"};
      if(state[3].door2){
        tmp["close"] = "closedoor2";
      }
      else {
        tmp["open"] = "opendoor2";
      }
      openmenu(tmp);
    }
    
    if(target.className == "bathroom door"){
      tmp = {"go to bathroom": "kitchentobath"};
      if(state[3].door3){
        tmp["close"] = "closedoor3";
      }
      else {
        tmp["open"] = "opendoor3";
      }
      openmenu(tmp);
    }
    
    // Mirror
    if(target.className == "mirror"){
      openmenu({"take":"takemirror"});
    }
    
    // Knive
    if(target.id == "knive1"){
      openmenu({"take":"takeknive"});
    }
    
    if(target.id == "knive2" && state[3].knive == 1){
      openmenu({"put knive":"putknive"});
    }
    
    // Broom 
    if(target.className == "broom"){
      openmenu({"return":"returnbroom"});
    }
    
    // hanger
    if(target.id=="hanger3" && state[3].mirror != 0 && state[5].horseshoe == 1){
      openmenu({"hang horseshoe": "hanghorseshoe2"});
    }
  }
  
  // Bathroom
  else if(room == 1){
  
    // Door
    if(target.id == "bathdoor"){
      tmp = {"go to kitchen": "bathtokitchen"};
      if(state[1].door3){
        tmp["close"] = "closedoor3";
      }
      else {
        tmp["open"] = "opendoor3";
      }
      openmenu(tmp);
    }
    
    // Cupboard
    if(target.id == "cupboard2"){
      if(state[1].cupboard == 0){
        openmenu({"open": "opencupboard2"});
      }
      else {
        openmenu({"close": "closecupboard2"});
      }
    }
    
    // Comb
    if(target.className == "comb" && state[1].comb == 0){
      openmenu({"drop": "dropcomb"});
    }
    
    // Glasses
    if(target.id == "glasses"){
      openmenu({"take":"takeglasses"});
    }
    
    // Mirror
    if(target.id == "bathmirror" && state[5].hatchet == 1){
      openmenu({"break with hatchet": "breakmirror"});
    }
  }
  
  // Garden
  else if(room == 4){
    
    // Door
    if(target.className == "entrance door"){
      tmp = {"go intside": "goin"};
      if(state[4].door4){
        tmp["close"] = "closedoor4";
      }
      else {
        tmp["open"] = "opendoor4";
      }
      openmenu(tmp);
    }
    
    // Umbrella
    if(target.id == "umbrella1"){
      tmp = {"open": "openumbrella"};
      openmenu(tmp);
    }
    
    if(target.className == "umbrella holder"){
      tmp = {"put down umbrella": "closeumbrella"};
      openmenu(tmp);
    }
    
    if(target.className == "tool shed"){
      tmp = {"enter": "entershed"};
      openmenu(tmp);
    }
    
    // Crack
    if(target.id == "crack"){
      achievements[18][1] = 1;
      setTimeout(()=>{player(coin)},750);
    }
    
    // House
    if(target.className == "house" && state[5].ladder == 1){
      tmp = {"place ladder": "placeladder"};
      openmenu(tmp);
    }
    
    // Gate
    if(target.className == "gate"){
      openmenu({"watch outside": "watchout"});
    }
  }
  
  // Tool shed
  else if(room == 5){
    
    // exit
    if(target.className == "exit"){
      exitshed();
    }
    
    // ladder
    if(target.id == "ladder1"){
      openmenu({"take":"takeladder"});
    }
    
    // seed
    if(target.className == "seed bucket"){
      openmenu({"take some seed":"takeseed"});
    }
    
    // Hatchet
    if(target.className == "hatchet"){
      openmenu({"take":"takehatchet"});
    }
    
    // Horseshoe
    if(target.id=="horseshoe1"){
      openmenu({"take":"takehorseshoe"});
    }
  }
  
  if(e.target.id == "rainbow"){
    openmenu({"point":"pointrainbow"});
  }
  
  if(e.target.className == "return"){
    watchin();
  }
  
  
}