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
exports.LikesService = void 0;
const database_service_1 = require("../database/database.service");
const common_1 = require("@nestjs/common");
let LikesService = class LikesService {
    database;
    constructor(database) {
        this.database = database;
    }
    create(characterId, authorId) {
        return this.database.like.create({
            data: {
                characterId,
                authorId,
            },
        });
    }
    list(characterId, authorId) {
        return this.database.like.findMany({
            include: {
                character: true,
                author: true,
            },
            where: {
                characterId,
                authorId,
            },
        });
    }
    count(characterId, authorId) {
        return this.database.like.count({
            where: {
                characterId,
                authorId,
            },
        });
    }
};
exports.LikesService = LikesService;
exports.LikesService = LikesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], LikesService);
//# sourceMappingURL=likes.service.js.map