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

window.placeRooks = function (n, i, k) {
  var board = new Board({n: n});
  var matrix = board.attributes;
  var counter = 0;

  for (; i < matrix.n; i++) {
    for (; k < matrix.n; k++) {
      if (board.hasAnyRooksConflicts() === false) {
        matrix[i][k] = 1;
        counter ++;
        if (board.hasAnyRooksConflicts() === true) {
          matrix[i][k] = 0;
          counter --;
        }
        // if (counter >= n) {
        //   break;
        // }
      }
    }
    k = 0;
  }

  return board;
};


window.findNRooksSolution = function(n) {
  var solution = [];

  debugger;
  var board = placeRooks(n, 0, 0);
  // if (counter < n) {
  //   return;
  // }

  for (let i = 0; i < n; i++) {
    solution.push(board.get(i));
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// create var current that represents current solution being recursed onto
// if there's no conflict, 
// create var root1 that represents where we just placed our first 1
// run recursive function and pass in current as argument and concat to it recursive(current.concat(root1), n)
// n represents generations


window.countNRooksSolutions = function(n) {
  var possibleSolutions = 0;
  var board = new Board({n: n});

  var recursive = function () {
    var rookCounter = 0;
    if (rookCounter === n) {
      possibleSolutions++;
      return;
    }


    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (board.rows()[i][j] === 0) {
          board.togglePiece(i, j);
          if (board.hasAnyRooksConflicts()) {
            board.togglePiece(i, j);
          } else {
            rookCounter++;
            recursive();
            // rookCounter--;
          }
        }
      }
    }
  };

  console.log('Number of solutions for ' + n + ' rooks:', possibleSolutions);
  return possibleSolutions;
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
