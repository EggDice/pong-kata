'use strict';
var test = require('tape');

var game = require('../src/game');


test(function(t) {
  t.deepEqual(game.getNextPhase([100, 100]), [101, 101]);

  t.deepEqual(game.getNextPhase([99, 99]), [100, 100]);
  t.end();
});
