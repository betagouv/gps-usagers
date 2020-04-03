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
export var readJourneyQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ReadJourneyQuery($journeyId: String!) {\n    readJourney(journeyId: $journeyId) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n    }\n  }\n"], ["\n  query ReadJourneyQuery($journeyId: String!) {\n    readJourney(journeyId: $journeyId) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n    }\n  }\n"])));
var ReadJourney = /** @class */ (function (_super) {
    __extends(ReadJourney, _super);
    function ReadJourney() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReadJourney.prototype.render = function () {
        var _a = this.props, children = _a.children, journeyId = _a.journeyId;
        return (React.createElement(Query, { query: readJourneyQuery, variables: { journeyId: journeyId } }, function (_a) {
            var data = _a.data, loading = _a.loading;
            var readJourney = null;
            if (data && data.readJourney) {
                readJourney = data.readJourney;
            }
            return children({
                readJourney: readJourney,
                loading: loading
            });
        }));
    };
    return ReadJourney;
}(React.PureComponent));
export { ReadJourney };
var templateObject_1;
//# sourceMappingURL=index.js.map