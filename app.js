/**

- @param {number[]} cells
- @param {number} N
- @return {number[]}
*/

const prisonAfterNDays = (cells, N) => {
  // creates a new day each loop
  for (let i = 1; i <= N; i++) {
    let checkedOccupancy = [];
    // pushes 0 to the first value because the value can never be occupied 
    checkedOccupancy.push(0);
    // checks for neighboring occupants / returns occupied if both neighboring values are equal
    if (cells[0] === cells[2]) {
      checkedOccupancy.push(1);
    } else {
      checkedOccupancy.push(0);
    }
    if (cells[1] === cells[3]) {
      checkedOccupancy.push(1);
    } else {
      checkedOccupancy.push(0);
    }
    if (cells[2] === cells[4]) {
      checkedOccupancy.push(1);
    } else {
      checkedOccupancy.push(0);
    }
    if (cells[3] === cells[5]) {
      checkedOccupancy.push(1);
    } else {
      checkedOccupancy.push(0);
    }
    if (cells[4] === cells[6]) {
      checkedOccupancy.push(1);
    } else {
      checkedOccupancy.push(0);
    }
    if (cells[5] === cells[7]) {
      checkedOccupancy.push(1);
    } else {
      checkedOccupancy.push(0);
    }
    // pushes 0 to the last value because the value can never be occupied 
    checkedOccupancy.push(0);
    // sets the cells array equal to the last iteration of the 'N' parameter 
    cells = checkedOccupancy;
  }
  // logs result to console
  console.log(cells);
};

prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7);

prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000);
