"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicNumber = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _config = require("./config");

var _hi2048Utils = require("hi2048-utils");

require("./style.css");

var DynamicNumber = function DynamicNumber(props) {
  var _props$start = props.start,
      start = _props$start === void 0 ? 100 : _props$start,
      _props$end = props.end,
      end = _props$end === void 0 ? 0 : _props$end,
      _props$stepping = props.stepping,
      stepping = _props$stepping === void 0 ? 1 : _props$stepping,
      _props$isRandom = props.isRandom,
      isRandom = _props$isRandom === void 0 ? true : _props$isRandom,
      _props$speed = props.speed,
      speed = _props$speed === void 0 ? _config.NORMAL : _props$speed;

  var _useState = (0, _react.useState)(start),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var dynamic = function dynamic() {
    var dynamicStepping = stepping;
    var distance = end - start;
    var direction = distance < 0 ? -1 : 1;
    var timer = setInterval(function () {
      if (isRandom) {
        dynamicStepping = (0, _hi2048Utils.random)(stepping);
      }

      if (Math.abs(distance) < dynamicStepping) {
        distance = 0;
        setCount(end);
        return clearInterval(timer);
      }

      distance -= dynamicStepping * direction;
      setCount(function (count) {
        return count + dynamicStepping * direction;
      });
    }, (0, _config.getSpeed)(speed));
  };

  (0, _react.useEffect)(dynamic, []);
  return _react["default"].createElement("div", {
    className: "hi2048 dynamic-number-container"
  }, _react["default"].createElement("span", {
    className: "counter"
  }, count));
};

exports.DynamicNumber = DynamicNumber;