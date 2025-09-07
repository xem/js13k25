drawcal = (mark, mark2) => {
  var cal = `<svg width=99 height=99 style="transform:translateY(50px) scaleX(6) scaleY(6);font:4px Arial" xmlns='http://www.w3.org/2000/svg'><rect x=4 y=3 width=92 height=79 fill="#ffffff" stroke="#000000"/><rect x=9 y=8 width=82 height=69 fill="#ffffff" stroke="#000000"/><path d="M9 18L91 18M9 30L91 30M9 42L91 42M9 53L91 53M9 64 L91 64M20 8L20 77M32 8L32 77M44 8L44 77M56 8L56 77M68 8L68 77M80 8L80 77" fill="#ffffff" stroke="#000000"/>`;
  for(calx = 0; calx < 7; calx++){  
    for(caly = 0; caly < 6; caly++){
      cal += "<text x='"+(calx * 11.8+10.5)+"' y='" + (caly * 11.3+12) + "'>" + ["Mon","Tue","Wed","Thu"," Fri"," Sat","Sun"][calx]+"</text>";
      if((caly*7+calx-5) > 0 && (caly*7+calx-5) < 32) cal += "<text x='"+(calx * 11.8+10.5+2)+"' y='" + (caly * 11.3+12+4) + "'>" + (caly*7+calx-5) + "</text>";
      if((caly*7+calx-5) > 0 && (caly*7+calx-5) < (mark?13:12)) cal += "<path d='M"+(calx * 11.8+10.5-2)+" " + (caly * 11.3+12-6) + "L"+(calx * 11.8+10.5+10)+" " + (caly * 11.3+12+7) +"' fill='#ffffff' stroke='#880000'/>";
      if(mark2){
        cal += '<circle cx=62 cy=36 r=6 fill="transparent" stroke="#880000"/>'
      }
    }
  }
  cal += '</svg>';
  return cal;
}

drawguy = () => {
  return `<svg id=guy width=89 height=89 xmlns='http://www.w3.org/2000/svg'><path d="M27 48M27 48C30 56 38 60 41 59L40 56L42 61C44 62 43 63 46 61L47 56L47 59C53 58 55 55 57 51L50 30Z" fill="#ffffff" stroke="#000000"/><path d="M25 35C8 44 7 50 29 52M62 33C79 42 80 53 59 49" fill="#`+ ["000088","008800","880000","bbbbbb"][state[0].shirt] + `" stroke="#000000"/><path d="M25 43C24 27 32 22 43 22C61 24 64 30 61 44L57 52L56 38L54 47L51 41L48 51L45 45L43 51L41 44L37 50L32 42L31 51L28 43L27 50L25 43Z" fill="#cccccc" stroke="#000000"/></svg>`
}


