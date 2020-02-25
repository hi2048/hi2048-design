"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

var Stepper = function Stepper(props) {
  var _props$initCount = props.initCount,
      initCount = _props$initCount === void 0 ? 0 : _props$initCount,
      _props$stepping = props.stepping,
      stepping = _props$stepping === void 0 ? 1 : _props$stepping;

  var _useState = (0, _react.useState)(initCount),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  return _react["default"].createElement("div", {
    className: "hi2048 stepper-container"
  }, _react["default"].createElement("span", {
    className: "counter"
  }, count), _react["default"].createElement("div", {
    className: "controller"
  }, _react["default"].createElement("button", {
    onClick: function onClick(e) {
      return setCount(count - stepping < 0 ? 0 : count - stepping);
    }
  }, " - "), _react["default"].createElement("button", {
    onClick: function onClick(e) {
      return setCount(count + stepping);
    }
  }, " + ")));
};

exports.Stepper = Stepper;