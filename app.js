/**

- @param {number[]} cells
- @param {number} N
- @return {number[]}
*/

const prisonAfterNDays = function(cells, N) {
  for (let i = 0; i < N; i++) {
    //replace cells with each new nextDayCells N times
    cells = prisonHelper(cells);
  }
  return cells;
};

function prisonHelper(cells) {
  //store answers in new array so as to not pollute current iteration
  const nextDayCells = new Array(8);

  for (let i = 0; i < 8; i++) {
    //end cells can only be 0/empty after the first day
    if (i === 0 || i === 7) {
      nextDayCells[i] = 0;
    }
    //check if the two neighbors are equal, then it's occupied next day
    else if (cells[i - 1] === cells[i + 1]) {
      nextDayCells[i] = 1;
    }
    else {
      nextDayCells[i] = 0;
    }
  }

  return nextDayCells;
}

const cells = [0,1,0,1,1,0,0,1];
const N = 7;

//const cells = [1,0,0,1,0,0,1,0];
//const N = 1000000000;

console.log(String(prisonAfterNDays(cells, N)));