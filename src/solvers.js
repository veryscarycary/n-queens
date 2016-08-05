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
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
      return false;

  // compare lengths - can save a lot of time 
  if (this.length != array.length)
      return false;

  for (var i = 0, l=this.length; i < l; i++) {
      // Check if we have nested arrays
      if (this[i] instanceof Array && array[i] instanceof Array) {
          // recurse into the nested arrays
          if (!this[i].equals(array[i]))
              return false;       
      }           
      else if (this[i] != array[i]) { 
          // Warning - two different object instances will never be equal: {x:20} != {x:20}
          return false;   
      }           
  }       
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

var extend = function (obj) {
  for (var i = 0; i < arguments.length; i++) {
    for (var prop in arguments[i]) {
      obj[prop] = arguments[i][prop]; 
    }
  }
  return obj;
};


window.countNRooksSolutions = function(n) {
  var numberSolutions;
  var board = new Board({n: n});
  var numberSolutions = 0;


  var findSolutions = function (row) {
    if (row === n) {
      numberSolutions++;
      return;
    }

    for (var i = 0; i < n; i++) {
      // check columns of each row
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        findSolutions(row + 1);
      }

      board.togglePiece(row, i);
    }

  };

  findSolutions(0);


  console.log('Number of solutions for ' + n + ' rooks:', numberSolutions);
  return numberSolutions;
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
