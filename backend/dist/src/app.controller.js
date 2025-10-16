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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const characters_service_1 = require("./characters/characters.service");
const likes_service_1 = require("./likes/likes.service");
const openai_service_1 = require("./openai/openai.service");
const api_key_guard_1 = require("./guards/api-key.guard");
const users_service_1 = require("./users/users.service");
let AppController = class AppController {
    characters;
    likes;
    openai;
    users;
    constructor(characters, likes, openai, users) {
        this.characters = characters;
        this.likes = likes;
        this.openai = openai;
        this.users = users;
    }
    createCharacter(characterData) {
        return this.characters.create(characterData);
    }
    listCharacters() {
        return this.characters.list();
    }
    likeCharacter(id) {
        return this.likes.create(parseInt(id), 1);
    }
    listLikes(id) {
        return this.likes.list(parseInt(id), 1);
    }
    countLikes(id) {
        return this.likes.count(parseInt(id), 1);
    }
    listUserLikes(id) {
        return this.users.listLikes(parseInt(id));
    }
    async search(prompt) {
        const response = await this.openai.process(prompt);
        return { content: response };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('characters'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createCharacter", null);
__decorate([
    (0, common_1.Get)('characters'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "listCharacters", null);
__decorate([
    (0, common_1.Post)('characters/:id/like'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "likeCharacter", null);
__decorate([
    (0, common_1.Get)('characters/:id/likes'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "listLikes", null);
__decorate([
    (0, common_1.Get)('characters/:id/likes/count'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "countLikes", null);
__decorate([
    (0, common_1.Get)('users/:id/likes'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "listUserLikes", null);
__decorate([
    (0, common_1.Post)('search'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Body)('prompt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "search", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [characters_service_1.CharactersService,
        likes_service_1.LikesService,
        openai_service_1.OpenAIService,
        users_service_1.UsersService])
], AppController);
//# sourceMappingURL=app.controller.js.map