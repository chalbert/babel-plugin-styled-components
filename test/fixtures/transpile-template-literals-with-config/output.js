"use strict";

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Named = _styledComponents["default"].div.withConfig({
  displayName: "sc-code__Named"
})(["\n  width: 100%;\n"]);

var NamedWithInterpolation = _styledComponents["default"].div.withConfig({
  displayName: "sc-code__NamedWithInterpolation"
})(["\n  color: ", ";\n"], function (color) {
  return props.color;
});

var Wrapped = (0, _styledComponents["default"])(Inner).withConfig({
  displayName: "sc-code__Wrapped"
})(["\n  color: red;\n"]);

var Foo = _styledComponents["default"].div.withConfig({
  displayName: "sc-code__Foo"
})({
  color: 'green'
});
