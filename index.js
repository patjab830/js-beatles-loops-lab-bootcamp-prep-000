function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for ( var i = 0; i < musicians.length; i++ ) {
    emptyArry.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return arr;
}

function johnLennonFacts(factsArr) {
  var resultFacts = [];
  while ( i < factsArr.length ) {
    resultFacts.push(factsArr[i++] + "!!!");
  }
  return resultFacts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while ( num < 15);
  return arr;
}