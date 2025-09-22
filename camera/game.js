// Show a room
show = (room, pos) => {
  //hero.style.transition = "none";
  
  // Bedroom
  if(room == 0){
    C.camera({x:roomX = 0,y:roomY = -300, z:0}) // bedroom
    guyX = roomX+300;
    guyY = roomY+310;
    C.move({n:"hero",x:guyX,y:guyY-40});
    if(state[0].bird == 1){
      // Bird achievement
      ac[22][1] = 1;
    }
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
    if(state[2].bird == 1){
      // Bird achievement
      ac[22][1] = 1;
      
    }
    if(state[4].umbrella == 1){
      ac[17][1] = 1;
    }
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

// Music

A = new AudioContext,
m = A.createBuffer(1,1e6,44100);

m0 = [,,,,72,,,71, 72, 74, 72, 71, 69, 72,, 72, 69, 72,,, 71, 72, 69, 67, 64, 65, 67,,, 65, 64, 62, 64, 65, 67, 69, 67,,, 69, 71, 69, 67, 65, 64, 62, 64, 62, 60,, 60, 62, 64,, 65,, 62,,, 67, 67,,, 74,,, 72, 71, 69, 71, 72, 74, 72, 71,,, 72, 71, 69, 72, 71, 69, 65,, 65, 65, 65,, 69,, 72, 69, 71, 67, 65,, 65, 65, 65,, 69,, 71, 67, 69, 65, 62,, 62, 60, 62,,, 62, 62, 62,, 65,, 69, 65, 67, 64, 62,, 62, 60, 62,,, 62, 60, 62,, 64, 65, 67,,, 65, 64, 62, 60];
music = [];
for(i = 0; i < 30; i++){
  for(j = 0; j < 143; j++){
    music.push(m0[j] ? m0[j] - 19 + i : 0); 
  }
}

// params: note value
piano = (e,V, p, b, w, P, r, i, D) => {
   for(
  
    // V: note length in seconds
    V = .9,
    
    // Temp vars for guitar synthesis
    v = [],
    p = c = 0,
    
    // Modulation
    // This function generates the i'th sample of a sinusoidal signal with a specific frequency and amplitude
    b = (e, t, a, i) => Math.sin(e / t * 6.28 * a + i),
    
    // Instrument synthesis
    w = (e, t) =>  Math.sin(e / 44100 * t * 6.28 + b(e, 44100, t, 0) ** 2 + .75 * b(e, 44100, t, .25) + .1 * b(e, 44100, t, .5)),
    
    // Sound samples
    D = [],
    
    // Loop on all the samples
    i = 0;
    i < 44100 * V;
    i++
  ){
  
    // Fill the samples array
    D[i] =
    
      // The first 88 samples represent the note's attack
      (((1 - (i - 88.2) / (44100 * (V - .002))) * w(i, e)) / 5)
      /5;
  }
  
  // Play the note
  m.getChannelData(0).set(D),
  s = A.createBufferSource(),
  s.buffer = m,
  s.connect(A.destination),
  s.start()
}

current_note = 0;

play_music = () => {
  setInterval(() => {
    current_note ++;
    if(music[current_note]) piano(440*1.06**(music[current_note] - 80));
  }, 350);
}

// ZZfx
zv=.3,               // volume
zx=new AudioContext, // audio context
z=                   // play sound
(p=1,k=.05,b=220,e=0,r=0,t=.1,q=0,D=1,u=0,y=0,v=0,z=0,l=0,E=0,A=0,F=0,c=0,w=1,m=0,B=0
,N=0)=>{let M=Math,d=2*M.PI,R=44100,G=u*=500*d/R/R,C=b*=(1-k+2*k*M.random(k=[]))*d/R,
g=0,H=0,a=0,n=1,I=0,J=0,f=0,h=N<0?-1:1,x=d*h*N*2/R,L=M.cos(x),Z=M.sin,K=Z(x)/4,O=1+K,
X=-2*L/O,Y=(1-K)/O,P=(1+h*L)/2/O,Q=-(h+L)/O,S=P,T=0,U=0,V=0,W=0;e=R*e+9;m*=R;r*=R;t*=
R;c*=R;y*=500*d/R**3;A*=d/R;v*=d/R;z*=R;l=R*l|0;p*=zv;for(h=e+m+r+t+c|0;a<h;k[a++]
=f*p)++J%(100*F|0)||(f=q?1<q?2<q?3<q?Z(g**3):M.max(M.min(M.tan(g),1),-1):1-(2*g/d%2+2)
%2:1-4*M.abs(M.round(g/d)-g/d):Z(g),f=(l?1-B+B*Z(d*a/l):1)*(f<0?-1:1)*M.abs(f)**D*(a<
e?a/e:a<e+m?1-(a-e)/m*(1-w):a<e+m+r?w:a<h-c?(h-a-c)/t*w:0),f=c?f/2+(c>a?0:(a<h-c?1:(h
-a)/c)*k[a-c|0]/2/p):f,N?f=W=S*T+Q*(T=U)+P*(U=f)-Y*V-X*(V=W):0),x=(b+=u+=y)*M.cos(A*
H++),g+=x+x*E*Z(a**5),n&&++n>z&&(b+=v,C+=v,n=0),!l||++I%l||(b=C,u=G,n=n||1);p=zx.
createBuffer(1,h,R);p.getChannelData(0).set(k);b=zx.createBufferSource();
b.buffer=p;b.connect(zx.destination);b.start()}

// thunder sound
t=(i,n)=>(n-i)/n;

thu = (i,q,n) => {
  n=25000;
  if (i > n) return null;
  return Math.sin(i/200 - Math.sin(i/331)*Math.sin(i/61) + Math.sin(Math.sin(i/59)/39) * 33)*t(i,n)*(room > 3 ? 9 : 2);
}

// nudge Sound
nu = (i,q,n) => {
  n=6e3;
  if (i > n) return null;
  q = t(i,n);
  return Math.sin(i*0.01*Math.sin(0.009*i+Math.sin(i/200))+Math.sin(i/100))*q*q/10;
}

// write sound
wr = i => (Math.sin(i/200) + Math.sin(i/350) + Math.sin(i/800))* Math.exp(-i/60000)

// ting sound
ting = i => (i%10 < 5 ? 1 : -1) * Math.exp(-i/2000)

// open sound
op = (i,q,n) => {
  n=25000;
  if (i > n) return null;
  q = t(i,n);
  return Math.sin(i*0.001*Math.sin(0.009*i+Math.sin(i/200))+Math.sin(i/100))*q*q/10;
}

// Explosion Sound
ex = i => (Math.random() * 2 - 1) * Math.exp(-i/1e4);

// Step sound
step = (i,q,n) => {
  n=3800;
  if (i > n) return null;
  q = t(i,n);
  return Math.sin(i*0.01*Math.sin(0.001*i+Math.sin(i/200))+Math.sin(i/200))*q*q/9;
}

// Sound player
py = (f,r,A,m,b,i,s) => {
  A=new AudioContext()
  m=A.createBuffer(1,96e3,48e3)
  b=m.getChannelData(0)
  for(i=96e3;i--;)b[r?20000-i:i]=f(i)
  s=A.createBufferSource()
  s.buffer=m
  s.connect(A.destination)
  s.start()
}

// Timer
hour = 8;
min = 0;
setInterval(()=>{
  if(introanim < 2) return;
  min++;
  if(min > 59){
    min = 0;
    hour ++;
  }
  if(hour == 23 && min == 59){
    sleep();
  }
  if(hour == seedhour + 1 && min == seedmin){
    
    // show bird
    if(state[5].seed == 2 && state[0].window== 1){
      bird1.classList.remove("hidden");
      state[0].bird = 1;
      if(room == 0){
        // Achievement
        ac[22][1] = 1;
      }
    }
    
    if(state[5].seed == 3 && state[2].window== 1){
      bird2.classList.remove("hidden");
      state[2].bird = 1;
      if(room == 2){
        // Achievement
        ac[22][1] = 1;
      }
    }
  }
  
  // Cat: 13h13
  if(hour == 13 && (min == 10)){
    cat.style.left = "40%"; // cat
  }
  if(hour == 13 && (min == 13 || min == 17)){
    z(...[,,1100,.05,.2,.2,2,,2,-15,,,,.1,,,,.3,.05]); // meow
    meow.classList.remove("hidden");
    setTimeout(()=>{meow.classList.add("hidden");},1000);
    if(watching){
      ac[24][1] = 1;
    }
  }

  if(hour == 13 && (min == 20)){
    cat.style.left = "120%"; // cat
  }

  // Rainbow: 18h15-19h
  if(hour == 18 && min == 10){
    rainbow.classList.remove("hidden");
  }
  
  if(hour == 18 && min == 15){
    rainbow.style.opacity = 1;
  }
  
  if(hour == 19 && min == 0){
    rainbow.style.opacity = 0;
  }
  
  if(hour == 19 && min == 5){
    rainbow.classList.add("hidden");
  }
  
  // Rain: 15h30 - 18h
  if(hour == 15 && min == 30){
    rain.style.opacity = .8;
    AA = new AudioContext();
    bs = 4096;
    wn = AA.createScriptProcessor(bs, 1, 1);
    wn.onaudioprocess = (e,i,output) => {
        output = e.outputBuffer.getChannelData(0);
        for (i = 0; i < bs; i++) {
            output[i] = (Math.random() * 2 - 1)/((room > 3 || (room == 0 &&state[0].window== 1) || (room == 2 && (state[2].window== 1 || state[2].door4 == 1)))  ? 50 : 220);
        }
    }
    wn.connect(AA.destination);
  }
  
  if(hour == 18 && min == 0){
    rain.style.opacity = 0;
    AA.close();
  }
  
  // Thunder: 16h-17h
  if(hour == 16 && (min == 0 || min == 10 || min == 20 || min == 30 || min == 40 || min == 50)){
    thunder();
    if(guyX > 201 && guyY > 1126){
      ac[25][1] = 1;
    }
  }
  
  time.innerHTML = (""+hour).padStart(2,"0") + ":" + (""+min).padStart(2,"0");
},1000);


// Rain
ctx = rain.getContext("2d");
setInterval((x,y,i)=>{
  rain.width ^= 0;
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#346";
  for(i = 100; i--;){
    if(watching){
      ctx.moveTo(x = Math.random()*600, y = Math.random()*600)
      ctx.lineTo(x-5,y+20);
    }
    else if(room == 4){
      ctx.moveTo(x = Math.random()*600, y = Math.random()*600)
      ctx.lineTo(x + (300 - x) / 10, y + (300 - y) / 10);
    }
    else if(room == 5){
      ctx.moveTo(x = Math.random()*600 + 460, y = Math.random()*400+ 100)
      ctx.lineTo(x + (300 - x) / 10, y + (300 - y) / 10);
    }
  }
  ctx.stroke();
},50);

target = 0;
seedhour = 99;
seedmin = 99;


// Open and fill menu
openmenu = (opts,i,html) => {
  ms.classList.remove("hidden");
  html = "<div>" + target.className.replace(/ 1| 2/,"") + "</div>";
  for(i in opts){
    html += "<div onclick='" + opts[i] + "()'>" + i + "</div>";
  }
  menu.innerHTML = html;
}

closemenu = () => {
  ms.classList.add("hidden");
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
  py(nu);
}

sleep = () => {
  if(state[0].bed == 1){
    ac[3][1] = 1;
  }
  if(state[0].scissors == 1){
    ac[4][1] = 1;
  }
  if(state[0].door1 == 1){
    ac[5][1] = 1;
  }
  k.innerHTML = "";
  outro();
}

openwindow1 = () => {
  document.querySelector("#window1").innerHTML = svg.windowopen;
  state[0].window= 1;
  py(op);
}

closewindow1 = () => {
  document.querySelector("#window1").innerHTML = svg.window
  state[0].window= 0;
  py(op,1);
}

openwindow2 = () => {
  document.querySelector("#window2").innerHTML = svg.windowopen;
  state[2].window= 1;
  py(op);
}

closewindow2 = () => {
  document.querySelector("#window2").innerHTML = svg.window
  state[2].window= 0;
  py(op,1);
}

opencupboard1 = () => {
  document.querySelector("#cupboard1").innerHTML = svg.cupboardopen;
  state[0].cupboard = 1;
  if(state[0].shirt != 0) document.querySelector(".shirt.blue").classList.remove("hidden");
  if(state[0].shirt != 1) document.querySelector(".shirt.red").classList.remove("hidden");
  if(state[0].shirt != 2) document.querySelector(".shirt.green").classList.remove("hidden");
  if(state[0].shoes != 1) document.querySelector("#shoes1").classList.remove("hidden");
  py(op);
}

closecupboard1 = () => {
  document.querySelector("#cupboard1").innerHTML = svg.cupboard;
  state[0].cupboard = 0;
  document.querySelector(".shirt.blue").classList.add("hidden");
  document.querySelector(".shirt.green").classList.add("hidden");
  document.querySelector(".shirt.red").classList.add("hidden");
  document.querySelector(".shoes").classList.add("hidden");
  py(op,1);
}

takeshoes = () => {
  document.querySelector("#shoes1").classList.add("hidden");
  k.innerHTML += "<div id=kshoes>"+svg.shoes+"</div>";
  state[0].shoes = 1;
  py(nu);
}

removecalendar = () => {
  C.move({n:"calendar", x:385,y:-5,rz:95,sx:.6,sy:.7});
  state[0].calendar1 = 1;
}

watchcalendar = () => {
  setTimeout(()=>{
  ms.classList.remove("hidden");
  menu.innerHTML = state[0].calendar2 == 1 ? dc(1, 1) : dc();
  },200);
}

markdate = () => {
  setTimeout(()=>{
    ms.classList.remove("hidden");
    menu.innerHTML = dc();
  },200);
  setTimeout(()=>{
    menu.innerHTML = dc(1);
    py(wr);
  },800);
    setTimeout(()=>{
    menu.innerHTML = dc(1,1);
    state[0].calendar2 = 1;
    ac[1][1] = 1;
  },1400);
}

openscissors = () => {
  document.querySelector(".scissors").innerHTML = svg.scissorsopen;
  state[0].scissors = 1;
  py(nu);
}

closescissors = () => {
  document.querySelector(".scissors").innerHTML = svg.scissors;
  state[0].scissors = 0;
  py(nu);
}

takepen = () => {
  document.querySelector(".pen").classList.add("hidden");
  k.innerHTML += "<div id=kpen>"+svg.pen+"</div>";
  state[0].pen = 1;
  py(nu);
}

takescissors = () => {
  document.querySelector(".scissors").classList.add("hidden");
  k.innerHTML += "<div id=kscissors>"+svg.scissors+"</div>";
  state[0].scissors = 2;
  py(nu);
}

putdownpen = () => {
  kpen.remove();
  document.querySelector(".pen").classList.remove("hidden");
  state[0].pen = 0;
  py(nu);
}

putdownscissors = () => {
  kscissors.remove();
  document.querySelector(".scissors").classList.remove("hidden");
  closescissors(); // implied: state[0].scissors = 0;
  py(nu);
}

wearblue = () => {
  state[0].shirt = 0;
  hero.innerHTML = dg();
  document.querySelector(".shirt.blue").classList.add("wear");
  document.querySelector(".shirt.green").classList.remove("wear");
  document.querySelector(".shirt.red").classList.remove("wear");
  py(nu);
}

weargreen = () => {
  state[0].shirt = 1;
  hero.innerHTML = dg();
  document.querySelector(".shirt.green").classList.add("wear");
  document.querySelector(".shirt.blue").classList.remove("wear");
  document.querySelector(".shirt.red").classList.remove("wear");
  ac[2][1] = 1;
  py(nu);
}

wearred = () => {
  state[0].shirt = 2;
  hero.innerHTML = dg();
  document.querySelector(".shirt.red").classList.add("wear");
  document.querySelector(".shirt.green").classList.remove("wear");
  document.querySelector(".shirt.blue").classList.remove("wear");
  py(nu);
}

puthat = () => {
  khat.remove();
  document.querySelector("#hat2").classList.remove("hidden");
  state[2].hat = 2;
  ac[7][1] = 1;
  py(nu);
}

hangmirror = () => {
  kmirror.remove();
  document.querySelector("#mirror2").classList.remove("hidden");
  state[3].mirror = 2;
  state[0].mirror = 1;
  ac[13][1] = 1;
  py(nu);
}

// Living room

pullchair1 = () => {
  C.move({n:"chair1", y:335});
  state[2].chair1 = 1;
  py(op);
}

pushchair1 = () => {
  C.move({n:"chair1", y:355});
  state[2].chair1 = 0;
  py(op);
}

pullchair2 = () => {
  C.move({n:"chair2", x:275,y:355, rz:70});
  state[2].chair2 = 1;
  py(op);
}

pushchair2 = () => {
  C.move({n:"chair2",x:265,y:390,rz:90});
  state[2].chair2 = 0;
  py(op);
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
  ac[9][1] = 1;
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
  document.querySelector("#hat1").classList.add("hidden");
  k.innerHTML += "<div id=khat>"+svg.hat+"</div>";
  state[2].hat = 1;
  py(nu);
}

takekey = () => {
  document.querySelector("#key").classList.add("hidden");
  k.innerHTML += "<div id=kkey>"+svg.key+"</div>";
  state[2].key = 1;
  py(nu);
}

tipsalt = () => {
  document.querySelector(".salt").innerHTML = svg.salttip;
  C.move({n:"salt",x:225,y:240+180,rz:5});
  state[2].salt = 1;
  ac[6][1] = 1;
  py(ting);
}

putbread = () => {
  kbread.remove();
  document.querySelector("#bread2").classList.remove("hidden");
  state[3].bread = 2;
  py(nu);
}

putkey = () => {
  kkey.remove();
  document.querySelector("#key").classList.remove("hidden");
  C.move({n:"key",x:250,y:390,z:310,rz:80,sy:1.2});
  state[2].key = 2;
  ac[16][1] = 1;
  py(nu);
}

putshoes = () => {
  kshoes.remove();
  document.querySelector("#shoes2").classList.remove("hidden");
  state[0].shoes = 2;
  ac[10][1] = 1;
  py(nu);
}

putglasses = () => {
  kglasses.remove();
  document.querySelector("#glasses2").classList.remove("hidden");
  state[1].glasses = 2;
  ac[14][1] = 1;
  py(nu);
}

returnbread = () => {
  document.querySelector("#bread2").innerHTML = svg.breadr;
  C.move({n:"bread2",sx:-.9});
  state[3].bread = 3;
  ac[8][1] = 1;
  py(nu);
}

putseed1 = () => {
  kseed.remove();
  document.querySelector("#seed1").classList.remove("hidden");
  state[5].seed = 2;
  seedhour = hour;
  seedmin = min;
  py(nu);
}

putseed2 = () => {
  kseed.remove();
  document.querySelector("#seed2").classList.remove("hidden");
  state[5].seed = 3;
  seedhour = hour;
  seedmin = min;
  py(nu);
}

// Kitchen

openplane = () => {
  document.querySelector("#plane").innerHTML = svg.plane2;
  state[3].plane = 1;
  if(state[3].bread == 0) document.querySelector("#bread").classList.remove("hidden");
  py(op);
}

closeplane = () => {
  document.querySelector("#plane").innerHTML = svg.plane;
  state[3].plane = 0;
  document.querySelector("#bread").classList.add("hidden");
  py(op,1);
}

takebread = () => {
  document.querySelector("#bread").classList.add("hidden");
  k.innerHTML += "<div id=kbread>"+svg.bread+"</div>";
  state[3].bread = 1;
  py(nu);
}

takeknive = () => {
  document.querySelector("#knive1").classList.add("hidden");
  k.innerHTML += "<div id=kknive>"+svg.knive+"</div>";
  state[3].knive = 1;
  py(nu);
}

putknive = () => {
  kknive.remove();
  document.querySelector("#knive3").classList.remove("hidden");
  state[3].knive = 2;
  ac[11][1] = 1;
  py(nu);
}

returnbroom = () => {
  document.querySelector("#broom").innerHTML = state[3].broom ? svg.broom : svg.broom2;
  C.move({n:"broom",rz: state[3].broom ? -90 : 90});
  state[3].broom = state[3].broom ? 0 : 1;
  ac[12][1] = state[3].broom;
  py(nu);
}

takemirror = () => {
  document.querySelector("#mirror1").classList.add("hidden");
  k.innerHTML += "<div id=kmirror>"+svg.mirror+"</div>";
  state[3].mirror = 1;
  py(nu);
}

hanghorseshoe2 = () => { // kitchen
  document.querySelector("#horseshoe2").classList.remove("hidden");
  khorseshoe.remove();
  state[5].horseshoe = 2;
  ac[20][1] = 1;
  py(nu);
}

hanghorseshoe3 = () => { // living room
  document.querySelector("#horseshoe3").classList.remove("hidden");
  khorseshoe.remove();
  state[5].horseshoe = 2;
  ac[20][1] = 1;
  py(nu);
}

hanghorseshoe4 = () => { // bedroom
  document.querySelector("#horseshoe4").classList.remove("hidden");
  khorseshoe.remove();
  state[5].horseshoe = 2;
  state[0].horseshoe = 1;
  ac[20][1] = 1;
  py(nu);
}

// Bathroom

opencupboard2 = () => {
  document.querySelector("#cupboard2").innerHTML = svg.cupboardopen2;
  state[1].cupboard = 1;
  if(state[1].comb == 0) document.querySelector(".comb").classList.remove("hidden");
  if(state[1].glasses == 0) document.querySelector(".glasses").classList.remove("hidden");
  py(op);
}

closecupboard2 = () => {
  document.querySelector("#cupboard2").innerHTML = svg.cupboard;
  state[1].cupboard = 0;
  if(state[1].comb == 0) document.querySelector(".comb").classList.add("hidden");
  document.querySelector(".glasses").classList.add("hidden");
  py(op,1);
}

dropcomb = () => {
  C.move({n:"comb",x:-38,y:67,rz: 204,sx:-.9,sy:.9});
  state[1].comb = 1;
  ac[15][1] = 1;
  setTimeout(()=>{py(ting);},300);
}

takeglasses = () => {
  document.querySelector("#glasses1").classList.add("hidden");
  k.innerHTML += "<div id=kglasses>"+svg.glasses+"</div>";
  state[1].glasses = 1;
  py(nu);
}

breakmirror = () => {
  document.querySelector("#bathmirror").innerHTML = svg.bathmirror2;
  state[1].mirror = 1;
  ac[19][1] = 1;
  py(ex);
}

// Garden

openumbrella = () => {
  document.querySelector("#umbrella1").classList.add("hidden");
  guy.innerHTML=svg.umbrella2;
  state[4].umbrella = 1;
  py(op);
}

closeumbrella = () => {
  document.querySelector("#umbrella1").classList.remove("hidden");
  hero.innerHTML=dg();
  state[4].umbrella = 0;
  py(op,1);
}

placeladder = () => {
  kladder.remove();
  document.querySelector("#ladder2").classList.remove("hidden");
  state[5].ladder = 2;
  py(nu);
}

// Tool shed

takeladder = () => {
  document.querySelector("#ladder1").classList.add("hidden");
  k.innerHTML += "<div id=kladder>"+svg.ladder+"</div>";
  state[5].ladder = 1;
  py(nu);
}

takeseed = () => {
  if(state[5].seed == 0){
    k.innerHTML += "<div id=kseed>"+svg.seed+"</div>";
    state[5].seed = 1;
    py(nu);
  }
}

takehatchet = () => {
  document.querySelector(".hatchet").classList.add("hidden");
  k.innerHTML += "<div id=khatchet>"+svg.hatchet+"</div>";
  state[5].hatchet = 1;
  py(nu);
}

takehorseshoe = () => {
  document.querySelector("#horseshoe1").classList.add("hidden");
  k.innerHTML += "<div id=khorseshoe>"+svg.horseshoe+"</div>";
  state[5].horseshoe = 1;
  py(nu);
}

// Doors

opendoor1 = () => {
  document.querySelector("#lrd1").innerHTML = svg.door2;
  document.querySelector(".bedroom.door").innerHTML = svg.door3;
  state[0].door1 = 1;
  state[2].door1 = 1;
  py(op);
}

closedoor1 = () => {
  document.querySelector("#lrd1").innerHTML = svg.door;
  document.querySelector(".bedroom.door").innerHTML = svg.door;
  state[0].door1 = 0;
  state[2].door1 = 0;
  py(op,1);
}

b2l = () => {
  document.querySelector(".bedroom.door").innerHTML = svg.door3;
  if(state[0].door1 == 0) py(op);
  setTimeout(()=>{document.querySelector("#lrd1").innerHTML = svg.door2;},100);
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},500);
  setTimeout(()=>{show(room = 2);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".bedroom.door").innerHTML = svg.door;py(op,1)},1500);
  state[0].door1 = 0;
  state[2].door1 = 0;
}

