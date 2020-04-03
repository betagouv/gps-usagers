"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const embed_1 = require("./embed");
let Journey = class Journey extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Journey.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        default: "journey"
    }),
    __metadata("design:type", String)
], Journey.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255, nullable: true }),
    __metadata("design:type", String)
], Journey.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255, nullable: true }),
    __metadata("design:type", String)
], Journey.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100, nullable: true }),
    __metadata("design:type", String)
], Journey.prototype, "icon", void 0);
__decorate([
    typeorm_1.Column("text", { nullable: true }),
    __metadata("design:type", String)
], Journey.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: true }),
    __metadata("design:type", Boolean)
], Journey.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        default: "blue"
    }),
    __metadata("design:type", String)
], Journey.prototype, "color", void 0);
__decorate([
    typeorm_1.Column({ type: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], Journey.prototype, "data", void 0);
__decorate([
    typeorm_1.Column({ type: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], Journey.prototype, "special", void 0);
__decorate([
    typeorm_1.Column("smallint", { default: 1 }),
    __metadata("design:type", Number)
], Journey.prototype, "order", void 0);
__decorate([
    typeorm_1.TreeChildren(),
    __metadata("design:type", Array)
], Journey.prototype, "children", void 0);
__decorate([
    typeorm_1.TreeParent(),
    __metadata("design:type", Journey)
], Journey.prototype, "parent", void 0);
__decorate([
    typeorm_1.Column(() => embed_1.Date),
    __metadata("design:type", embed_1.Date)
], Journey.prototype, "date", void 0);
Journey = __decorate([
    typeorm_1.Entity("journeys"),
    typeorm_1.Tree("closure-table")
], Journey);
exports.Journey = Journey;
//# sourceMappingURL=Journey.js.map