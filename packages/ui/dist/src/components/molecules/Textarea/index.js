"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var React = require("react");
var rebass_1 = require("rebass");
var __1 = require("../../../");
var styled_components_1 = require("../../../theme/styled-components");
var StyledTextArea = styled_components_1.default("textarea")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  min-height: 10rem;\n  padding: 1.5rem;\n  font-size: 1em;\n  background-color: #fff;\n  border: 0.1rem solid\n    ", ";\n  border-radius: 0.8rem;\n  display: ", ";\n  &:focus {\n    border: 0.1rem solid #2c3949;\n    outline: 0;\n  }\n  &::placeholder {\n    font-size: 1.6rem;\n    color: rgba(25, 28, 38, 0.3);\n  }\n"], ["\n  width: ", ";\n  min-height: 10rem;\n  padding: 1.5rem;\n  font-size: 1em;\n  background-color: #fff;\n  border: 0.1rem solid\n    ", ";\n  border-radius: 0.8rem;\n  display: ", ";\n  &:focus {\n    border: 0.1rem solid #2c3949;\n    outline: 0;\n  }\n  &::placeholder {\n    font-size: 1.6rem;\n    color: rgba(25, 28, 38, 0.3);\n  }\n"])), function (props) { return props.width || "100%"; }, function (props) { return (props.errors ? "#FA9682" : "rgba(25, 28, 38, 0.15)"); }, function (props) { return (props.inline ? "inline-flex" : "initial"); });
exports.Textarea = function (_a) {
    var _b = _a.field, name = _b.name, onChange = _b.onChange, onBlur = _b.onBlur, field = __rest(_b, ["name", "onChange", "onBlur"]), _c = _a.form, touched = _c.touched, errors = _c.errors, values = _c.values, placeholder = _a.placeholder, label = _a.label, flexDirection = _a.flexDirection, rest = __rest(_a, ["field", "form", "placeholder", "label", "flexDirection"]);
    var errorMsg = "";
    if (name) {
        var error = formik_1.getIn(errors, name);
        var touch = formik_1.getIn(touched, name);
        errorMsg = touch && error ? error : null;
    }
    return (React.createElement(rebass_1.Flex
    // @ts-ignore
    , __assign({ 
        // @ts-ignore
        flexDirection: flexDirection ? flexDirection : "column", alignItems: "flex-start", fontSize: 4 }, rest),
        React.createElement(rebass_1.Box, { pt: 1, width: flexDirection === "row" ? 1 / 4 : 1 },
            React.createElement(__1.Label, null, label)),
        React.createElement(rebass_1.Box, { width: flexDirection === "row" ? 3 / 4 : 1 },
            React.createElement(StyledTextArea, { name: name, placeholder: placeholder, errors: !!errorMsg, onChange: onChange, onBlur: onBlur, defaultValue: formik_1.getIn(values, name) || "" })),
        errorMsg && (React.createElement(rebass_1.Text, { color: "red", mt: 1, fontWeight: 6 }, errorMsg))));
};
var templateObject_1;
//# sourceMappingURL=index.js.map