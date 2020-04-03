"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Journey_1 = require("../../../entity/Journey");
exports.resolvers = {
    Mutation: {
        createJourney: (_, _a) => __awaiter(this, void 0, void 0, function* () {
            var data = __rest(_a.input, []);
            const { parent } = data;
            const currentParent = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .select("journey")
                .from(Journey_1.Journey, "journey")
                .where("journey.id = :id", {
                id: parent
            })
                .getOne();
            console.log("WOONIES LOG: currentParent", currentParent);
            const manager = typeorm_1.getManager();
            const journey = yield manager.getRepository(Journey_1.Journey).save(Object.assign({}, data, { parent: currentParent || null }));
            console.log("WOONIES LOG: journey", journey);
            const trees = yield manager.getTreeRepository(Journey_1.Journey);
            const parentAncestor = yield trees
                .createAncestorsQueryBuilder("journey", "journeyClosure", journey)
                .getOne();
            return Object.assign({}, journey, { parent: parentAncestor });
        })
    }
};
//# sourceMappingURL=resolvers.js.map