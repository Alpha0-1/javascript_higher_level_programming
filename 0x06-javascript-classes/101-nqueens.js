/**
 * NQueensSolver class
 *
 * Solves the N-Queens puzzle on an N x N chessboard.
 */
class NQueensSolver {
  /**
   * Initializes the solver with the board size.
   * 
   * @param {number} n - Size of the board and number of queens.
   */
  constructor(n) {
    this.n = n;
    this.solutions = [];
  }

  /**
   * Checks if placing a queen at position (row, col) is safe.
   * 
   * @param {number[][]} board - Current state of the board.
   * @param {number} row - Row index.
   * @param {number} col - Column index.
   * @returns {boolean} True if safe, false otherwise.
   */
  isSafe(board, row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 1) return false;
    }

    // Check upper-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) return false;
    }

    // Check upper-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < this.n; i--, j++) {
      if (board[i][j] === 1) return false;
    }

    return true;
  }

  /**
   * Recursive function to solve the N-Queens problem.
   * 
   * @param {number[][]} board - Current state of the board.
   * @param {number} row - Current row to place a queen.
   */
  solve(board, row) {
    if (row === this.n) {
      this.solutions.push([...board.map(r => r.indexOf(1))]);
      return;
    }

    for (let col = 0; col < this.n; col++) {
      if (this.isSafe(board, row, col)) {
        board[row][col] = 1;
        this.solve(board, row + 1);
        board[row][col] = 0;
      }
    }
  }

  /**
   * Starts solving the puzzle and logs all solutions.
   */
  findSolutions() {
    const board = Array.from({ length: this.n }, () => Array(this.n).fill(0));
    this.solve(board, 0);
    this.printSolutions();
  }

  /**
   * Logs all found solutions in a readable format.
   */
  printSolutions() {
    this.solutions.forEach(solution => {
      console.log(solution.map((val, idx) => `[${idx}, ${val}]`).join(', '));
    });
  }
}

// Entry point for CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.error('Usage: node 101-nqueens.js N');
    process.exit(1);
  }

  const n = parseInt(args[0], 10);
  if (isNaN(n) || n < 4) {
    console.error('N must be at least 4');
    process.exit(1);
  }

  const solver = new NQueensSolver(n);
  solver.findSolutions();
}

module.exports = NQueensSolver;
