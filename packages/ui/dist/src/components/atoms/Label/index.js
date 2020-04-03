"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
exports.Label = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 0.6rem;\n  font-size: 1em;\n  font-family: inherit;\n  color: ", ";\n  text-align: ", ";\n  padding-right: 1rem;\n"], ["\n  display: block;\n  margin-bottom: 0.6rem;\n  font-size: 1em;\n  font-family: inherit;\n  color: ",
    ";\n  text-align: ", ";\n  padding-right: 1rem;\n"])), function (props) {
    return props.color ? props.theme.colors[props.color] : "inherit";
}, function (props) { return (props.textAlign ? props.textAlign : "left"); });
var templateObject_1;
//# sourceMappingURL=index.js.map