l2b = () => {
  document.querySelector("#lrd1").innerHTML = svg.door2;
  if(state[0].door1 == 0) py(op);
  setTimeout(()=>{document.querySelector(".bedroom.door").innerHTML = svg.door3;},100);
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},500);
  setTimeout(()=>{show(room = 0);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector("#lrd1").innerHTML = svg.door;py(op,1)},1500);
  state[0].door1 = 0;
  state[2].door1 = 0;
}

opendoor2 = () => {
  document.querySelector("#lrd2").innerHTML = svg.door2;
  document.querySelector("#kd").innerHTML = svg.door3;
  state[3].door2 = 1;
  state[2].door2 = 1;
  py(op);
}

closedoor2 = () => {
  document.querySelector("#lrd2").innerHTML = svg.door;
  document.querySelector("#kd").innerHTML = svg.door;
  state[3].door2 = 0;
  state[2].door2 = 0;
  py(op,1);
}

k2l = () => {
  document.querySelector("#kd").innerHTML = svg.door3;
  if(state[3].door2 == 0) py(op);
  setTimeout(()=>{document.querySelector("#lrd2").innerHTML = svg.door2;},100);
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},500);
  setTimeout(()=>{show(room = 2);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector("#kd").innerHTML = svg.door;py(op,1)},1500);
  state[3].door2 = 0;
  state[2].door2 = 0;
}

