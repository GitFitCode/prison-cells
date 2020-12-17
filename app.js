/**

- @param {number[]} cells
- @param {number} N
- @return {number[]}
*/

const prisonAfterNDays = (cells, N) => {
  // Loops N number of times to return last value of cells
  for (let i = 1; i <= N; i++) {
    // creates new array with all occupied/vacant cell values
    let newArray = cells.map((value, index) => {
      // checks if the 2 adjacent values of each cell are equal, if they are the cell is occupied, if not, it is vacant
      if (cells[index - 1] === cells[index + 1]) {
        return (value = 1);
      } else {
        return (value = 0);
      }
    });
    // sets cells to the returned value of the new array so that the loop returns a new array until it reaches N
    cells = newArray;
  }
  // returns final array
  return cells;
};

console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));

console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000));
