"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { FindDescendantJourneysQuery_findDescendantJourneys } from "@gpsu/controller";
var React = require("react");
var styled_components_1 = require("styled-components");
var __1 = require("../../../");
var StyledCard = styled_components_1.default(__1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 1rem;\n  border-radius: 0.8rem;\n  cursor: pointer;\n  color: white;\n  margin-left: 2rem;\n  margin-top: 0.7rem;\n  background-color: #efefef;\n"], ["\n  width: 100%;\n  padding: 1rem;\n  border-radius: 0.8rem;\n  cursor: pointer;\n  color: white;\n  margin-left: 2rem;\n  margin-top: 0.7rem;\n  background-color: #efefef;\n"])));
exports.Special = function (_a) {
    var data = _a.data;
    return (React.createElement(StyledCard, null,
        React.createElement(__1.Flex, { m: 3, flexDirection: "column" }, data &&
            data.map(function (_a) {
                var type = _a.type, value = _a.value, link = _a.link, address = _a.address, zip = _a.zip, city = _a.city;
                if (type === "title") {
                    return (React.createElement(__1.Heading, { mb: 4, fontWeight: 1, color: "darkGray", fontSize: "3rem" }, value));
                }
                if (type === "description") {
                    return (React.createElement(__1.Text, { color: "black", lineHeight: "1.8", my: 3, fontWeight: 1 }, value));
                }
                if (type === "address") {
                    return (React.createElement(__1.Flex, { my: 3, width: 1, justifyContent: "center", flexDirection: "column", alignItems: "center" },
                        React.createElement(__1.Text, { fontWeight: "bold", fontSize: 6 }, value),
                        React.createElement(__1.Text, { fontWeight: 5 }, address),
                        React.createElement(__1.Text, { fontWeight: 5 }, zip),
                        React.createElement(__1.Text, { fontWeight: 5 }, city)));
                }
                if (type === "phone") {
                    return (React.createElement("a", { href: "tel:" + value, target: "_top" },
                        React.createElement(__1.Text, { color: "blue", lineHeight: "1.8", my: 3, fontSize: 7, fontWeight: "bold" }, value)));
                }
                if (type === "link") {
                    return (React.createElement("a", { href: link, target: "_top" },
                        React.createElement(__1.Text, { color: "blue", lineHeight: "1.8", my: 3, fontSize: 7, fontWeight: "bold" }, value)));
                }
                if (type === "button") {
                    return (React.createElement("a", { href: link, target: "_top" },
                        React.createElement(__1.Button, { variant: "blue", my: 3 }, value)));
                }
                if (type === "space") {
                    return React.createElement("br", null);
                }
                return React.createElement(React.Fragment, null);
            }))));
};
var templateObject_1;
//# sourceMappingURL=index.js.map