l2k = () => {
  document.querySelector("#lrd2").innerHTML = svg.door2;
  if(state[3].door2 == 0) py(op);
  setTimeout(()=>{document.querySelector("#kd").innerHTML = svg.door3;},100);
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},500);
  setTimeout(()=>{show(room = 3);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector("#lrd2").innerHTML = svg.door;py(op,1)},1500);
  state[3].door2 = 0;
  state[2].door2 = 0;
}

opendoor3 = () => {
  document.querySelector("#bathdoor").innerHTML = svg.door2;
  document.querySelector(".bathroom.door").innerHTML = svg.door3;
  state[3].door2 = 1;
  state[1].door2 = 1;
  py(op);
}

closedoor3 = () => {
  document.querySelector("#bathdoor").innerHTML = svg.door;
  document.querySelector(".bathroom.door").innerHTML = svg.door;
  state[3].door2 = 0;
  state[1].door2 = 0;
  py(op,1);
}

k2b = () => {
  document.querySelector("#bathdoor").innerHTML = svg.door2;
  if(state[3].door3 == 0) py(op);
  setTimeout(()=>{document.querySelector(".bathroom.door").innerHTML = svg.door3;},100);
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},500);
  setTimeout(()=>{show(room = 1);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector("#bathdoor").innerHTML = svg.door;py(op,1)},1500);
  state[3].door3 = 0;
  state[1].door3 = 0;
}

