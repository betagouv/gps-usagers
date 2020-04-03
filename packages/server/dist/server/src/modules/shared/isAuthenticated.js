"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = (session) => {
    if (!session.userId) {
        throw new Error("not authenticated");
    }
};
//# sourceMappingURL=isAuthenticated.js.map