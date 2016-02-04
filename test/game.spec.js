'use strict';
var test = require('tape');

var game = require('../src/game');


test(function(t) {
  t.deepEqual(generateGame([1, 1]).getNextPhase([100, 100]), [101, 101]);

  t.deepEqual(generateGame([1, 1]).getNextPhase([99, 99]), [100, 100]);

  t.deepEqual(generateGame([2, 2]).getNextPhase([100, 100]), [102, 102]);
  t.end();
});

test(function(t) {
  
  t.deepEqual();

  t.end();
});

function generateGame(velocity) {
  return game({
    velocity: velocity
  });
}

