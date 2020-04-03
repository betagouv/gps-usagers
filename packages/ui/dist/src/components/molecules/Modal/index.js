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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var md_1 = require("react-icons/md");
var ReactModal = require("react-modal");
var styled_components_1 = require("../../../theme/styled-components");
var StyledClose = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  text-align: right;\n  position: fixed;\n  right: 2rem;\n"], ["\n  cursor: pointer;\n  text-align: right;\n  position: fixed;\n  right: 2rem;\n"])));
var customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        zIndex: "2100"
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1500",
        borderRadius: "0.8rem",
        overflow: "unset",
        background: "white",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "16% 2%"
    }
};
var ModalExternal = /** @class */ (function (_super) {
    __extends(ModalExternal, _super);
    function ModalExternal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: _this.props.isOpen || false
        };
        _this.closeModal = function () {
            var onClose = _this.props.onClose;
            _this.setState(function () { return ({ isOpen: false }); });
            onClose();
        };
        return _this;
    }
    ModalExternal.prototype.render = function () {
        var isOpen = this.state.isOpen;
        var children = this.props.children;
        return (React.createElement(ReactModal, { style: customStyles, isOpen: isOpen, onRequestClose: this.closeModal, ariaHideApp: false },
            React.createElement(React.Fragment, null,
                React.createElement(StyledClose, { onClick: this.closeModal },
                    React.createElement(md_1.MdClose, { size: 25 }))),
            children));
    };
    return ModalExternal;
}(React.Component));
exports.ModalExternal = ModalExternal;
var templateObject_1;
//# sourceMappingURL=index.js.map