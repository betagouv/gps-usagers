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
const JourneyRepository_1 = require("../../../repository/JourneyRepository");
exports.resolvers = {
    Mutation: {
        updateJourney: (_, _a) => { var _b, id, rest; return __awaiter(this, void 0, void 0, function* () {
            _b = _a.input, { id } = _b, rest = __rest(_b, ["id"]);
            const { raw: [journey] } = yield typeorm_1.getCustomRepository(JourneyRepository_1.JourneyRepository).updateJourney(id, rest);
            const manager = typeorm_1.getManager();
            const trees = yield manager.getTreeRepository(Journey_1.Journey);
            const parent = yield trees
                .createAncestorsQueryBuilder("journey", "journeyClosure", journey)
                .getOne();
            return Object.assign({}, journey, { parent });
        }); }
    }
};
//# sourceMappingURL=resolvers.js.map