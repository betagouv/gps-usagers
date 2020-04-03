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
export var createJourneyMutation = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation CreateJourneyMutation($input: CreateJourneyInput!) {\n    createJourney(input: $input) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n      parent {\n        id\n        name\n      }\n    }\n  }\n"], ["\n  mutation CreateJourneyMutation($input: CreateJourneyInput!) {\n    createJourney(input: $input) {\n      id\n      type\n      name\n      title\n      description\n      icon\n      color\n      order\n      isActive\n      parent {\n        id\n        name\n      }\n    }\n  }\n"])));
var JourneyCreate = /** @class */ (function (_super) {
    __extends(JourneyCreate, _super);
    function JourneyCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneyCreate.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(Mutation, { mutation: createJourneyMutation, awaitRefetchQueries: true, refetchQueries: function (props) {
                var parent = props.data.createJourney.parent;
                return [
                    {
                        query: findRootJourneysQuery,
                        fetchPolicy: "cache-and-network"
                    },
                    {
                        query: findDescendantJourneysQuery,
                        fetchPolicy: "cache-and-network",
                        variables: {
                            parentJourneyId: parent ? parent.id : null
                        }
                    }
                ];
            } }, function (mutate) {
            return children({
                createJourney: mutate
            });
        }));
    };
    return JourneyCreate;
}(React.PureComponent));
export { JourneyCreate };
var templateObject_1;
//# sourceMappingURL=index.js.map