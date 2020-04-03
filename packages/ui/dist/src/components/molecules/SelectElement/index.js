"use strict";
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
var formik_1 = require("formik");
var React = require("react");
var react_select_1 = require("react-select");
var rebass_1 = require("rebass");
var resolution = 6.5;
// window.screen.width > 1440 ? 6.5 : window.screen.width < 1120 ? 3 : 4.5;
var SelectElement = /** @class */ (function (_super) {
    __extends(SelectElement, _super);
    function SelectElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (data) {
            var _a = _this.props, name = _a.field.name, isMulti = _a.isMulti, onChange = _a.onChange;
            if (isMulti) {
                _this.props.form.setFieldValue(name, data.map(function (d) { return d.value; }));
            }
            else {
                _this.props.form.setFieldValue(name, data.value);
            }
            if (onChange) {
                onChange(data);
            }
        };
        _this.handleBlur = function () {
            var name = _this.props.field.name;
            _this.props.form.setFieldTouched(name, true);
        };
        return _this;
    }
    SelectElement.prototype.render = function () {
        var _a = this.props, name = _a.field.name, _b = _a.form, touched = _b.touched, errors = _b.errors, values = _b.values, label = _a.label, placeholder = _a.placeholder, information = _a.information, flexDirection = _a.flexDirection, caution = _a.caution, options = _a.options, onChange = _a.onChange, defaultValue = _a.defaultValue, isMulti = _a.isMulti, isDisabled = _a.isDisabled, isSmall = _a.isSmall, rest = __rest(_a, ["field", "form", "label", "placeholder", "information", "flexDirection", "caution", "options", "onChange", "defaultValue", "isMulti", "isDisabled", "isSmall"]);
        var errorMsg = "";
        if (name) {
            var error = formik_1.getIn(errors, name);
            var touch = formik_1.getIn(touched, name);
            errorMsg = touch && error ? error : null;
        }
        return (React.createElement(rebass_1.Flex, __assign({ flexDirection: "column", alignItems: "baseline", fontSize: 4 }, rest),
            React.createElement(rebass_1.Flex, { width: flexDirection === "row" ? 1 / 3 : 1, justifyContent: "space-between" }, label && (React.createElement(rebass_1.Text, { fontFamily: flexDirection === "row" ? "GraphikMedium" : "Graphik" }, label))),
            React.createElement(rebass_1.Box, { width: flexDirection === "row" ? 2 / 3 : 1 },
                React.createElement(rebass_1.Text, { textAlign: "left" },
                    React.createElement(react_select_1.default, { onChange: this.handleChange, onBlur: this.handleBlur, name: name, placeholder: placeholder || "Sélectionnez", options: options, isDisabled: isDisabled, value: options && isMulti
                            ? options.filter(function (option) {
                                return formik_1.getIn(values, name) &&
                                    formik_1.getIn(values, name).includes(option.value);
                            })
                            : options &&
                                options.filter(function (option) { return option.value === formik_1.getIn(values, name); }), isMulti: isMulti || false, theme: function (theme) { return (__assign({}, theme, { spacing: {
                                baseUnit: isSmall ? resolution / 2 : resolution,
                                menuGutter: "0.4rem"
                            }, borderRadius: "0.8rem", colors: __assign({}, theme.colors, { neutral20: errorMsg ? "#FA9682" : "hsl(0, 0%, 80%)", primary: "rgba(24, 39, 58, 0.15)", primary25: "rgba(24, 39, 58, 0.1)", primary50: "rgba(24, 39, 58, 0.1)", primary75: "#000" }) })); } })),
                errorMsg && (React.createElement(rebass_1.Text, { color: "red", mt: 2, fontWeight: 6 }, errorMsg)))));
    };
    return SelectElement;
}(React.Component));
exports.SelectElement = SelectElement;
//# sourceMappingURL=index.js.map