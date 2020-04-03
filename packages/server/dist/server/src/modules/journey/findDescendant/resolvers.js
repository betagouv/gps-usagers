"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Journey_1 = require("../../../entity/Journey");
exports.resolvers = {
    Query: {
        findDescendantJourneys: (_, { parentJourneyId }, {}) => __awaiter(this, void 0, void 0, function* () {
            const currentParent = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .select("journey")
                .from(Journey_1.Journey, "journey")
                .where("journey.id = :id", {
                id: parentJourneyId
            })
                .getOne();
            const manager = typeorm_1.getManager();
            const trees = yield manager.getTreeRepository(Journey_1.Journey);
            if (currentParent) {
                console.log("WOONIES LOG: currentParent", currentParent);
                const descendant = yield trees.findDescendantsTree(currentParent);
                console.log("WOONIES LOG: descendant", descendant);
                const ancestors = yield trees.findAncestors(currentParent);
                const parent = yield trees
                    .createAncestorsQueryBuilder("journey", "journeyClosure", currentParent)
                    .andWhere("journey.id != :id", { id: parentJourneyId })
                    .getOne();
                return Object.assign({}, descendant, { children: descendant.children.sort((a, b) => a.order > b.order ? 1 : -1), parent, ancestors: ancestors.reverse() });
            }
            else {
                return null;
            }
        })
    }
};
//# sourceMappingURL=resolvers.js.map