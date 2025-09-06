// bathroom
C.cube({x:-100,y:-450,z:70,w:300,h:300,d:300,b:"#ddd",css:"cube"});

  // door
  C.plane({w:51,h:51,x:84,y:15,z:300,rz:-90,html:svg.door});
  
  // wc
  C.plane({w:100,h:100,x:44,y:-80,z:300,html:svg.wc});
  
  // lavabo
  C.plane({w:100,h:100,x:-74,y:-50,z:320,html:svg.lavabo});
  
  // bath cupboard
  C.plane({w:100,h:100,x:64,y:80,z:300,html:svg.cupboard});
  
  // shower
  C.plane({w:100,h:100,x:-48,y:50,z:300,html:svg.shower});
  
  
  

// bedroom
C.cube({x:301,y:-450,z:70,w:300,h:300,d:300,b:"#ddd",css:"cube"});

  // door
  C.plane({w:51,h:51,x:290,y:84,z:300,rz:180,html:svg.door,css:"living room door",n:"lrd1"});
  //C.plane({w:51,h:51,x:191,y:55-50,z:300,rz:-90,html:svg.door,css:"bathroom door"});
  
  // bed
  C.plane({w:100,h:100,x:253,y:-60-50,z:300,rz:-90,html:svg.bed,css:"bed",n:"bed"});
  
  // hat 
  C.plane({w:33,h:20,x:245,y:-71,z:300,rz:0,html:svg.hat,css:"hat hidden",n:"hat2"});
  
  
  // desk
  C.plane({w:100,h:50,x:375,y:-10,z:300,rz:90,sy:1.2,html:svg.desk,css:"desk"});
  
  // chair
  C.plane({w:34,h:28,x:355,y:0,z:295,rz:-95,html:svg.chair,css:"chair"});
  
  // window
  C.plane({w:100,h:100,x:180,y:25-50,z:300,rz:180,html:svg.window,css:"window",n:"window1"});
  
  // hanger
  C.plane({w:8,h:11,x:228,y:-147,z:300,rz:0,html:svg.hanger,css:"hanger",n:"hanger1"});
  C.plane({w:8,h:11,x:230,y:130,z:300,rz:180,html:svg.hanger,css:"hanger"});
  
  // mirror
  C.plane({w:29,h:46,x:232,y:96,z:300,rz:180,sy:.7,html:svg.mirror,css:"mirror"});
  C.plane({w:29,h:46,x:227,y:-147,z:300,sy:.7,html:svg.mirror,css:"mirror hidden",n:"mirror2"});
  
  // calendar
  C.plane({w:46,h:40,x:235,y:-145,z:300,rz:0,html:svg.calendar,css:"calendar",n:"calendar"});
  
  // cupboard
  C.plane({w:73,h:44,x:394,y:-100,z:300,rz:90,html:svg.cupboard,css:"cupboard"});
  
  // Shoes
  C.plane({w:24,h:27,x:384,y:-74,z:300,rz:90,html:svg.shoes,css:"shoes hidden",n:"shoes1"});
  
  // Shirts
  C.plane({w:34,h:25,x:384,y:-112,z:300,rz:90,html:svg.blueshirt,css:"blue shirt hidden"});
  C.plane({w:34,h:25,x:384,y:-95,z:300,rz:90,html:svg.greenshirt,css:"green shirt hidden"});
  C.plane({w:34,h:25,x:384,y:-77,z:300,rz:90,html:svg.redshirt,css:"red shirt hidden"});
  
  // guy
  C.plane({n:"hero",w:100,h:100,x:300,y:-40,z:305,rz:0,html:drawguy(),css:"guy"});

  // pen
  C.plane({w:8,h:24,x:380,y:-25,z:305,rz:95,html:svg.pen,css:"pen"});
  
  // scissors
  C.plane({w:25,h:28,x:385,y:30,z:305,rz:45,html:svg.scissors,css:"scissors"});



// living room
C.cube({x:301,y:-100,z:70,w:300,h:300,d:300,b:"#ddd",css:"cube"});
  
  // door
  C.plane({w:51,h:51,x:270,y:215,z:300,rz:0,html:svg.door,css:"bedroom door"});
  C.plane({w:51,h:51,x:330,y:434,z:300,rz:180,html:svg.door,css:"exit door"});
  C.plane({w:51,h:51,x:410,y:360,z:300,rz:90,html:svg.door,css: "kitchen door"});
  
  // window
  C.plane({w:100,h:100,x:180,y:280,z:300,rz:180,html:svg.window,css:"window",n:"window2"});
  
  // couch
  C.plane({w:50,h:100,x:375,y:250,z:300,rz:-180,html:svg.couch,css:"couch"});
  C.plane({w:100,h:50,x:355,y:250,z:300,rz:-180,html:"",css:"couch"});
  
  // fan
  //C.plane({w:100,h:100,x:380,y:360,z:300,rz:-45,html:svg.fan});
  
  // chair
  C.plane({w:34,h:28,x:240,y:355,z:300,sx:-1,html:svg.chair,css:"chair 1",n:"chair1"});
  C.plane({w:60,h:60,x:265,y:390,z:300,rz:90,html:svg.chair,css:"chair 2",n:"chair2"});
  
  // table
  C.plane({w:65,h:74,x:238,y:372,z:300,rz:180,html:svg.table,css:"table"});
  
  // bread
  C.plane({w:18,h:40,x:224,y:382,z:300,rz:245,sx:.9,sy:.9,html:svg.bread,css:"bread hidden",n:"bread2"});
  
  // shoes
  C.plane({w:18,h:40,x:245,y:409,z:300,rz:53,sx:.9,sy:.9,html:svg.shoes,css:"shoes hidden",n:"shoes2"});
  
  // hanger
  C.plane({w:8,h:11,x:280,y:455,z:300,rz:180,html:svg.hanger,css:"hanger"});
  
  // hat
  C.plane({w:33,h:20,x:280,y:441,z:300,rz:0,html:svg.hat,css:"hat",n:"hat1"});
  
  // salt
  C.plane({w:20,h:20,x:220,y:230+180,z:300,rz:225,html:svg.salt,css:"salt",n:"salt"});
  C.plane({w:20,h:20,x:230,y:227+180,z:300,rz:225,html:svg.salt,css:"pepper"});




