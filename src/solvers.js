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
var extend = function (obj) {
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(argument) {
    for (var prop in argument) {
      obj[prop] = args[prop]; 
    }
  });
  return obj;
};


window.countNRooksSolutions = function(n) {
  var possibleSolutions = 0;
  var board = new Board({n: n});
  debugger;
  var a = 0;
  var b = 0;

  var recursive = function (rookCounter, lastBoard, i, j) {
    if (rookCounter === n) {
      possibleSolutions++;
      console.log(lastBoard.attributes);
      // lastBoard.rows()[a][b] = 0;
      return;
    }
    if (i === undefined) { var i = row; }
    if (j === undefined) { var j = col; }


    for (; i < n; i++) { // start at 0,0 and check global lastBoard stats
      for (; j < n; j++) {
        if (lastBoard.rows()[i][j] === 0) {
          lastBoard.togglePiece(i, j);
          if (lastBoard.hasAnyRooksConflicts()) {
            lastBoard.togglePiece(i, j);
          } else {
            // a = i; b = j;
            rookCounter++;
            recursive(rookCounter, lastBoard);
            lastBoard.togglePiece(i, j);
            rookCounter--;
            // recursive(rookCounter + 1, new lastBoard({n: n}))

            // I think we need to pass in rookcounter and n - 1
            // rookCounter--;
          }
        }
      }
      j = 0;
    }

  };

  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      recursive(0, board, row, col);
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', possibleSolutions);
  return possibleSolutions;
};

/*
window.countNRooksSolutions = function(n) {
  var possibleSolutions = 0;
  var board = new Board({n: n});
  debugger;
  var a = 0;
  var b = 0;

  var recursive = function (rookCounter, lastBoard) {
    if (rookCounter === n) {
      possibleSolutions++;
      lastBoard.togglePiece(a, b) = 0;
      rookCounter--;
      // lastBoard = new lastBoard({n: n})
      // return;
    }

    // for (let i = 0; i < n; i++) {
    //   for (let j = 0; j < n; j++) {
    //     lastBoard = new lastBoard({n: n});

    for (var i = 0; i < n; i++) { // start at 0,0 and check global lastBoard stats
      for (var j = 0; j < n; j++) {
        if (lastBoard.rows()[i][j] === 0) {
          lastBoard.togglePiece(i, j);
          if (lastBoard.hasAnyRooksConflicts()) {
            lastBoard.togglePiece(i, j);
          } else {
            a = i; b = j;
            rookCounter++;
            recursive(rookCounter, lastBoard);
            // recursive(rookCounter + 1, new lastBoard({n: n}))

            // I think we need to pass in rookcounter and n - 1
            // rookCounter--;
            }
        }
      }
    }
  }
  recursive(0, board);
};


*/

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
