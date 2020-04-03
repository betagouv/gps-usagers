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
class listingUser1531438091342 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "listings" DROP CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7"`);
            yield queryRunner.query(`ALTER TABLE "listings" RENAME COLUMN "userId" TO "ownerId"`);
            yield queryRunner.query(`ALTER TABLE "listings" ALTER COLUMN "ownerId" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "listings" ADD CONSTRAINT "FK_c3dc0ba6b57c545899ab3187ea9" FOREIGN KEY ("ownerId") REFERENCES "users"("id")`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "listings" DROP CONSTRAINT "FK_c3dc0ba6b57c545899ab3187ea9"`);
            yield queryRunner.query(`ALTER TABLE "listings" ALTER COLUMN "ownerId" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "listings" RENAME COLUMN "ownerId" TO "userId"`);
            yield queryRunner.query(`ALTER TABLE "listings" ADD CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.listingUser1531438091342 = listingUser1531438091342;
//# sourceMappingURL=1531438091342-ListingUser.js.map