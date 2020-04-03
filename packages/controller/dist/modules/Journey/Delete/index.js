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
export var deleteJourneyMutation = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation DeleteJourneyMutation($journeyId: String!) {\n    deleteJourney(journeyId: $journeyId) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n      parent {\n        id\n      }\n    }\n  }\n"], ["\n  mutation DeleteJourneyMutation($journeyId: String!) {\n    deleteJourney(journeyId: $journeyId) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n      parent {\n        id\n      }\n    }\n  }\n"])));
var JourneyDelete = /** @class */ (function (_super) {
    __extends(JourneyDelete, _super);
    function JourneyDelete() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneyDelete.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(Mutation, { mutation: deleteJourneyMutation, awaitRefetchQueries: true, refetchQueries: function (props) {
                var parent = props.data.deleteJourney.parent;
                var queries = [
                    {
                        query: findRootJourneysQuery,
                        fetchPolicy: "cache-and-network"
                    }
                ];
                if (parent && parent.id) {
                    queries = queries.concat([
                        {
                            query: findDescendantJourneysQuery,
                            fetchPolicy: "cache-and-network",
                            variables: {
                                parentJourneyId: parent.id
                            }
                        }
                    ]);
                }
                return queries;
            } }, function (mutate) {
            return children({
                deleteJourney: mutate
            });
        }));
    };
    return JourneyDelete;
}(React.PureComponent));
export { JourneyDelete };
var templateObject_1;
//# sourceMappingURL=index.js.map