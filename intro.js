introanim = 0; // 1: ready to click, 2: ready to click again

start = () => {
  intro.innerHTML = svg.eyes;
  setTimeout(()=>{eyesvg.style.transition="transform 0.5s";},50);
  setTimeout(()=>{eyesvg.style.transform="scaleX(.9)scaleY(.9)"},100);
  setTimeout(()=>{eyesvg.style.transform="scaleX(.9)scaleY(.62)"},600);
  setTimeout(()=>{eyesvg.style.transform="scaleX(.9)scaleY(1.5)"},1200);
  setTimeout(()=>{eyesvg.classList.add("hidden")},2500);
  setTimeout(()=>{intro.innerHTML = svg.bedintro + svg.legsintro + "<div id=title>";},2500);
  setTimeout(()=>{
    bedintro.style.transition="all 3s";
    legsintro.style.transition="all 3s";
  },2550);
  setTimeout(()=>{
      legsintro.style.left="5%";
      legsintro.style.top="0%";
      legsintro.style.transform="scaleX(12)scaleY(12)rotate(0deg)";
  },2600);
  setTimeout(()=>{
    bedintro.style.left="5%";
    bedintro.style.top="0%";bedintro.style.transform="scaleX(12)scaleY(12)rotate(0deg)"
  },2600);
  setTimeout(()=>{
    legsintro.style.left="-21%";
    legsintro.style.top="53%";
    legsintro.style.transform="scaleX(12)scaleY(12)rotate(-35deg)"
  },4500);
  
  setTimeout(()=>{title.innerHTML += "I ";},5100);
  setTimeout(()=>{title.innerHTML += "GOT ";},5300);
  setTimeout(()=>{title.innerHTML += "UP<br>";},5500);
  setTimeout(()=>{title.innerHTML += "ON ";},5700);
  setTimeout(()=>{title.innerHTML += "THE<br>";},5900);
  setTimeout(()=>{title.innerHTML += "WRONG ";},6100);
  setTimeout(()=>{title.innerHTML += "FOOT!";},6300);
  setTimeout(()=>{title.innerHTML += "<div class=start>CLICK TO START"; introanim++;},6500);
}

outro = () => {
  intro.classList.remove("hidden");
  intro.innerHTML = svg.bedintro + svg.legsintro + "<div id=title>";
  legsintro.style.left="-21%";
  legsintro.style.top="53%";
  legsintro.style.transform="scaleX(12)scaleY(12)rotate(-35deg)"
  bedintro.style.left="5%";
  bedintro.style.top="0%";bedintro.style.transform="scaleX(12)scaleY(12)rotate(0deg)"
  setTimeout(()=>{
    bedintro.style.transition="all 3s";
    legsintro.style.transition="all 3s";
  },50);
  
  setTimeout(()=>{
      legsintro.style.left="5%";
      legsintro.style.top="0%";
      legsintro.style.transform="scaleX(12)scaleY(12)rotate(0deg)";
  },300);  
  
  setTimeout(()=>{
      bedintro.style.transform = "scaleX(7)scaleY(7)"; 
      bedintro.style.left = "40%"; 
      bedintro.style.top = "42%"; 
      legsintro.style.transform = "scaleX(8)scaleY(8)rotate(-45deg)" 
  },2300);
  setTimeout(()=>{
      score();
  },4500);
};

score = (i,html,score) => {
  score = 0;
  html = "";
  for(i = 0; i < 26; i++){
    if(ac[i][1]){
      score++;
      html += "<br>✅ " + ac[i][0];
    }
  }
  html = "<div class=divscore><h2>SCORE: " + score + "/26</h2><p>" + html + (score < 26 ? "<p><details><summary>Reveal the rest?</summary>" : "");
  for(i = 0; i < 26; i++){
    if(ac[i][1] != 1){
      html += "<br>❌ " + ac[i][0];
    }
  }
  html += "</details>";
  html += "<br><br><h2 onclick=location=location>REPLAY?";
  intro.innerHTML = html;
}

show(room = 0);
start();
//introanim = 3;intro.classList.remove("hidden");show(room=0);// debug