b2k = () => {
  document.querySelector(".bathroom.door").innerHTML = svg.door3;
  if(state[3].door3 == 0) py(op);
  setTimeout(()=>{document.querySelector("#bathdoor").innerHTML = svg.door2;},100);
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},500);
  setTimeout(()=>{show(room = 3);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".bathroom.door").innerHTML = svg.door;py(op,1)},1500);
  state[3].door3 = 0;
  state[1].door3 = 0;
}

goout = () => {
  document.querySelector(".entrance.door").innerHTML = svg.door3;
  if(state[2].door4 == 0) { py(op); }
  state[2].door4 = 1 ;
  setTimeout(()=>{document.querySelector(".exit.door").innerHTML = svg.door2;document.querySelector("#key").classList.add("hidden")},100);
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},500);
  setTimeout(()=>{show(room = 4);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".entrance.door").innerHTML = svg.door;py(op,1)},1500);
  state[4].door4 = 0;
  state[2].door4 = 0;
}

goin = () => {
  document.querySelector(".exit.door").innerHTML = svg.door2;
  if(state[2].door4 == 0) py(op);
  state[2].door4 = 1 
  setTimeout(()=>{document.querySelector(".entrance.door").innerHTML = svg.door3;document.querySelector("#key").classList.add("hidden")},100);
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},500);
  setTimeout(()=>{show(room = 2);fade.style.opacity=0},1000);
  setTimeout(()=>{document.querySelector(".exit.door").innerHTML = svg.door;if(state[2].key == 0)document.querySelector("#key").classList.remove("hidden");py(op,1)},1500);
  state[4].door4 = 0;
  state[2].door4 = 0;
}

