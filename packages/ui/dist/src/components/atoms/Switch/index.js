"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var React = require("react");
var rebass_1 = require("rebass");
var styled_components_1 = require("../../../theme/styled-components");
var CheckBoxWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var CheckBoxLabel = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 42px;\n  height: 26px;\n  border-radius: 15px;\n  background: #bebebe;\n  cursor: pointer;\n  &::after {\n    content: \"\";\n    display: block;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    margin: 3px;\n    background: #ffffff;\n    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n    transition: 0.2s;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 42px;\n  height: 26px;\n  border-radius: 15px;\n  background: #bebebe;\n  cursor: pointer;\n  &::after {\n    content: \"\";\n    display: block;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    margin: 3px;\n    background: #ffffff;\n    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n    transition: 0.2s;\n  }\n"])));
var CheckBox = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 15px;\n  width: 42px;\n  height: 26px;\n  &:checked + ", " {\n    background: #4fbe79;\n    &::after {\n      content: \"\";\n      display: block;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      margin-left: 21px;\n      transition: 0.2s;\n    }\n  }\n"], ["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 15px;\n  width: 42px;\n  height: 26px;\n  &:checked + ", " {\n    background: #4fbe79;\n    &::after {\n      content: \"\";\n      display: block;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      margin-left: 21px;\n      transition: 0.2s;\n    }\n  }\n"])), CheckBoxLabel);
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isChecked: _this.props.checked || false
        };
        _this.handleClick = function () {
            var handleChange = _this.props.handleChange;
            _this.setState(function (state) { return ({ isChecked: !state.isChecked }); }, function () { return handleChange({ isChecked: _this.state.isChecked }); });
        };
        return _this;
    }
    Switch.prototype.render = function () {
        var _a = this.props, checked = _a.checked, rest = __rest(_a, ["checked"]);
        var isChecked = this.state.isChecked;
        return (React.createElement(rebass_1.Box, __assign({}, rest),
            React.createElement(CheckBoxWrapper, null,
                React.createElement(CheckBox, { onClick: this.handleClick, id: "checkbox", type: "checkbox", checked: isChecked }),
                React.createElement(CheckBoxLabel, { htmlFor: "checkbox" }))));
    };
    return Switch;
}(React.Component));
exports.Switch = Switch;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map