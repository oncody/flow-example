type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter';

function nextSeason(season: Season): Season {
  switch(season) {
  // switch(typeof (season)) {
    case 'Spring': return 'Summer';
    case 'Summer': return 'Fall';
    case 'Fall': return 'Winter';
    case 'Winter': return 'Spring';
    default: throw 'No season';
  }
}

// function lastSeason(season: Season): Season {
//   if((typeof season) === 'Spring') {
//     return 'Winter';
//   }
//   else if((typeof season) === 'Summer') {
//     return 'Spring';
//   }
//   else if((typeof season) === 'Fall') {
//     return 'Summer';
//   }
//   else if((typeof season) === 'Winter') {
//     return 'Fall';
//   }
// }

console.log(nextSeason('Summer'));
// console.log(lastSeason('Summer'));

const suits = {
  'heart': 'heart',
  'diamond': 'diamond',
  'spade': 'spade',
  'club': 'club'
};

type Suit = $Keys<typeof suits>;
const cardSuit: Suit = 'heart';
const otherCardSuit: Suit = suits.club;



function length(line: {start: number, end: number}): number {
  return line.end - line.start;
}

length({start: 3, end: 6});

length({start: 3, end: 6, extraParam: 10});

type Line =  $ReadOnly<{
  start: number,
  end: number
}>;

function lineLength(line: Line): number {
  // line.start = 10;
  return line.end - line.start;
}

lineLength({
  start: 2,
  end: 2
});

lineLength({
  start: 2,
  end: 2,
  extraParam: 10
});

// let line = Line(2, 2);
// lineLength(line);


type OtherLine =  {
  +start: number,
  +end: number
};

function otherLineLength(line: OtherLine): number {
  // line.start = 10;
  return line.end - line.start;
}

// function add(first: number, second: number): number {
//   return '';// first + second;
// }



// add(5);
