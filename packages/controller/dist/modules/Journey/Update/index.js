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
import { Mutation } from "react-apollo";
import { findDescendantJourneysQuery } from "../FindDescendant";
import { findRootJourneysQuery } from "../FindRoot";
export var updateJourneyMutation = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation UpdateJourneyMutation($input: UpdateJourneyInput!) {\n    updateJourney(input: $input) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n      data {\n        type\n        value\n        link\n        address\n        zip\n        city\n      }\n      parent {\n        id\n        name\n      }\n    }\n  }\n"], ["\n  mutation UpdateJourneyMutation($input: UpdateJourneyInput!) {\n    updateJourney(input: $input) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n      data {\n        type\n        value\n        link\n        address\n        zip\n        city\n      }\n      parent {\n        id\n        name\n      }\n    }\n  }\n"])));
var JourneyUpdate = /** @class */ (function (_super) {
    __extends(JourneyUpdate, _super);
    function JourneyUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneyUpdate.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(Mutation, { mutation: updateJourneyMutation, awaitRefetchQueries: true, refetchQueries: function (props) {
                var id = props.data.updateJourney.parent.id;
                return [
                    {
                        query: findRootJourneysQuery,
                        fetchPolicy: "cache-and-network"
                    },
                    {
                        query: findDescendantJourneysQuery,
                        fetchPolicy: "cache-and-network",
                        variables: {
                            parentJourneyId: id
                        }
                    }
                ];
            } }, function (mutate) {
            return children({
                updateJourney: mutate
            });
        }));
    };
    return JourneyUpdate;
}(React.PureComponent));
export { JourneyUpdate };
var templateObject_1;
//# sourceMappingURL=index.js.map