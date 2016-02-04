'use strict';

function game(options) {
  var velocity = options.velocity;

  function getNextPhase(oldBall) {
    return addVec2(oldBall, velocity);
  }

  function addVec2(a, b) {
    var v1 = a[0] + b[0];
    var v2 = a[1] + b[1];
    return [v1, v2];
  }

  return {
    getNextPhase: getNextPhase
  };
}


module.exports = game;