// kitchen
C.cube({x:-100,y:-100,z:70,w:300,h:300,d:300,b:"#ddd",css:"cube"});

  // door
  C.plane({w:51,h:51,x:-209,y:360,z:300,rz:-90,html:svg.door,css:"living room door",n:"lrd2"});
  
  // fridge
  C.plane({w:56,h:77,x:-190,y:230,z:300,rz:0,html:svg.fridge,css:"fridge"});
  
  // plane/cupboard
  C.plane({w:53,h:100,x:-21+3,y:365,z:300,rz:180,sx:1.2,html:svg.plane,css:"cupboard",n:"plane"});
  
  // bread
  C.plane({w:18,h:40,x:-37,y:400,z:300,rz:180,html:svg.bread,css:"bread hidden",n:"bread"});
  
  // sink
  C.plane({w:50,h:100,x:-20+3,y:237,z:300,rz:180,sx:1.3,html:svg.sink,css:"sink"});
  
  // broom
  C.plane({w:19,h:50,x:-110,y:240,z:330,rz:0,html:svg.broom,css:"broom",n:"broom"});
  
  // knive
  C.plane({w:12,h:29,x:-23,y:260,z:300,rz:30,html:svg.knive,css:"knive",n:"knive1"});
  C.plane({w:12,h:29,x:-15,y:297,z:300,rz:100,html:svg.knive,css:"knive",n:"knive2"});
  C.plane({w:12,h:29,x:-15,y:297,z:300,rz:30,html:svg.knive,css:"knive hidden",n:"knive3"});

  // oven
  C.plane({w:55,h:65,x:-32+3,y:330,z:340,rz:180,html:svg.oven,css:"oven"});
  
  // Hanger
  C.plane({w:8,h:11,x:-120,y:470,z:300,rz:180,html:svg.hanger,css:"hanger"});
  
  // mirror
  C.plane({w:29,h:46,x:-120,y:435,z:300,rz:180,sy:.7,html:svg.mirror,css:"mirror",n:"mirror1"});




// Garden
C.plane({x:0,y:1000,w:800,h:2000,z:65,b:"#787"});

  // house
  C.cube({x:150,y:465,z:90,w:400,h:400,d:400,b:"#ccc",css:"cube"});
  
  // pavement
  C.plane({x:120,y:887,w:350,h:60,z:65,b:"#ccc"});
  C.plane({x:120,y:1165,w:350,h:60,z:65,b:"#ccc"});
  C.plane({x:320,y:1030,w:60,h:350,z:65,b:"#ccc"});
  C.plane({x:-15,y:1030,w:60,h:350,z:65,b:"#ccc"});
  
  // tool shed
  C.cube({x:-40,y:1080,z:150,w:100,h:100,d:100,ry: 90,b:"#ccc",css:"cube"});
  
  // door
  C.plane({w:51,h:51,x:200,y:920,z:300,rz:180,html:svg.door});
  
  // fence 
  C.plane({w:100,h:100,x:190,y:990,z:400,rz:180,html:svg.fence});
  C.plane({w:100,h:100,x:60,y:990,z:400,rz:0,html:svg.gate});
  C.plane({w:100,h:100,x:160,y:1038,z:400,rz:-90,html:svg.fence});
  
  // tree
  C.plane({w:100,h:100,x:215,y:1045,z:420,rz:90,html:svg.tree});
  
  
  
// Tool shed
C.cube({x:0,y:1500,z:70,w:300,h:300,d:300,b:"#ccc",css:"cube toolshed"});

  // pavement
  C.plane({x:120,y:1645,w:600,h:280,z:65,b:"#ccc"});
  
  // ladder
  C.plane({w:100,h:100,x:20,y:1640,z:520,rz:0,html:svg.ladder});
  
  // bucket
  C.plane({w:100,h:100,x:20,y:1720,z:420,rz:0,html:svg.bucket});
  
  // shelves
  C.plane({x:-120,y:1650,w:60,h:295,z:155,b:"#eee",css:"shelf"});
  C.plane({x:-120,y:1650,w:60,h:295,z:295,b:"#eee",css:"shelf"});
  
  
room = 0;
show(room);