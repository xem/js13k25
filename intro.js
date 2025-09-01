start = () => {

  intro.innerHTML = svg.eyes;
  setTimeout(()=>{eyesvg.style.transition="transform 0.5s";},50);
  setTimeout(()=>{eyesvg.style.transform="scaleX(9) scaleY(9)"},100);
  setTimeout(()=>{eyesvg.style.transform="scaleX(9) scaleY(6.2)"},600);
  setTimeout(()=>{eyesvg.style.transform="scaleX(9) scaleY(15)"},1200);
  setTimeout(()=>{eyesvg.style.display = "none"},2500);
  
  setTimeout(()=>{intro.innerHTML = svg.bedintro + svg.legsintro + "<div id=title>";},2500);
  setTimeout(()=>{
    bedintro.style.transition="all 3s";
    legsintro.style.transition="all 3s";
  },2550);
  setTimeout(()=>{
      legsintro.style.left="5%";
      legsintro.style.top="0%";
      legsintro.style.transform="scaleX(12) scaleY(12)rotate(0deg)";
  },2600);
  setTimeout(()=>{
    bedintro.style.left="5%";
    bedintro.style.top="0%";bedintro.style.transform="scaleX(12) scaleY(12)rotate(0deg)"
  },2600);
  setTimeout(()=>{
    legsintro.style.left="-21%";
    legsintro.style.top="53%";
    legsintro.style.transform="scaleX(12) scaleY(12)rotate(-35deg)"
  },4500);
  
  setTimeout(()=>{title.innerHTML += "I ";},6100);
  setTimeout(()=>{title.innerHTML += "GOT ";},6300);
  setTimeout(()=>{title.innerHTML += "UP<br>";},6500);
  setTimeout(()=>{title.innerHTML += "ON ";},6700);
  setTimeout(()=>{title.innerHTML += "THE<br>";},6900);
  setTimeout(()=>{title.innerHTML += "WRONG ";},7100);
  setTimeout(()=>{title.innerHTML += "FOOT!";},7300);
  setTimeout(()=>{title.innerHTML += "<div class=start>CLICK TO START";},7500);
  setTimeout(()=>{
    onclick = () => { intro.remove(); }
  },7500);
}

intro.remove();//start();