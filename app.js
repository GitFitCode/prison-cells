/**
 * Finds the state of the prison after N days.
 * @param {number[]} cells - The initial state of the prison.
 * @param {number} N - The number of days.
 * @return {number[]}
*/
const prisonAfterNDays = function(cells, N) {
  // Create a copy of the cells.
  let nDayCells = cells.slice();

  // Retrieve tomorrow's cells repeatedly, N times.
  while (N-- > 0) {
    nDayCells = getTomorrowCells(nDayCells);
  }

  return nDayCells;
};

/**
 * Finds the state of the prison tomorrow, given today's state.
 * @param {number[]} todayCells - The state of the prison today.
 * @returns {number[]}
 */
function getTomorrowCells(todayCells) {
  // This will hold the state of the prison tomorrow.
  const cellsTomorrow = [];

  // If a cell will be occupied tomorrow, it will be represented in the
  // cellsTomorrow array with a value of 1.
  // If it will be vacant, it will be represented with a value of 0.
  for (let i = 0; i < todayCells.length; i++) {
    if (isOccupiedTomorrow(todayCells, i)) {
      cellsTomorrow.push(1);
    } else {
      cellsTomorrow.push(0);
    }
  }

  return cellsTomorrow;
}

/**
 * Checks whether a specific cell in the prison will be occupied tomorrow.
 * @param {number[]} cells - The state of the prison today.
 * @param {number} cellNumber
 * @returns {boolean}
 */
function isOccupiedTomorrow(cells, cellNumber) {
  // The index of the last cell.
  const lastCellNumber = cells.length - 1;

  // The first cell will never be occupied tomorrow because
  // it will never have two adjacent neighbors.
  if (cellNumber === 0) return false;

  // The last cell will never be occupied tomorrow because
  // it will never have two adjacent neighbors.
  if (cellNumber === lastCellNumber) return false;

  // If this is not the first or last cell, this counts the number of occupied
  // neighbors around the specified cell.
  const occupiedNeighbors = countOccupiedNeighbors(cells, cellNumber);

  // If a cell has a single occupied neighbor, it will be vacant tomorrow.
  if (occupiedNeighbors === 1) return false;

  // If none of the above conditions have been met, the cell will be occupied
  // tomorrow because it has two vacant neighbors or two occupied neighbors.
  return true;
}

/**
 * Counts the number of occupied cells around the specified cell.
 * @param {number[]} cells - The state of the prison.
 * @param {number} cellNumber - The index of a cell.
 * @returns {number}
 */
function countOccupiedNeighbors(cells, cellNumber) {
  // The index of the previous cell.
  const previousCellNumber = cellNumber - 1;

  // The index of the next cell.
  const nextCellNumber = cellNumber + 1;

  // The index of the last cell.
  const lastCellNumber = cells.length - 1;

  // This will store the number of occupied neighbors.
  let occupiedNeighborCount = 0;

  // Unless this is the first cell, add the value of the previous cell.
  // If the previous cell is vacant, this will have no effect.
  // If the previous cell is occupied, this will add 1 to the count.
  if (cellNumber > 0) occupiedNeighborCount += cells[previousCellNumber];

  // Unless this is the last cell, add the value of the next cell.
  // If the next cell is vacant, this will have no effect.
  // If the next cell is occupied, this will add 1 to the count.
  if (cellNumber < lastCellNumber) occupiedNeighborCount += cells[nextCellNumber];

  return occupiedNeighborCount;
}

const currentPrison = [0, 1, 0, 1, 1, 0, 0, 1];
console.log(prisonAfterNDays(currentPrison, 3));
