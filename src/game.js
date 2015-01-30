'use strict';

function addVec2(a, b) {
  var v1 = a[0] + b[0];
  var v2 = a[1] + b[1];
  return [v1, v2];
}

function getNextPhase(oldBall) {
  var velocity = [1, 1];
  return addVec2(oldBall, velocity);
}

module.exports = {
  getNextPhase: getNextPhase
};

