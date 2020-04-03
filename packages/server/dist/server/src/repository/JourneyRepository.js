"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const Journey_1 = require("../entity/Journey");
let JourneyRepository = class JourneyRepository extends typeorm_1.Repository {
    findJourney() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createQueryBuilder()
                .createQueryBuilder()
                .select("journeys")
                .from(Journey_1.Journey, "journeys")
                .getMany();
        });
    }
    findJourneyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createQueryBuilder()
                .createQueryBuilder()
                .select("journeys")
                .from(Journey_1.Journey, "journeys")
                .where("id = :id", { id })
                .getOne();
        });
    }
    updateJourney(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createQueryBuilder()
                .update(Journey_1.Journey)
                .set(data)
                .where("id = :id", { id })
                .returning("*")
                .execute();
        });
    }
    deleteJourney(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createQueryBuilder()
                .delete()
                .from(Journey_1.Journey)
                .where("id = :id", { id })
                .execute();
        });
    }
};
JourneyRepository = __decorate([
    typeorm_1.EntityRepository(Journey_1.Journey)
], JourneyRepository);
exports.JourneyRepository = JourneyRepository;
//# sourceMappingURL=JourneyRepository.js.map