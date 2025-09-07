// customized css3dframework

C = {
p: 0,
c: 0,
o: {},
$: t => self[t],
camX: 0,
camY: 0,
camZ: 0,

// initialize an object's properties
init: t => {
  t.css||(t.css=""),
  t.txt||(t.txt=""),
  t.on=``;
  t.cl=t.cl?`onclick='${t.cl}'`:"";
  t.html||(t.html=""),
  t.g||(t.g="scene"),
  t.o||(t.o="center center"),
  t.w||(t.w=0),
  t.h||(t.h=0),
  t.x||(t.x=0),
  t.y||(t.y=0),
  t.z||(t.z=0),
  t.rx||(t.rx=0),
  t.ry||(t.ry=0),
  t.rz||(t.rz=0),
  t.sx||(t.sx=1),
  t.sy||(t.sy=1),
  t.sz||(t.sz=1),
  C.o[t.n]=t
},

// group of objects
group: t => { 
  t.d||t.d===0||(t.d=t.h),
  C.init(t),
  C.$(t.g).innerHTML+=`<div id="${t.n}"class="g ${t.css}"style="position:absolute;width:${t.w}px;height:${t.d}px;transform:${C.tr(t)}">`
},

// plane
plane: t => {
  t.n||(t.n=`p${C.p++}`),
  C.init(t),
  C.$(t.g).insertAdjacentHTML("beforeEnd",`<div id="${t.n}"class="${t.css}"style="position:absolute;width:${t.w}px;height:${t.h}px;background:${t.b};transform-origin:${t.o};transform:${C.tr(t)}"onmouseover="${t.on||''}"${t.cl}>${t.html}`)
},

// Cube
cube: (t,out,shed) => {
  t.n||(t.n=`cube${C.c++}`),
  C.init(t),
  C.group(t),
  C.plane({g:t.n,x:t.w/2,y:t.w,w:t.w,h:t.d,b:t.b,css:"floor"}),
  C.plane({g:t.n,y:t.d/2,w:t.d,h:t.h,b:t.b1||t.b,rx:-90,ry:90,o:"bottom",css:shed?"tool shed" : "east wall"}),
  C.plane({g:t.n,x:t.w,y:t.d/2,w:t.d,h:t.h,b:t.b2||t.b,rx:-90,ry:90,o:"bottom",css:shed?"tool shed" : "west wall"}),
  C.plane({g:t.n,x:t.w/2,y:t.d,w:t.w,h:t.h,b:t.b1||t.b,rx:-90,o:"bottom",css:shed?"tool shed" : out?"house":"south wall"}),
  C.plane({g:t.n,x:t.w/2,y:0,w:t.w,h:t.h,b:t.b2||t.b,rx:-90,o:"bottom",css:shed?"tool shed" : "north wall"})
},

// move an object
move: t => {
  if(t.n){
   var r=C.$(t.n),
   n=C.o[t.n || t.css];
   (t.x||0===t.x)&&(n.x=t.x),
   (t.y||0===t.y)&&(n.y=t.y),
   (t.z||0===t.z)&&(n.z=t.z),
   (t.rx||0===t.rx)&&(n.rx=t.rx),
   (t.ry||0===t.ry)&&(n.ry=t.ry),
   (t.rz||0===t.rz)&&(n.rz=t.rz),
   (t.sx||0===t.sx)&&(n.sx=t.sx),
   (t.sy||0===t.sy)&&(n.sy=t.sy),
   C.o[t.n]=n,
   r.style.transform=C.tr(n)
 }
},

// Move the camera
camera: t => {
  t&&(t.x||0===t.x)&&(C.camX=t.x),
  t&&(t.y||0===t.y)&&(C.camY=t.y),
  t&&(t.z||0===t.z)&&(C.camZ=t.z),
  scene.style.transform=`translateX(${-C.camX}px)translateY(${-C.camY}px)translateZ(${-C.camZ}px)`;
},

// CSS3D transform string
tr: t => `translateX(-50%)translateY(0%)translateX(${t.x}px)translateY(${t.y}px)translateZ(${t.z}px)rotateX(${t.rx}deg)rotateY(${t.ry}deg)rotateZ(${t.rz}deg)scaleX(${t.sx})scaleY(${t.sy})scaleZ(${t.sz})`

}