"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSpeed = exports.SLOWER = exports.SLOW = exports.NORMAL = exports.FAST = exports.FASTER = void 0;
var SPEED_TYPES = {
  FASTER: 'faster',
  FAST: 'fast',
  NORMAL: 'normal',
  SLOW: 'slow',
  SLOWER: 'slower'
};
var FASTER = SPEED_TYPES.FASTER,
    FAST = SPEED_TYPES.FAST,
    NORMAL = SPEED_TYPES.NORMAL,
    SLOW = SPEED_TYPES.SLOW,
    SLOWER = SPEED_TYPES.SLOWER;
exports.SLOWER = SLOWER;
exports.SLOW = SLOW;
exports.NORMAL = NORMAL;
exports.FAST = FAST;
exports.FASTER = FASTER;

var getSpeed = function getSpeed(speed) {
  switch (speed.toLowerCase()) {
    case FASTER:
      return 25;

    case FAST:
      return 50;

    case NORMAL:
      return 100;

    case SLOW:
      return 150;

    case SLOWER:
      return 200;
  }
};

exports.getSpeed = getSpeed;