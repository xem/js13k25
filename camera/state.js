// Rooms states
state = [
  
  // 0: Bedroom
  {
    door1: 0,// living room, closed
    cupboard: 0, // closed
    calendar1: 0, // on wall
    calendar2: 0, // marked
    bed: 0, // angle
    scissors: 0, // 1: open, 2: taken
    pen: 0, // take
    shirt: 3, // blue, red, green, default
    window: 0, // closed
    shoes: 0, // 1: k, 2: on table
    bird: 0, // 1: here
    mirror: 0, // 1: hanged
    horseshoe: 0, // 1: hanged
  },
  
  // 1: bathroom
  {
    door3: 0, // kitchen, closed
    cupboard: 0, // 1: open
    comb: 0, // 0: in cupboard, 1: dropped,
    glasses: 0, // 1: taken, 2: on table
    mirror: 0, // 1: broken
  },
  
  // 2: living room
  {    
    window: 0, // closed
    door1: 0, // bedroom, closed
    door2: 0, // kitchen, closed
    door4: 0, // main, closed
    chair1: 0, // top, pushed
    chair2: 0, // top, pushed
    hat: 0, // 1: take, 2: on bed
    key: 0, // 1: take, 2: on table
    salt: 0, // tip
    bird: 0, // 1: here
  },
  
  // 3: Kitchen
  {
    door2: 0, // living room, closed
    door3: 0, // bathroom, closed
    bread: 0, // 0: in kitchen, 1: in k 2: on table, 3: turned 
    mirror: 0, // 1: take, 2: hang in bedroom 
    knive: 0, // 1: take, 2: put on other
    broom: 0, // 1: returned
  },
  
  // 4: garden
  {
    umbrella: 0,
    door4: 0,
  },
  
  // 5: Tool shed
  {
    ladder: 0, // 1: taken, 2: placed against house
    seed: 0,  // 1: taken, 2: on bedroom, 3: on living room, 4: eaten
    hatchet: 0,  // 1: taken
    horseshoe: 0, // 1: taken, 2: hung
  },
]

sit = 0;
watching = 0;

// ac
ac = [
  ["get up on the left foot", 1],  // 0 ok
  ["set the date to friday 13th"],  // 1 ok
  ["wear green clothes"],  // 2 ok
  ["sleep head north"],  // 3 ok
  ["leave scissors open"],  // 4 ok
  ["sleep with door open"],  // 5 ok
  ["tip a salt shaker"],  // 6 ok
  ["put hat on bed"],  // 7 ok
  ["put bread upside down"],  // 8 ok
  ["sit on table corner"],  // 9 ok
  ["put shoes on table"],  // 10 ok
  ["cross knives"],  // 11 ok
  ["put broom upside down"],  // 12 ok
  ["put two mirrors face to face"],  // 13 ok
  ["put glasses on table"],  // 14 ok
  ["drop a haircomb"],  // 15 ok
  ["put keys on table"],  // 16 ok
  ["open an umbrella inside"],  // 17 ok
  ["walk on a crack"],  // 18 ok
  ["break a mirror"],  // 19 ok
  ["hang horseshoe pointing down"],  // 20 ok
  ["walk under a ladder"],  // 21 ok
  ["bird looks inside from window"],  // 22 ok
  ["point to a rainbow"],  // 23 ok
  ["cross a black cat"],  // 24 ok
  ["walk under a tree during thunder"],  // 25 ok
];