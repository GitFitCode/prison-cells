# GitFitCode Pair Coding Challenge

## Prison Cells After N Days

This week we need to rest our understanding of arrays! Let's see if we can determine if cell neighbors are vacant or not.

## Project Notes

There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

- If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
- Otherwise, it becomes vacant.

(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: `cells[i] == 1` if the `i`th cell is occupied, else `cells[i] == 0`.

Given the initial state of the prison, return the state of the prison after `N` days (and `N` such changes described above.)

**Example 1:**

```
Input: cells = [0,1,0,1,1,0,0,1], N = 7
Output: [0,0,1,1,0,0,0,0]
Explanation: 
The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

```

**Example 2:**

```
Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
Output: [0,0,1,1,1,1,1,0]
```

**Note:**

1. `cells.length == 8`
2. `cells[i]` is in `{0, 1}`
3. `1 <= N <= 10^9`
```

### Tips

- Spend some time reading documentation together! [W3Schools](https://www.w3schools.com/jsref/dom_obj_all.asp)
- Make sure that y'all really breakdown these problems into manageable parts that you can solve. It is a lot easier to solve a bunch of tiny problems vs a large one.
- Make sure to use proper styling and to comment your code! Please tab 2, can be set by default!
- Before solving any problem, really breakdown all the rules. Maybe even play a couple games so you can easily describe it.
- Feel free to contact @Sirrele for assistance! I hope y'all have fun doing this together!
- You all will kill it! Ready? Set? GIT FIT COOOOOOOOODE!

### Submission

- Please make a branch with the following covention: /your-name
- Please make a pull request on [https://github.com/] for your assigned reviewer
- Please ask your reviewer to assign the pull request to @sirrele when revisions are finished
