/**
 * N-Queens Problem Solver
 * This file demonstrates advanced algorithms, recursion, and backtracking.
 * The N-Queens problem involves placing N queens on an NxN chessboard
 * such that no two queens can attack each other.
 * 
 * Queens can attack horizontally, vertically, and diagonally.
 */

/**
 * Class representing the N-Queens problem solver.
 * @class NQueens
 */
class NQueens {
    /**
     * Creates a new N-Queens solver instance.
     * @param {number} n - The size of the chessboard (n x n)
     */
    constructor(n) {
        if (typeof n !== 'number' || n < 1) {
            throw new Error('Board size must be a positive integer');
        }
        if (n === 2 || n === 3) {
            throw new Error('No solution exists for N = 2 or N = 3');
        }
        
        this.n = n;
        this.solutions = [];
        this.board = [];
    }

    /**
     * Initializes an empty chessboard.
     * 0 represents an empty square, 1 represents a queen.
     */
    initializeBoard() {
        this.board = [];
        for (let i = 0; i < this.n; i++) {
            this.board[i] = new Array(this.n).fill(0);
        }
    }

    /**
     * Checks if placing a queen at position (row, col) is safe.
     * @param {number} row - The row position
     * @param {number} col - The column position
     * @return {boolean} True if the position is safe, false otherwise
     */
    isSafe(row, col) {
        // Check column (vertical attack)
        for (let i = 0; i < row; i++) {
            if (this.board[i][col] === 1) {
                return false;
            }
        }

        // Check upper left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (this.board[i][j] === 1) {
                return false;
            }
        }

        // Check upper right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < this.n; i--, j++) {
            if (this.board[i][j] === 1) {
                return false;
            }
        }

        return true;
    }

    /**
     * Recursively solves the N-Queens problem using backtracking.
     * @param {number} row - The current row being processed
     * @return {boolean} True if a solution is found, false otherwise
     */
    solveNQueensRecursive(row) {
        // Base case: all queens are placed
        if (row >= this.n) {
            // Store the current solution
            const solution = this.board.map(row => [...row]);
            this.solutions.push(solution);
            return true;
        }

        // Try placing a queen in each column of the current row
        for (let col = 0; col < this.n; col++) {
            if (this.isSafe(row, col)) {
                // Place the queen
                this.board[row][col] = 1;

                // Recursively place queens in the next row
                if (this.solveNQueensRecursive(row + 1)) {
                    // Continue to find more solutions
                }

                // Backtrack: remove the queen if it doesn't lead to a solution
                this.board[row][col] = 0;
            }
        }

        return false;
    }

    /**
     * Finds the first solution to the N-Queens problem.
     * @return {number[][]|null} The first solution board, or null if no solution exists
     */
    findFirstSolution() {
        this.solutions = [];
        this.initializeBoard();
        
        if (this.solveNQueensRecursive(0)) {
            return this.solutions[0];
        }
        return null;
    }

    /**
     * Finds all solutions to the N-Queens problem.
     * @return {number[][][]} Array of all solution boards
     */
    findAllSolutions() {
        this.solutions = [];
        this.initializeBoard();
        this.solveNQueensRecursive(0);
        return this.solutions;
    }

    /**
     * Prints a visual representation of a solution board.
     * @param {number[][]} board - The solution board to print
     */
    printBoard(board) {
        if (!board) {
            console.log('No solution to display');
            return;
        }

        console.log('\n' + '─'.repeat(this.n * 4 + 1));
        
        for (let row = 0; row < this.n; row++) {
            let line = '│';
            for (let col = 0; col < this.n; col++) {
                const symbol = board[row][col] === 1 ? ' Q ' : '   ';
                line += symbol + '│';
            }
            console.log(line);
            console.log('─'.repeat(this.n * 4 + 1));
        }
    }

    /**
     * Converts a solution board to coordinate notation.
     * @param {number[][]} board - The solution board
     * @return {number[][]} Array of [row, col] coordinates where queens are placed
     */
    boardToCoordinates(board) {
        const coordinates = [];
        for (let row = 0; row < this.n; row++) {
            for (let col = 0; col < this.n; col++) {
                if (board[row][col] === 1) {
                    coordinates.push([row, col]);
                }
            }
        }
        return coordinates;
    }

    /**
     * Prints solution statistics and optionally displays solutions.
     * @param {boolean} [showBoards=false] - Whether to display all solution boards
     */
    solve(showBoards = false) {
        console.log(`\n🔍 Solving ${this.n}-Queens Problem...`);
        console.log('─'.repeat(40));
        
        const startTime = Date.now();
        const allSolutions = this.findAllSolutions();
        const endTime = Date.now();
        
        console.log(`📊 Results for ${this.n}x${this.n} board:`);
        console.log(`   • Total solutions found: ${allSolutions.length}`);
        console.log(`   • Computation time: ${endTime - startTime}ms`);
        
        if (allSolutions.length > 0) {
            console.log(`\n👑 First solution:`);
            this.printBoard(allSolutions[0]);
            
            console.log(`\nQueen positions (row, col):`);
            const coordinates = this.boardToCoordinates(allSolutions[0]);
            coordinates.forEach((coord, index) => {
                console.log(`   Queen ${index + 1}: (${coord[0]}, ${coord[1]})`);
            });
            
            if (showBoards && allSolutions.length > 1) {
                console.log(`\n📋 All ${allSolutions.length} solutions:`);
                allSolutions.forEach((solution, index) => {
                    console.log(`\nSolution ${index + 1}:`);
                    this.printBoard(solution);
                });
            } else if (allSolutions.length > 1) {
                console.log(`\n💡 Use solve(true) to see all ${allSolutions.length} solutions`);
            }
        } else {
            console.log('\n❌ No solutions found for this board size');
        }
    }

    /**
     * Static method to quickly solve and display N-Queens for a given size.
     * @param {number} n - The board size
     * @param {boolean} [showAll=false] - Whether to show all solutions
     */
    static solve(n, showAll = false) {
        try {
            const nQueens = new NQueens(n);
            nQueens.solve(showAll);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }
}

// Demonstration: Solve N-Queens for different board sizes
console.log('🏁 N-Queens Problem Demonstration');
console.log('==================================');

// Solve for different board sizes
const boardSizes = [1, 4, 5, 6, 8];

boardSizes.forEach(size => {
    try {
        NQueens.solve(size, false);
    } catch (error) {
        console.log(`\n❌ N-Queens for size ${size}: ${error.message}`);
    }
});

// Example of how to use the class for custom solutions
console.log('\n🎯 Custom Usage Example:');
console.log('─'.repeat(25));

const customQueens = new NQueens(4);
const firstSolution = customQueens.findFirstSolution();

if (firstSolution) {
    console.log('First solution for 4x4 board:');
    customQueens.printBoard(firstSolution);
    
    const coordinates = customQueens.boardToCoordinates(firstSolution);
    console.log('\nQueen coordinates:', coordinates);
}

// Export the NQueens class for use in other modules
module.exports = NQueens;
