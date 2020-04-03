"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
exports.Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: 0 1.5rem;\n  font-size: 1.5rem;\n  background-color: #fff;\n  border: 0.1rem solid\n    ", ";\n  border-radius: 0.8rem;\n  display: ", ";\n  &:focus {\n    border: 0.1rem solid rgba(24, 39, 58, 0.3);\n    outline: 0;\n  }\n  &::placeholder {\n    opacity: 0.3;\n    color: #18273a;\n    font-size: 1.6rem;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: 0 1.5rem;\n  font-size: 1.5rem;\n  background-color: #fff;\n  border: 0.1rem solid\n    ", ";\n  border-radius: 0.8rem;\n  display: ", ";\n  &:focus {\n    border: 0.1rem solid rgba(24, 39, 58, 0.3);\n    outline: 0;\n  }\n  &::placeholder {\n    opacity: 0.3;\n    color: #18273a;\n    font-size: 1.6rem;\n  }\n"])), function (props) { return props.width || "100%"; }, function (props) { return (props.isSmall ? "3.2rem" : "4.8rem"); }, function (props) { return (props.errors ? "#FA9682" : "rgba(24, 39, 58, 0.15)"); }, function (props) { return (props.inline ? "inline-flex" : "initial"); });
var templateObject_1;
//# sourceMappingURL=index.js.map