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
        readJourney: (_, { journeyId }, {}) => __awaiter(this, void 0, void 0, function* () {
            return typeorm_1.getConnection()
                .createQueryBuilder()
                .select("journey")
                .from(Journey_1.Journey, "journey")
                .where("journey.id = :id", { id: journeyId })
                .getOne();
        })
    }
};
//# sourceMappingURL=resolvers.js.map