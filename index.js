type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter';

function nextSeason(season: Season): Season {
  switch(season) {
    case 'Spring': return 'Summer';
    case 'Summer': return 'Fall';
    case 'Fall': return 'Winter';
    case 'Winter': return 'Spring';
    default: throw 'No season';
  }
}

nextSeason('Summer');

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
