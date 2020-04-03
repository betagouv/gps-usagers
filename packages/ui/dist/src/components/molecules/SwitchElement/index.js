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
var StyledContainer = styled_components_1.default(rebass_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
exports.SwitchElement = function (_a) {
    var _b = _a.field, name = _b.name, onChange = _b.onChange, onBlur = _b.onBlur, field = __rest(_b, ["name", "onChange", "onBlur"]), _c = _a.form, touched = _c.touched, errors = _c.errors, values = _c.values, setFieldValue = _c.setFieldValue, autocomplete = _a.autocomplete, placeholder = _a.placeholder, information = _a.information, flexDirection = _a.flexDirection, isDisabled = _a.isDisabled, isSmall = _a.isSmall, label = _a.label, type = _a.type, rest = __rest(_a, ["field", "form", "autocomplete", "placeholder", "information", "flexDirection", "isDisabled", "isSmall", "label", "type"]);
    var errorMsg = "";
    if (name) {
        var error = formik_1.getIn(errors, name);
        var touch = formik_1.getIn(touched, name);
        errorMsg = touch && error ? error : null;
    }
    return (React.createElement(StyledContainer
    // @ts-ignore
    , __assign({ 
        // @ts-ignore
        flexDirection: flexDirection ? flexDirection : "column", alignItems: "baseline", fontSize: 4 }, rest),
        React.createElement(rebass_1.Flex, { width: flexDirection === "row" ? 1 / 3 : 1, justifyContent: "space-between" },
            React.createElement(__1.Label, null, label)),
        React.createElement(rebass_1.Box, { width: flexDirection === "row" ? 2 / 3 : 1 },
            React.createElement(__1.Switch, { handleChange: function (_a) {
                    var isChecked = _a.isChecked;
                    return setFieldValue(name, isChecked);
                }, checked: formik_1.getIn(values, name) || false })),
        errorMsg && (React.createElement(rebass_1.Text, { color: "red", mt: 1, fontWeight: 6 }, errorMsg))));
};
var templateObject_1;
//# sourceMappingURL=index.js.map