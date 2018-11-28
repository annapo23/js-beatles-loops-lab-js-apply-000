function theBeatlesPlay(musicians, instruments) {
let array = [ ];
for(let i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + " plays " + instruments[i]);
} 
return array;
}

function johnLennonFacts(facts) {
  let i = 0
  while(i < facts.length) {
    return facts[i] + "!!!";
}
}

function iLoveTheBeatles(x) {
  let string = [ ];
  let i = 0;
  do {
    string = string + i; i++;
  }
  while (i < 15)  {return "I love the Beatles!";
  }
}
