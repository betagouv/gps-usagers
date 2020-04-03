"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_shield_1 = require("graphql-shield");
const isAuthenticated = graphql_shield_1.rule()((_, __, context) => {
    return !!context.session.userId;
});
exports.middlewareShield = graphql_shield_1.shield({
    Mutation: {
        createListing: isAuthenticated,
        deleteListing: isAuthenticated
    }
});
//# sourceMappingURL=shield.js.map