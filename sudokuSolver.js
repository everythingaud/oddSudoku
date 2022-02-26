
// MARK: Backtracking

let board = [[3, 0, 6, 5, 0, 8, 4, 0, 0],
            [5, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 8, 7, 0, 0, 0, 0, 3, 1],
            [0, 0, 3, 0, 1, 0, 0, 8, 0],
            [9, 0, 0, 8, 6, 3, 0, 0, 5],
            [0, 5, 0, 0, 9, 0, 6, 0, 0],
            [1, 3, 0, 0, 0, 0, 2, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 4],
            [0, 0, 5, 2, 0, 6, 3, 0, 0]];

 // Checks if a given number (val) in the given row and column is a valid move on the board
 // board: the given sudoku board
 // val: the number we are checking for
 // row: the index of the row we are putting val in
 // col: the index of the column we are putting val in

 function isValid(board, val, row, col) {
     // Row check - check the if val exists in the given row
     for(let r = 0; r < board.length; r++) {
         if (board[row][r] == num) {
             return false;
         }
     }
  
     // Col check - check  if val exists in the given column
     for(let c = 0; c < board.length; c++) {
         if (board[c][col] == num) {
             return false;
         }
     }
  
     // Find the start indexes of the box. 
     // Options [r,c]: [[0,0], [0,3], [0,6], [3,0], [3,3], [3,6], [6,0], [6,3], [6,6]]
     let boxRowStart = row - row % 3;
     let boxColStart = col - col % 3;
  
    // Check box
     for(let r = boxRowStart; r < boxRowStart + 3; r++) {
         for(let c = boxColStart; c < boxColStart + sqrt; c++) {
             if (board[r][c] == num) {
                 return false;
             }
         }
     }
  
     // Otherwise, has to be safe
     return true;
 }
  
 function solveSudoku(board) {
     let row = -1;
     let col = -1;
     let isEmpty = true;

     // Check if we still have missing values on board
     for(let i = 0; i < 9; i++) {
         for(let j = 0; j < 9; j++) {
             if (board[i][j] == 0) {
                 row = i;
                 col = j;
  
                 isEmpty = false;
                 break;
             }
         }
         if (!isEmpty) {
             break;
         }
     }
  
     // No empty space left
     if (isEmpty) {
         return true;
     }
  
     // Else for each-row backtrack
     for(let num = 1; num <= 9; num++) {
         if (isSafe(board, row, col, num)) {
             board[row][col] = num;
             if (solveSudoku(board)) {
                 // print(board);
                 return true;
             }
             else {
                 // Replace it
                 board[row][col] = 0;
             }
         }
     }
     return false;
 }
  
 function print(board) {
     // We got the answer, just print it
     for(let r = 0; r < 9; r++)
     {
         for(let d = 0; d < 9; d++)
         {
             document.write(board[r][d]);
             document.write(" ");
         }
         document.write("<br>");
  
         if ((r + 1) % 3 == 0)
         {
             document.write("");
         }
     }
 }
  
 // Driver Code
 let board = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
               [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
               [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
               [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
               [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
               [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
               [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
               [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
               [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];
          
 let N = board.length;
  
 if (solveSudoku(board))
 {
      
     // Print solution
     print(board);
 }
 else
 {
     document.write("No solution");
 }