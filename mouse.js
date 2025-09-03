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

// Click (interact)
onclick = (e) => {
  tmp = {};
  
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
  
  // intro
  if(introanim == 1){
    title.innerHTML = "<div class=tuto>Today is your big (unlucky) day! Your goal is to trigger as many bad luck events as possible, and return to bed to see how unlucky you have been.<br>After sleeping, you can restart the day to improve your score!<h1>OK";
    introanim++;
  }
  else if(introanim == 2){
    intro.remove();
    introanim++;
  }
  
  // Open menu
  if(room == 0){
    
    // Bed
    if(target.className == "bed"){
      openmenu({"rotate": "rotatebed", "sleep (and see your score)":"sleep"});
    }
    if(target.className == "window"){
      if(state[0].window == 0){
        openmenu({"open": "openwindow1"/*, "watch":"watchwindow1"*/});
      }
      else {
        openmenu({"close": "closewindow1"/*, "watch":"watchwindow1"*/});
      }
    }
    
    // Cupboard
    if(target.className == "cupboard"){
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
    
  }
  
}