svg = {

  // Intro
  eyes: `<svg id=eyesvg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M0 0L198 0L198 198L0 198L0 0M77 48C73 42 60 42 54 48C63 52 71 52 77 48M45 48C35 42 28 44 24 48C30 51 39 52 45 48" fill="#000000" stroke="#000000"/></svg>`,
  
  bedintro: `<svg id=bedintro width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=0 y=22 width=99 height=45 fill="#ffffff" stroke="#000000"/><rect x=2 y=67 width=10 height=23 fill="#ffffff" stroke="#000000"/><rect x=86 y=67 width=10 height=23 fill="#ffffff" stroke="#000000"/></svg>`,
  
  legsintro: `<svg id=legsintro width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M24 0L8 9C5 12 3 12 4 17L17 56L38 50L29 19L23 18L28 18L25 15L29 19L42 13L65 31L71 26L67 31L72 30L66 32L59 61L78 69L88 24C88 20 87 17 83 16L63 -1Z" fill="#ffffff" stroke="#000000"/><path d="M17 56L9 65C3 72 8 79 15 75L36 60C40 57 39 53 36 51Z" fill="#ffffff" stroke="#000000"/><path d="M60 61C53 63 51 66 53 70L77 87C85 92 89 80 86 78L77 69Z" fill="#ffffff" stroke="#000000"/></svg>`,
  
  // Bedroom
  door: `<svg width=51 height=51 xmlns='http://www.w3.org/2000/svg'><path d="M1 5L50 5L45 50L8 50Z" fill="#eeeeee" stroke="#000000"/><circle cx=40 cy=27 r=2 fill="#ffffff" stroke="#000000"/></svg>`,
  
  door2: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M1 5L50 5L45 50L8 50Z" fill="#888888" stroke="#000000"/><path d="M1 5L1 38L8 69L8 50Z" fill="#eeeeee" stroke="#000000"/></svg>`,
  
  door3: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M1 5L50 5L45 50L8 50Z" fill="#888888" stroke="#000000"/><path d="M1 5L12 5L14 37L8 51Z" fill="#eeeeee" stroke="#000000"/></svg>`,
  
  bed: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=20 y=5 width=60 height=90 fill="#eeeeee" stroke="#000000"/><path d="M20 25L80 25M39 25L37 12L60 9L63 25M20 5L16 15L16 98L20 95L80 95L75 99L16 99M20 25L16 31" fill="#dddddd" stroke="#000000"/></svg>`,
  
  desk: `<svg width=99 height=50 xmlns='http://www.w3.org/2000/svg'><rect x=10 y=0 width=80 height=34 fill="#eeeeee" stroke="#000000"/><path d="M10 34L14 38L86 38L90 34Z" fill="#dddddd" stroke="#000000"/><path d="M14 38L26 49L30 49L20 38L23 38L30 45L30 49" fill="#dddddd" stroke="#000000"/><path d="M86 38L76 48L71 48L80 38L76 38L71 45L71 47" fill="#dddddd" stroke="#000000"/></svg>`,
  
  window: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M20 20L20 80L70 98L70 0L20 20M20 20L28 20L69 7M28 20L28 79L20 80M28 78L70 90M28 50L70 49" fill="#ffffff" stroke="#000000"/><path d="M30 22L68 11L68 47L30 48L30 22M30 52L68 51L68 87L30 76L30 52" fill="#778077" stroke="#000000"/><rect x=46 y=44 width=2 height=9 fill="#ffffff" stroke="#000000"/></svg>`,
  
  windowopen: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M20 20L20 80L70 98L70 0L20 20M20 20L28 20L69 7M28 20L28 79L20 80M28 78L70 90" fill="#ffffff" stroke="#000000"/><path d="M70 7L33 0L0 15L28 20Z" fill="#ffffff" stroke="#000000"/><path d="M70 89M70 90L26 98L0 83L29 78Z" fill="#ffffff" stroke="#000000"/><path d="M33 3L8 14L27 18L59 8Z" fill="#ffffff" stroke="#000000"/><path d="M58 90L29 80L5 84L26 95Z" fill="#ffffff" stroke="#000000"/><path d="M70 7L70 90L28 78L28 20Z" fill="#778077" stroke="#000000"/></svg>`,
  
  hanger: `<svg width=8 height=11 xmlns='http://www.w3.org/2000/svg'><rect x=3 y=2 width=2 height=6 fill="#000000" stroke="#000000"/><rect x=1 y=7 width=6 height=3 fill="#444444" stroke="#000000"/></svg>`,
  
  calendar: `<svg width=46 height=40 xmlns='http://www.w3.org/2000/svg'><path d="M0 16L38 16L45 39L10 39Z" fill="#eeeeee" stroke="#000000"/><path d="M6 16L15 2L31 16L15 2" fill="#ffffff" stroke="#000000"/><path d="M7 20L35 20L40 36L12 36L5 19M7 25L36 25M9 29L38 29M11 33L38 33M11 20L17 36M17 20L22 36M24 20L28 36M29 20L33 36" fill="#ffffff" stroke="#000000"/></svg>`,
  
  chair: `<svg width=34 height=28 xmlns='http://www.w3.org/2000/svg'><rect x=4 y=1 width=30 height=4 fill="#dddddd" stroke="#000000"/><path d="M4 5L34 5L25 8L9 8L4 5" fill="#cccccc" stroke="#000000"/><path d="M9 8L9 22L26 22L26 8" fill="#dddddd" stroke="#000000"/></svg>`,
  
  pen: `<svg width=8 height=24 xmlns='http://www.w3.org/2000/svg'><rect x=3 y=6 width=4 height=16 fill="#ffffff" stroke="#000000"/><path d="M3 6L5 1L7 6" fill="#880000" stroke="#880000"/></svg>`,
  
  scissors: `<svg width=25 height=28 xmlns='http://www.w3.org/2000/svg'><circle cx=5 cy=4 r=3 fill="#ffffff" stroke="#000000"/><circle cx=12 cy=4 r=3 fill="#ffffff" stroke="#000000"/><path d="M9 6L4 23L6 26L12 6Z" fill="#ffffff" stroke="#000000"/><path d="M7 7M5 7L8 26L11 22L6 7Z" fill="#ffffff" stroke="#000000"/></svg>`,
  
  scissorsopen: `<svg width=25 height=28 xmlns='http://www.w3.org/2000/svg'><circle cx=4 cy=4 r=3 fill="#ffffff" stroke="#000000"/><circle cx=14 cy=4 r=3 fill="#ffffff" stroke="#000000"/><path d="M12 6L1 17L1 22L14 7" fill="#ffffff" stroke="#000000"/><path d="M6 5L18 16L18 21L4 7" fill="#ffffff" stroke="#000000"/></svg>`,
  
  mirror: `<svg width=29 height=46 xmlns='http://www.w3.org/2000/svg'><ellipse cx=16 cy=29 rx=12 ry=16 fill="#dddddd" stroke="#000000"/><ellipse cx=16 cy=29 rx=9 ry=13 fill="#ffffff" stroke="#000000"/><path d="M7 18L16 2L25 18L16 2L15 11" fill="#dddddd" stroke="#000000"/></svg>`,
  
  shoes: `<svg width=24 height=27 xmlns='http://www.w3.org/2000/svg'><path d="M7 9C12 7 12 8 15 9C13 11 9 10 7 9L7 12C1 11 0 11 0 17L15 18L15 9L7 9" fill="#555" stroke="#000000"/><path d="M10 13C14 11 18 11 21 13C17 15 12 15 10 13L10 16C5 15 2 15 1 16C0 21 0 24 5 24L22 21L21 13L10 13" fill="#555" stroke="#000000"/></svg>`,
  
  blueshirt:`<svg width=34 height=28 xmlns='http://www.w3.org/2000/svg'><path d="M10 1L5 12L8 28L16 24L12 14L23 25C29 20 32 14 31 11L20 3L31 4L31 1Z" fill="#000088" stroke="#000000"/></svg>`,
  
  greenshirt:`<svg width=34 height=28 xmlns='http://www.w3.org/2000/svg'><path d="M10 1L5 12L8 28L16 24L12 14L23 25C29 20 32 14 31 11L20 3L31 4L31 1Z" fill="#008800" stroke="#000000"/></svg>`,
  
  redshirt:`<svg width=34 height=28 xmlns='http://www.w3.org/2000/svg'><path d="M10 1L5 12L8 28L16 24L12 14L23 25C29 20 32 14 31 11L20 3L31 4L31 1Z" fill="#880000" stroke="#000000"/></svg>`,
  
  
  // Bathroom 
  
  wc: `<svg width=45 height=58 xmlns='http://www.w3.org/2000/svg'><rect x=15 y=2 width=28 height=11 fill="#ffffff" stroke="#000000"/><circle cx=29 cy=7 r=2 fill="#ffffff" stroke="#000000"/><path d="M15 2L5 31L5 54C9 58 13 58 17 54L12 43L11 26L15 13Z" fill="#ffffff" stroke="#000000"/><path d="M21 55C15 55 12 55 9 51L8 31L11 25" fill="#ffffff" stroke="#000000"/><path d="M15 13L11 26L11 43C16 58 25 61 36 43L36 26L11 26L36 26L43 13Z" fill="#ffffff" stroke="#000000"/></svg>`,
  
  lavabo: `<svg width=65 height=90 xmlns='http://www.w3.org/2000/svg'><path d="M23 80L45 86L57 86L38 80L57 86C61 75 66 62 56 46L37 30Z" fill="#ccc" stroke="#000000"/><path d="M23 80L23 30L37 30C50 43 50 64 38 80L23 80" fill="#ffffff" stroke="#000000"/><path d="M26 33L26 77L36 77C48 60 45 46 36 33Z" fill="#ffffff" stroke="#000000"/><circle cx=34 cy=55 r=3 fill="#ffffff" stroke="#000000"/><path d="M21 51C23 42 30 42 31 50L28 51C28 45 25 45 22 52Z" fill="#ffffff" stroke="#000000"/></svg>`,
  
  bathmirror: `<svg width=26 height=90 xmlns='http://www.w3.org/2000/svg'><path d="M20 28L1 10L1 61L21 80Z" fill="#ffffff" stroke="#000000"/></svg>`,
  
  bathmirror2: `<svg width=26 height=90 xmlns='http://www.w3.org/2000/svg'><path d="M20 28L1 10L1 61L21 80Z" fill="#ffffff" stroke="#000000"/><path d="M1 10L1 20L8 26L8 33L12 36L13 42L11 36L6 34L7 26L1 23L1 50L7 43L1 54L1 61L12 71L7 60L13 57L13 52L14 58L9 61L15 74L21 80L20 51L13 48L20 49L20 28L12 32L18 26L1 9" fill="#ffffff" stroke="#000000"/></svg>`,
  
  cupboard: `<svg width=73 height=44 xmlns='http://www.w3.org/2000/svg'><path d="M2 21L31 44L72 44L65 21L72 44L72 30L65 1L65 21M35 20L51 44" fill="#888888" stroke="#000000"/><rect x=2 y=1 width=63 height=20 fill="#bbbbbb" stroke="#000000"/><circle cx=38 cy=34 r=1 fill="#ffffff" stroke="#000000"/><circle cx=49 cy=34 r=1 fill="#ffffff" stroke="#000000"/></svg>`,
  
  cupboardopen: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M2 21L31 44L72 44L65 21L72 44L72 30L65 1L65 21M35 20L51 44" fill="#888888" stroke="#000000"/><rect x=2 y=1 width=63 height=20 fill="#bbbbbb" stroke="#000000"/><circle cx=38 cy=34 r=1 fill="#ffffff" stroke="#000000"/><circle cx=49 cy=34 r=1 fill="#ffffff" stroke="#000000"/><path d="M2 21L3 41L31 53L31 44L2 21L31 44L31 34L15 21L31 34L65 34L31 34L31 44L65 44L65 21L65 50L72 53L72 44L65 21Z" fill="#888888" stroke="#000000"/></svg>`,
  
  cupboardopen2: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M2 21L31 44L72 44L65 21L72 44L72 30L65 1L65 21M35 20L51 44" fill="#888888" stroke="#000000"/><rect x=2 y=1 width=63 height=20 fill="#bbbbbb" stroke="#000000"/><circle cx=38 cy=34 r=1 fill="#ffffff" stroke="#000000"/><circle cx=49 cy=34 r=1 fill="#ffffff" stroke="#000000"/><path d="M2 21L3 41L31 53L31 44L2 21L31 44L31 34L15 21L31 34L65 34L31 34L31 44L65 44L65 21L65 50L72 53L72 44L65 21Z" fill="#888888" stroke="#000000"/><path d="M18 34L18 23L64 23L65 35Z" fill="#888888" stroke="#000000"/></svg>`,
  
  comb: `<svg width=17 height=12 xmlns='http://www.w3.org/2000/svg'><path d="M4 2L15 2L14 9L14 4L13 9L12 4L11 9L10 4L9 9L8 4L7 9L6 4L5 9L5 4L4 9L3 4Z" fill="#ffffff" stroke="#000000"/></svg>`,
  
  shower: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M60 30L60 89C18 88 4 70 4 30Z" fill="#ffffff" stroke="#000000"/><path d="M8 1C11 48 31 62 73 66L73 62C38 56 19 52 10 0Z" fill="#ffffff" stroke="#000000"/><path d="M7 1L4 30M73 66L60 89M24 48L14 72" fill="#ffffff" stroke="#000000"/><path d="" fill="#ffffff" stroke="#000000"/><circle cx=44 cy=22 r=10 fill="#ffffff" stroke="#000000"/><rect x=42 y=4 width=3 height=16 fill="#ffffff" stroke="#000000"/><circle cx=52 cy=40 r=3 fill="#ffffff" stroke="#000000"/></svg>`,
  
  glasses: `<svg width=25 height=8 id=glasses xmlns='http://www.w3.org/2000/svg'><ellipse cx=7 cy=4 rx=3 ry=2 fill="#ffffff" stroke="#000000"/><ellipse cx=16 cy=4 rx=3 ry=2 fill="#ffffff" stroke="#000000"/><path d="M0 1L0 4L4 4M10 4L12 4M19 4L22 4L22 1" fill="transparent" stroke="#000000"/></svg>`,
  
  
  // Living room 
  couch: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M5 5C9 3 12 3 17 5L17 81L95 81C98 86 98 91 95 95L5 95Z" fill="#aaaaaa" stroke="#000000"/><path d="M17 6L35 6C40 7 41 8 41 13L41 56L87 56C92 56 94 56 93 61L93 80L17 81Z" fill="#888888" stroke="#000000"/></svg>`,
  
  fan: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><ellipse cx=39 cy=43 rx=13 ry=6 fill="#ffffff" stroke="#000000"/><ellipse cx=40 cy=43 rx=6 ry=2 fill="#ffffff" stroke="#000000"/><path d="M36 45C21 69 61 53 43 45M46 42C38 27 32 26 41 41M37 41C26 32 14 47 34 44" fill="#ffffff" stroke="#000000"/></svg>`,
  
  table: `<svg width=65 height=74 xmlns='http://www.w3.org/2000/svg'><path d="M10 3L1 16L1 20L4 20L7 13L7 60L2 68L2 73L6 73L12 64L56 64L50 69L50 72L53 72L63 61L63 3Z" fill="#ffffff" stroke="#000000"/><path d="M10 4L10 62L2 73L10 61L63 61" fill="#ffffff" stroke="#000000"/></svg>`,
  
  hat: `<svg width=33 height=20 xmlns='http://www.w3.org/2000/svg'><ellipse cx=16 cy=14 rx=14 ry=4 fill="#555555" stroke="#000000"/><ellipse cx=16 cy=3 rx=7 ry=2 fill="#555555" stroke="#000000"/><path d="M9 3L9 13C13 15 18 15 24 13L23 3Z" fill="#555555" stroke="#000000"/></svg>`,
  
  salt: `<svg width=11 height=11 xmlns='http://www.w3.org/2000/svg'><ellipse cx=5 cy=6 rx=4 ry=4 fill="#ffffff" stroke="#000000"/><ellipse cx=5 cy=5 rx=3 ry=2 fill="#ffffff" stroke="#000000"/></svg>`,
  
  salttip: `<svg width=11 height=11 xmlns='http://www.w3.org/2000/svg'><ellipse cx=5 cy=6 rx=4 ry=4 fill="#ffffff" stroke="#000000"/><ellipse cx=5 cy=5 rx=3 ry=2 fill="#ffffff" stroke="#000000"/><path d="M9 5L9 -1L6 1L8 2L5 3L6 5L4 5L8 6" fill="#ffffff" stroke="#000000"/></svg>`,
  
  key: `<svg width=12 height=12 xmlns='http://www.w3.org/2000/svg'><path d="M5 10M5 10L5 5A3 2 0 1 1 8 5L7 6L9 7L7 8L9 10L7 10Z" fill="#ffffff" stroke="#000000"/></svg>`,
  
  // Kitchen
  
  fridge: `<svg width=56 height=77 xmlns='http://www.w3.org/2000/svg'><path d="M2 57L32 76L54 76L32 57L54 76L54 38L32 2L44 22L44 67L44 22L32 2L32 57Z" fill="#ffffff" stroke="#000000"/><rect x=41 y=54 width=2 height=7 fill="#ffffff" stroke="#000000"/><rect x=46 y=58 width=2 height=8 fill="#ffffff" stroke="#000000"/><rect x=2 y=2 width=30 height=55 fill="#ffffff" stroke="#000000"/></svg>`,
  
  //bin: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M10 9L3 19C2 27 3 33 12 33L25 27M7 13C7 23 8 31 20 29" fill="#ffffff" stroke="#000000"/><circle cx=20 cy=16 r=12 fill="#ffffff" stroke="#000000"/></svg>`,
  
  plane: `<svg width=53 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=8 y=7 width=30 height=71 fill="#ccc" stroke="#000000"/><path d="M38 7L51 36L51 83L37 77L37 7M37 45L51 61" fill="#bbb" stroke="#000000"/><path d="M8 78M8 78L28 85L51 83" fill="#bbb" stroke="#000000"/><circle cx=43 cy=47 r=1 fill="#bbb" stroke="#000000"/><circle cx=42 cy=55 r=1 fill="#ffffff" stroke="#000000"/></svg>`,
  
  bread: `<svg width=18 height=40 xmlns='http://www.w3.org/2000/svg'><path d="M6 8C4 16 4 28 6 36C8 39 11 41 14 36C16 29 17 13 14 11C9 6 8 6 6 7" fill="#ca8" stroke="#000000"/><path d="M5 13C8 15 8 15 10 13M4 18C7 20 8 21 11 19M5 25C6 27 10 28 12 25M5 32C7 34 9 35 11 33" fill="#ffffff" stroke="#000000"/></svg>`,
  
  breadr: `<svg width=18 height=40 xmlns='http://www.w3.org/2000/svg'><path d="M6 8C4 16 4 28 6 36C8 39 11 41 14 36C16 29 17 13 14 11C9 6 8 6 6 7" fill="#975" stroke="#000000"/></svg>`,
  
  plane2: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=8 y=7 width=30 height=71 fill="#ccc" stroke="#000000"/><path d="M38 7L51 36L51 83L37 77L37 7M37 45L51 61" fill="#bbb" stroke="#000000"/><path d="M8 78M8 78L28 85L51 83" fill="#bbb" stroke="#000000"/><circle cx=43 cy=47 r=1 fill="#bbb" stroke="#000000"/><circle cx=42 cy=55 r=1 fill="#ffffff" stroke="#000000"/><path d="M37 6L69 4L70 33L51 36L51 82L71 85L42 86L37 78L51 81L37 78L36 6L51 36L39 36L36 30L39 36L40 78" fill="#bbb" stroke="#000000"/></svg>`,
  
  sink: `<svg width=50 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=9 y=8 width=33 height=82 fill="#eee" stroke="#000000"/><ellipse cx=25 cy=63 rx=13 ry=23 fill="#ffffff" stroke="#000000"/><path d="M6 66C8 73 15 72 18 66L16 64C14 70 10 70 8 66Z" fill="#ddd" stroke="#000000"/><circle cx=24 cy=63 r=3 fill="#ffffff" stroke="#000000"/><path d="M42 8L46 3L20 3L10 8Z" fill="#ffffff" stroke="#000000"/><path d="M46 3L46 72L42 90" fill="#ffffff" stroke="#000000"/></svg>`,
  
  oven: `<svg width=55 height=65 xmlns='http://www.w3.org/2000/svg'><rect x=8 y=13 width=37 height=49 fill="#ffffff" stroke="#000000"/><circle cx=16 cy=23 r=5 fill="#000000" stroke="#000000"/><circle cx=33 cy=24 r=7 fill="#000000" stroke="#000000"/><circle cx=18 cy=47 r=8 fill="#000000" stroke="#000000"/><circle cx=35 cy=46 r=5 fill="#000000" stroke="#000000"/><path d="M45 13L52 24L52 56L45 62Z" fill="#ffffff" stroke="#000000"/><rect x=48 y=24 width=2 height=31 fill="#ffffff" stroke="#000000"/></svg>`,
  
  knive:`<svg width=12 height=29 xmlns='http://www.w3.org/2000/svg'><rect x=3 y=18 width=2 height=8 fill="#555" stroke="#000000"/><path d="M3 1L3 18L7 17Z" fill="#ddd" stroke="#000000"/></svg>`,
  
  broom: `<svg width=19 height=50 xmlns='http://www.w3.org/2000/svg'><rect x=5 y=38 width=12 height=5 fill="#ccc" stroke="#000000"/><path d="M8 5L9 40C11 41 10 41 12 40L12 5Z" fill="#ffffff" stroke="#000000"/><path d="M5 43L5 48L6 46L7 48L8 46L9 48L10 46L11 48L12 47L12 48L13 46L14 48L15 46L15 48L16 46L17 48L17 43Z" fill="#ddd" stroke="#000000"/><circle cx=10 cy=5 r=2 fill="#ccc" stroke="#000000"/></svg>`,
  
  broom2: `<svg width=19 height=50 xmlns='http://www.w3.org/2000/svg'><path d="M5 43L5 48L6 46L7 48L8 46L9 48L10 46L11 48L12 47L12 48L13 46L14 48L15 46L15 48L16 46L17 48L17 43Z" fill="#ddd" stroke="#000000"/><path d="M8 5L9 40C11 41 10 41 12 40L12 5Z" fill="#ffffff" stroke="#000000"/><rect x=5 y=40 width=12 height=2 fill="#ccc" stroke="#000000"/></svg>`,
  
  // Garden
  
  fence: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=8 y=2 width=4 height=95 fill="#ffffff" stroke="#000000"/><path d="M12 96L15 92L15 5L11 2Z" fill="#ffffff" stroke="#000000"/><path d="M9 5L0 0" fill="#ffffff" stroke="#000000"/><path d="M9 13L0 9" fill="#ffffff" stroke="#000000"/><path d="M9 21L0 19" fill="#ffffff" stroke="#000000"/><path d="M9 29L0 28" fill="#ffffff" stroke="#000000"/><path d="M9 37L0 37" fill="#ffffff" stroke="#000000"/><path d="M10 45L0 46" fill="#ffffff" stroke="#000000"/><path d="M9 53L0 55" fill="#ffffff" stroke="#000000"/><path d="M9 59L0 65" fill="#ffffff" stroke="#000000"/><path d="M10 67L0 77" fill="#ffffff" stroke="#000000"/><path d="M9 78L0 88" fill="#ffffff" stroke="#000000"/><path d="M10 88L2 98" fill="#ffffff" stroke="#000000"/><path d="M4 1L4 98" fill="#ffffff" stroke="#000000"/></svg>`,
  
  gate: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=8 y=2 width=4 height=95 fill="#ffffff" stroke="#000000"/><path d="M12 96L15 92L15 5L11 2Z" fill="#ffffff" stroke="#000000"/><path d="M9 5L0 0" fill="#ffffff" stroke="#000000"/><path d="M9 13L0 9" fill="#ffffff" stroke="#000000"/><path d="M9 21L0 19" fill="#ffffff" stroke="#000000"/><path d="M9 29L0 28" fill="#ffffff" stroke="#000000"/><path d="M9 37L0 37" fill="#ffffff" stroke="#000000"/><path d="M10 45L0 46" fill="#ffffff" stroke="#000000"/><path d="M9 53L0 55" fill="#ffffff" stroke="#000000"/><path d="M9 59L0 65" fill="#ffffff" stroke="#000000"/><path d="M10 67L0 77" fill="#ffffff" stroke="#000000"/><path d="M9 78L0 88" fill="#ffffff" stroke="#000000"/><path d="M10 88L2 98" fill="#ffffff" stroke="#000000"/><path d="M4 1L4 98" fill="#ffffff" stroke="#000000"/><rect x=64 y=3 width=4 height=25 fill="#ffffff" stroke="#000000"/><rect x=62 y=66 width=4 height=26 fill="#ffffff" stroke="#000000"/><path d="M68 3L72 18L72 35L68 27Z" fill="#ffffff" stroke="#000000"/><path d="M66 65M66 65" fill="#ffffff" stroke="#000000"/><path d="M66 66L70 59L70 79L66 92" fill="#ffffff" stroke="#000000"/><path d="M63 89L56 95" fill="#ffffff" stroke="#000000"/><path d="M63 79L55 84" fill="#ffffff" stroke="#000000"/><path d="M64 69L54 75" fill="#ffffff" stroke="#000000"/><path d="M66 6L57 0" fill="#ffffff" stroke="#000000"/><path d="M65 14L56 9" fill="#ffffff" stroke="#000000"/><path d="M65 25L55 22" fill="#ffffff" stroke="#000000"/><path d="M69 57L51 76C36 88 24 11 52 21L71 34M61 1L61 25M59 68L60 95M70 39L46 26M69 43L43 36M69 48L42 50M69 53L43 62M66 31L66 61M61 28L62 64M54 23L56 70M47 20L49 77" fill="#ffffff" stroke="#000000"/></svg>`,
  
  tree: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M21 48C18 28 19 22 27 37M24 31C25 16 40 14 44 22C49 11 68 13 62 22C77 19 85 27 82 37C94 38 97 52 83 56C90 65 89 79 66 72C69 84 53 92 47 82C35 90 12 84 22 71C8 62 10 44 20 48" fill="#ffffff" stroke="#000000"/><path d="M65 37C75 35 82 48 73 52M27 50C19 48 15 54 24 61M18 68L9 76L5 74L9 79L4 84L12 82L14 89L16 82L23 87L20 81" fill="#ffffff" stroke="#000000"/></svg>`,
  
  ladder: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M38 23L53 23M36 19L55 19M33 14L59 14M30 9L63 9M26 4L66 4M40 26L24 1M51 25L68 1" fill="#ffffff" stroke="#000000"/></svg>`,
  
  bucket: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M31 37L35 20C42 13 54 12 60 20L63 41" fill="#ffffff" stroke="#000000"/><path d="M31 38C39 19 54 16 61 38" fill="#ffffff" stroke="#000000"/><circle cx=47 cy=41 r=16 fill="#ffffff" stroke="#000000"/></svg>`,
}