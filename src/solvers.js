/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution; 
  
  
  var makeMatrix = function() {
    var nestedArray = [];
    var matrix = [];
    for (var i = 0; i < n; i++) {
      nestedArray.push(0);
    }
    
    for (var k = 0; k < n; k++) {
      matrix.push(nestedArray);
    }
    
    return matrix;
  };

  var matrix = makeMatrix();
  var counter = 0;

  for (var i = 0; i < matrix.n; i++) {
    for (var k = 0; k < matrix.n; k++) {
      if (this.hasAnyRooksConflicts() === false) {
        matrix[i][k] = 1;
        counter ++;
        if (this.hasAnyRooksConflicts() === true) {
          matrix[i][k] = 0;
          counter --;
        }
        if (counter >= n) {
          return matrix;
        }
      }
    }
  }
  console.log();
  if (counter < n) {
    return;
  }

  solution = matrix;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
