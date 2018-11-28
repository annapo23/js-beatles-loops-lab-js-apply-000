function theBeatlesPlay(musicians, instruments) {
let array = [ ];
for(let i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + " plays " + instruments[i]);
} 
return array;
}

function johnLennonFacts(facts) {
  let array = [ ];
  let i = 0
  while(i < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
}
return array;
}

function iLoveTheBeatles(x) {
  let array = [ ];
  let i = 0;
  do {
    array = array + "I love the Beatles!"; 
    i++;
  }
  while (i < 15);  
  return array;
}