opendoor4 = () => {
  document.querySelector(".exit.door").innerHTML = svg.door2;
  document.querySelector("#key").classList.add("hidden")
  document.querySelector(".entrance.door").innerHTML = svg.door3;
  state[4].door4 = 1;
  state[2].door4 = 1;
  py(op);
}

closedoor4 = () => {
  document.querySelector(".entrance.door").innerHTML = svg.door;
  document.querySelector(".exit.door").innerHTML = svg.door;
  if(state[2].key == 0)document.querySelector("#key").classList.remove("hidden");
  state[4].door4 = 0;
  state[2].door4 = 0;
  py(op,1);
}

entershed = () => {
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},100);
  setTimeout(()=>{show(room = 5);fade.style.opacity=0},600);
}

exitshed = () => {
  setTimeout(()=>{fade.style.opacity=1;py(step);setTimeout("py(step)",300);setTimeout("py(step)",600);},100);
  setTimeout(()=>{show(room = 4, pos=2);fade.style.opacity=0},600);
}

// View

watchout = () => {
  fade.style.opacity=1;
  setTimeout(()=>{
    root.className = "w";
    watching = 1;
    view.style.opacity = 1;
    fade.style.opacity=0;
  },500);
}

watchin = () => {
  fade.style.opacity=1;
  setTimeout(()=>{
    watching = 0;
    root.className = "";
    view.style.opacity = 0;
    fade.style.opacity=0;
  },500);
}

pointrainbow = () => {
  v5.style.top = "50%";
  setTimeout(()=>{
    v5.style.top = "120%";
    ac[23][1] = 1;
    
  },5000);
}

thunder = () => {
  thun.style.opacity = .9;
  setTimeout(()=>{thun.style.opacity = 0;}, 350);
  py(thu);
}

// setup
v5.innerHTML = svg.h;
cat.innerHTML = svg.cat;
v3.innerHTML = svg.v3;
v4.innerHTML = svg.v4;
setTimeout(()=>{root.style.display = "";},200);