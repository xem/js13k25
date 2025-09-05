// Rooms states
state = [
  
  // 0: Bedroom
  {
    door1: 0,  // bathroom, closed
    door2: 0,  // living room, closed
    cupboard: 0, // closed
    calendar1: 0, // on wall
    calendar2: 0, // marked
    bed: 0, // angle
    scissors: 0, // 1 = open, 2 = taken
    pen: 0, // take
    shirt: 3, // blue, red, green, default
    door: 0, // living room, closed
    window: 0, // closed
  },
  
  // 1: bathroom
  {},
  
  // 2: living room
  {    
    window: 0, // closed
    door1: 0, // bedroom, closed
    door2: 0, // kitchen, closed
    door3: 0, // main, closed
    chair1: 0, // top, pushed
    chair2: 0, // top, pushed
    hat: 0, // take
    mirror: 0, // take
  },
]

sit = 0;