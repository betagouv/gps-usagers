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
const DataLoader = require("dataloader");
const User_1 = require("../entity/User");
const batchUsers = (ids) => __awaiter(this, void 0, void 0, function* () {
    const users = yield User_1.User.findByIds(ids);
    const userMap = {};
    users.forEach(u => {
        userMap[u.id] = u;
    });
    return ids.map(id => userMap[id]);
});
exports.userLoader = () => new DataLoader(batchUsers);
//# sourceMappingURL=UserLoader.js.map