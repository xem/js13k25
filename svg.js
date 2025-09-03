drawcal = (mark, mark2) => {
  var cal = `<svg width=99 height=99 style="transform:translateX(50px) translateY(50px) scaleX(6) scaleY(6);font:4px Arial" xmlns='http://www.w3.org/2000/svg'><rect x=4 y=3 width=92 height=79 fill="#ffffff" stroke="#000000"/><rect x=9 y=8 width=82 height=69 fill="#ffffff" stroke="#000000"/><path d="M9 18L91 18M9 30L91 30M9 42L91 42M9 53L91 53M9 64 L91 64M20 8L20 77M32 8L32 77M44 8L44 77M56 8L56 77M68 8L68 77M80 8L80 77" fill="#ffffff" stroke="#000000"/>`;
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


svg = {

  eyes: `<svg id=eyesvg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M0 0L198 0L198 198L0 198L0 0M77 48C73 42 60 42 54 48C63 52 71 52 77 48M45 48C35 42 28 44 24 48C30 51 39 52 45 48" fill="#000000" stroke="#000000"/></svg>`,
  
  bedintro: `<svg id=bedintro width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=0 y=22 width=99 height=45 fill="#ffffff" stroke="#000000"/><rect x=2 y=67 width=10 height=23 fill="#ffffff" stroke="#000000"/><rect x=86 y=67 width=10 height=23 fill="#ffffff" stroke="#000000"/></svg>`,
  
  legsintro: `<svg id=legsintro width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M24 0L8 9C5 12 3 12 4 17L17 56L38 50L29 19L23 18L28 18L25 15L29 19L42 13L65 31L71 26L67 31L72 30L66 32L59 61L78 69L88 24C88 20 87 17 83 16L63 -1Z" fill="#ffffff" stroke="#000000"/><path d="M17 56L9 65C3 72 8 79 15 75L36 60C40 57 39 53 36 51Z" fill="#ffffff" stroke="#000000"/><path d="M60 61C53 63 51 66 53 70L77 87C85 92 89 80 86 78L77 69Z" fill="#ffffff" stroke="#000000"/></svg>`,
  
  door: `<svg width=51 height=51 xmlns='http://www.w3.org/2000/svg'><path d="M1 5L50 5L45 50L8 50Z" fill="#eeeeee" stroke="#000000"/><circle cx=40 cy=27 r=2 fill="#ffffff" stroke="#000000"/></svg>`,
  
  bed: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=20 y=5 width=60 height=90 fill="#eeeeee" stroke="#000000"/><path d="M20 25L80 25M39 25L37 12L60 9L63 25M20 5L16 15L16 98L20 95L80 95L75 99L16 99M20 25L16 31" fill="#dddddd" stroke="#000000"/></svg>`,
  
  desk: `<svg width=99 height=50 xmlns='http://www.w3.org/2000/svg'><rect x=10 y=0 width=80 height=34 fill="#eeeeee" stroke="#000000"/><path d="M10 34L14 38L86 38L90 34Z" fill="#dddddd" stroke="#000000"/><path d="M14 38L26 49L30 49L20 38L23 38L30 45L30 49" fill="#dddddd" stroke="#000000"/><path d="M86 38L76 48L71 48L80 38L76 38L71 45L71 47" fill="#dddddd" stroke="#000000"/></svg>`,
  
  window: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M20 20L20 80L70 98L70 0L20 20M20 20L28 20L69 7M28 20L28 79L20 80M28 78L70 90M28 50L70 49" fill="#ffffff" stroke="#000000"/><path d="M30 22L68 11L68 47L30 48L30 22M30 52L68 51L68 87L30 76L30 52" fill="#778077" stroke="#000000"/><rect x=46 y=44 width=2 height=9 fill="#ffffff" stroke="#000000"/></svg>`,
  
  windowopen: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M20 20L20 80L70 98L70 0L20 20M20 20L28 20L69 7M28 20L28 79L20 80M28 78L70 90" fill="#ffffff" stroke="#000000"/><path d="M70 7L33 0L0 15L28 20Z" fill="#ffffff" stroke="#000000"/><path d="M70 89M70 90L26 98L0 83L29 78Z" fill="#ffffff" stroke="#000000"/><path d="M33 3L8 14L27 18L59 8Z" fill="#ffffff" stroke="#000000"/><path d="M58 90L29 80L5 84L26 95Z" fill="#ffffff" stroke="#000000"/><path d="M70 7L70 90L28 78L28 20Z" fill="#778077" stroke="#000000"/></svg>`,
  
  hanger: `<svg width=8 height=11 xmlns='http://www.w3.org/2000/svg'><rect x=3 y=2 width=2 height=6 fill="#000000" stroke="#000000"/><rect x=1 y=7 width=6 height=3 fill="#ffffff" stroke="#000000"/></svg>`,
  
  calendar: `<svg width=46 height=40 xmlns='http://www.w3.org/2000/svg'><path d="M0 16L38 16L45 39L10 39Z" fill="#eeeeee" stroke="#000000"/><path d="M6 16L15 2L31 16L15 2" fill="#ffffff" stroke="#000000"/><path d="M7 20L35 20L40 36L12 36L5 19M7 25L36 25M9 29L38 29M11 33L38 33M11 20L17 36M17 20L22 36M24 20L28 36M29 20L33 36" fill="#ffffff" stroke="#000000"/></svg>`,
  
  chair: `<svg width=34 height=28 xmlns='http://www.w3.org/2000/svg'><rect x=4 y=1 width=30 height=4 fill="#dddddd" stroke="#000000"/><path d="M4 5L34 5L25 8L9 8L4 5" fill="#cccccc" stroke="#000000"/><path d="M9 8L9 22L26 22L26 8" fill="#dddddd" stroke="#000000"/></svg>`,
  
  pen: `<svg width=8 height=24 xmlns='http://www.w3.org/2000/svg'><rect x=3 y=6 width=3 height=16 fill="#ffffff" stroke="#000000"/><path d="M3 6L4 1L6 6" fill="#880000" stroke="#000000"/></svg>`,
  
  scissors: `<svg width=25 height=28 xmlns='http://www.w3.org/2000/svg'><circle cx=5 cy=4 r=3 fill="#ffffff" stroke="#000000"/><circle cx=12 cy=4 r=3 fill="#ffffff" stroke="#000000"/><path d="M9 6L4 23L6 26L12 6Z" fill="#ffffff" stroke="#000000"/><path d="M7 7M5 7L8 26L11 22L6 7Z" fill="#ffffff" stroke="#000000"/></svg>`,
  
  scissorsopen: `<svg width=25 height=28 xmlns='http://www.w3.org/2000/svg'><circle cx=4 cy=4 r=3 fill="#ffffff" stroke="#000000"/><circle cx=14 cy=4 r=3 fill="#ffffff" stroke="#000000"/><path d="M12 6L1 17L1 22L14 7" fill="#ffffff" stroke="#000000"/><path d="M6 5L18 16L18 21L4 7" fill="#ffffff" stroke="#000000"/></svg>`,
  
  wc: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=40 y=10 width=40 height=19 fill="#ffffff" stroke="#000000"/><path d="M40 10L27 48L27 85C47 92 53 92 66 85L66 48L26 48L66 48L80 29L40 29L33 49L33 86" fill="#ffffff" stroke="#000000"/><circle cx=60 cy=19 r=3 fill="#ffffff" stroke="#000000"/></svg>`,
  
  lavabo: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M5 10L5 75L20 80L20 30L5 10M23 80L23 30L37 30C50 46 51 63 37 79L23 80M27 34L27 76L34 75C47 50 41 48 35 34L26 34M20 47C23 41 27 40 31 45L31 49C24 45 25 44 20 51 M23 80L44 86L52 86L52 46L37 30" fill="#ffffff" stroke="#000000"/></svg>`,
  
  cupboard: `<svg width=73 height=44 xmlns='http://www.w3.org/2000/svg'><path d="M2 21L31 44L72 44L65 21L72 44L72 30L65 1L65 21M35 20L51 44" fill="#888888" stroke="#000000"/><rect x=2 y=1 width=63 height=20 fill="#bbbbbb" stroke="#000000"/><circle cx=38 cy=34 r=1 fill="#ffffff" stroke="#000000"/><circle cx=49 cy=34 r=1 fill="#ffffff" stroke="#000000"/></svg>`,
  
  cupboardopen: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M2 21L31 44L72 44L65 21L72 44L72 30L65 1L65 21M35 20L51 44" fill="#888888" stroke="#000000"/><rect x=2 y=1 width=63 height=20 fill="#bbbbbb" stroke="#000000"/><circle cx=38 cy=34 r=1 fill="#ffffff" stroke="#000000"/><circle cx=49 cy=34 r=1 fill="#ffffff" stroke="#000000"/><path d="M2 21L3 41L31 53L31 44L2 21L31 44L31 34L15 21L31 34L65 34L31 34L31 44L65 44L65 21L65 50L72 53L72 44L65 21Z" fill="#888888" stroke="#000000"/></svg>`,
  
  shower: `<svg width=199 height=199 xmlns='http://www.w3.org/2000/svg'><path d="M11 33L11 88L72 88C79 35 46 21 10 33" fill="#ffffff" stroke="#000000"/><circle cx=17 cy=77 r=3 fill="#ffffff" stroke="#000000"/><circle cx=35 cy=104 r=8 fill="#ffffff" stroke="#000000"/><rect x=34 y=104 width=4 height=16 fill="#ffffff" stroke="#000000"/><path d="M2 1L2 8C63 8 89 23 90 98L96 98C87 11 70 12 2 0M4 8L11 33M89 98M90 98L71 87M70 25L58 38" fill="#ffffff" stroke="#000000"/></svg>`,
  
  couch: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M5 5L5 95L95 95C98 91 98 84 95 81L17 81L17 4C9 1 8 2 4 5M17 7L36 7C41 9 41 8 40 13L40 56L89 56C92 56 93 57 93 60L93 81" fill="#ffffff" stroke="#000000"/></svg>`,
  
  fan: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><ellipse cx=39 cy=43 rx=13 ry=6 fill="#ffffff" stroke="#000000"/><ellipse cx=40 cy=43 rx=6 ry=2 fill="#ffffff" stroke="#000000"/><path d="M36 45C21 69 61 53 43 45M46 42C38 27 32 26 41 41M37 41C26 32 14 47 34 44" fill="#ffffff" stroke="#000000"/></svg>`,
  
  table: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=7 y=6 width=58 height=59 fill="#ffffff" stroke="#000000"/><path d="M65 65L54 70L50 70L58 66L9 66L5 72L2 70L6 64L6 11L4 21L3 16L7 5" fill="#ffffff" stroke="#000000"/></svg>`,
  
  hat: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><ellipse cx=50 cy=49 rx=15 ry=4 fill="#ffffff" stroke="#000000"/><path d="M43 48C46 49 52 50 56 48L56 34C52 36 47 36 43 34L43 48M43 33C47 31 52 31 56 33" fill="#ffffff" stroke="#000000"/></svg>`,
  
  salt: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><ellipse cx=27 cy=33 rx=4 ry=4 fill="#ffffff" stroke="#000000"/><ellipse cx=27 cy=32 rx=3 ry=2 fill="#ffffff" stroke="#000000"/></svg>`,
  
  fridge: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=64 y=7 width=32 height=53 fill="#ffffff" stroke="#000000"/><path d="M64 7L44 38L44 77L64 60Z" fill="#ffffff" stroke="#000000"/><path d="M44 77L70 77L96 60L64 60Z" fill="#ffffff" stroke="#000000"/><path d="M50 28L51 71" fill="#ffffff" stroke="#000000"/><rect x=54 y=58 width=2 height=6 fill="#ffffff" stroke="#000000"/><rect x=47 y=63 width=2 height=7 fill="#ffffff" stroke="#000000"/></svg>`,
  
  bin: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M10 9L3 19C2 27 3 33 12 33L25 27M7 13C7 23 8 31 20 29" fill="#ffffff" stroke="#000000"/><circle cx=20 cy=16 r=12 fill="#ffffff" stroke="#000000"/></svg>`,
  
  plane: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=8 y=7 width=30 height=71 fill="#ffffff" stroke="#000000"/><path d="M38 7L51 36L51 83L37 77L37 7M37 45L51 61" fill="#ffffff" stroke="#000000"/><path d="M8 78M8 78L28 85L51 83" fill="#ffffff" stroke="#000000"/><circle cx=43 cy=47 r=1 fill="#ffffff" stroke="#000000"/><circle cx=42 cy=55 r=1 fill="#ffffff" stroke="#000000"/></svg>`,
  
  sink: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=9 y=8 width=33 height=82 fill="#ffffff" stroke="#000000"/><ellipse cx=25 cy=63 rx=13 ry=23 fill="#ffffff" stroke="#000000"/><path d="M6 63L5 60C5 51 15 47 24 57L20 59C8 53 9 53 8 63Z" fill="#ffffff" stroke="#000000"/><circle cx=24 cy=63 r=3 fill="#ffffff" stroke="#000000"/><path d="M42 8L46 3L20 3L10 8Z" fill="#ffffff" stroke="#000000"/><path d="M46 3L46 72L42 90" fill="#ffffff" stroke="#000000"/></svg>`,
  
  oven: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=8 y=13 width=37 height=49 fill="#ffffff" stroke="#000000"/><circle cx=16 cy=23 r=5 fill="#000000" stroke="#000000"/><circle cx=33 cy=24 r=7 fill="#000000" stroke="#000000"/><circle cx=18 cy=47 r=8 fill="#000000" stroke="#000000"/><circle cx=35 cy=46 r=5 fill="#000000" stroke="#000000"/><path d="M45 13L52 24L52 56L45 62Z" fill="#ffffff" stroke="#000000"/><rect x=48 y=24 width=2 height=31 fill="#ffffff" stroke="#000000"/></svg>`,
  
  fence: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=8 y=2 width=4 height=95 fill="#ffffff" stroke="#000000"/><path d="M12 96L15 92L15 5L11 2Z" fill="#ffffff" stroke="#000000"/><path d="M9 5L0 0" fill="#ffffff" stroke="#000000"/><path d="M9 13L0 9" fill="#ffffff" stroke="#000000"/><path d="M9 21L0 19" fill="#ffffff" stroke="#000000"/><path d="M9 29L0 28" fill="#ffffff" stroke="#000000"/><path d="M9 37L0 37" fill="#ffffff" stroke="#000000"/><path d="M10 45L0 46" fill="#ffffff" stroke="#000000"/><path d="M9 53L0 55" fill="#ffffff" stroke="#000000"/><path d="M9 59L0 65" fill="#ffffff" stroke="#000000"/><path d="M10 67L0 77" fill="#ffffff" stroke="#000000"/><path d="M9 78L0 88" fill="#ffffff" stroke="#000000"/><path d="M10 88L2 98" fill="#ffffff" stroke="#000000"/><path d="M4 1L4 98" fill="#ffffff" stroke="#000000"/></svg>`,
  
  gate: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><rect x=8 y=2 width=4 height=95 fill="#ffffff" stroke="#000000"/><path d="M12 96L15 92L15 5L11 2Z" fill="#ffffff" stroke="#000000"/><path d="M9 5L0 0" fill="#ffffff" stroke="#000000"/><path d="M9 13L0 9" fill="#ffffff" stroke="#000000"/><path d="M9 21L0 19" fill="#ffffff" stroke="#000000"/><path d="M9 29L0 28" fill="#ffffff" stroke="#000000"/><path d="M9 37L0 37" fill="#ffffff" stroke="#000000"/><path d="M10 45L0 46" fill="#ffffff" stroke="#000000"/><path d="M9 53L0 55" fill="#ffffff" stroke="#000000"/><path d="M9 59L0 65" fill="#ffffff" stroke="#000000"/><path d="M10 67L0 77" fill="#ffffff" stroke="#000000"/><path d="M9 78L0 88" fill="#ffffff" stroke="#000000"/><path d="M10 88L2 98" fill="#ffffff" stroke="#000000"/><path d="M4 1L4 98" fill="#ffffff" stroke="#000000"/><rect x=64 y=3 width=4 height=25 fill="#ffffff" stroke="#000000"/><rect x=62 y=66 width=4 height=26 fill="#ffffff" stroke="#000000"/><path d="M68 3L72 18L72 35L68 27Z" fill="#ffffff" stroke="#000000"/><path d="M66 65M66 65" fill="#ffffff" stroke="#000000"/><path d="M66 66L70 59L70 79L66 92" fill="#ffffff" stroke="#000000"/><path d="M63 89L56 95" fill="#ffffff" stroke="#000000"/><path d="M63 79L55 84" fill="#ffffff" stroke="#000000"/><path d="M64 69L54 75" fill="#ffffff" stroke="#000000"/><path d="M66 6L57 0" fill="#ffffff" stroke="#000000"/><path d="M65 14L56 9" fill="#ffffff" stroke="#000000"/><path d="M65 25L55 22" fill="#ffffff" stroke="#000000"/><path d="M69 57L51 76C36 88 24 11 52 21L71 34M61 1L61 25M59 68L60 95M70 39L46 26M69 43L43 36M69 48L42 50M69 53L43 62M66 31L66 61M61 28L62 64M54 23L56 70M47 20L49 77" fill="#ffffff" stroke="#000000"/></svg>`,
  
  tree: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M21 48C18 28 19 22 27 37M24 31C25 16 40 14 44 22C49 11 68 13 62 22C77 19 85 27 82 37C94 38 97 52 83 56C90 65 89 79 66 72C69 84 53 92 47 82C35 90 12 84 22 71C8 62 10 44 20 48" fill="#ffffff" stroke="#000000"/><path d="M65 37C75 35 82 48 73 52M27 50C19 48 15 54 24 61M18 68L9 76L5 74L9 79L4 84L12 82L14 89L16 82L23 87L20 81" fill="#ffffff" stroke="#000000"/></svg>`,
  
  ladder: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M38 23L53 23M36 19L55 19M33 14L59 14M30 9L63 9M26 4L66 4M40 26L24 1M51 25L68 1" fill="#ffffff" stroke="#000000"/></svg>`,
  
  bucket: `<svg width=99 height=99 xmlns='http://www.w3.org/2000/svg'><path d="M31 37L35 20C42 13 54 12 60 20L63 41" fill="#ffffff" stroke="#000000"/><path d="M31 38C39 19 54 16 61 38" fill="#ffffff" stroke="#000000"/><circle cx=47 cy=41 r=16 fill="#ffffff" stroke="#000000"/></svg>`,
  
  guy: `<svg id=guy width=89 height=89 xmlns='http://www.w3.org/2000/svg'><path d="M27 48M27 48C30 56 38 60 41 59L40 56L42 61C44 62 43 63 46 61L47 56L47 59C53 58 55 55 57 51L50 30Z" fill="#ffffff" stroke="#000000"/><path d="M25 35C8 44 7 50 29 52M62 33C79 42 80 53 59 49" fill="#dddddd" stroke="#000000"/><path d="M25 43C24 27 32 22 43 22C61 24 64 30 61 44L57 52L56 38L54 47L51 41L48 51L45 45L43 51L41 44L37 50L32 42L31 51L28 43L27 50L25 43Z" fill="#cccccc" stroke="#000000"/></svg>`,
}