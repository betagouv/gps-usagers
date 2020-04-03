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
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @ts-ignore
import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
export var findDescendantJourneysQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query FindDescendantJourneysQuery($parentJourneyId: String) {\n    findDescendantJourneys(parentJourneyId: $parentJourneyId) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n      data {\n        type\n        value\n        link\n        address\n        zip\n        city\n      }\n      special {\n        type\n        value\n        link\n        address\n        zip\n        city\n      }\n      parent {\n        id\n        name\n      }\n      ancestors {\n        id\n        name\n      }\n      children {\n        id\n        type\n        name\n        title\n        description\n        icon\n        color\n        order\n        isActive\n        data {\n          type\n          value\n          link\n          address\n          zip\n          city\n        }\n      }\n    }\n  }\n"], ["\n  query FindDescendantJourneysQuery($parentJourneyId: String) {\n    findDescendantJourneys(parentJourneyId: $parentJourneyId) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n      data {\n        type\n        value\n        link\n        address\n        zip\n        city\n      }\n      special {\n        type\n        value\n        link\n        address\n        zip\n        city\n      }\n      parent {\n        id\n        name\n      }\n      ancestors {\n        id\n        name\n      }\n      children {\n        id\n        type\n        name\n        title\n        description\n        icon\n        color\n        order\n        isActive\n        data {\n          type\n          value\n          link\n          address\n          zip\n          city\n        }\n      }\n    }\n  }\n"])));
var FindDescendantJourneys = /** @class */ (function (_super) {
    __extends(FindDescendantJourneys, _super);
    function FindDescendantJourneys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FindDescendantJourneys.prototype.render = function () {
        var _a = this.props, children = _a.children, parentJourneyId = _a.parentJourneyId;
        return (React.createElement(Query, { query: findDescendantJourneysQuery, variables: { parentJourneyId: parentJourneyId } }, function (_a) {
            var data = _a.data, loading = _a.loading;
            var findDescendantJourneys = null;
            if (data && data.findDescendantJourneys) {
                findDescendantJourneys = data.findDescendantJourneys;
            }
            return children({
                findDescendantJourneys: findDescendantJourneys,
                loading: loading
            });
        }));
    };
    return FindDescendantJourneys;
}(React.PureComponent));
export { FindDescendantJourneys };
var templateObject_1;
//# sourceMappingURL=index.js.map