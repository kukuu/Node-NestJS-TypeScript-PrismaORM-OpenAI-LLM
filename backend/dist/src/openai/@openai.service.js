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
exports.OpenAIService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("@langchain/openai");
const openai_2 = require("@langchain/openai");
const pinecone_1 = require("@pinecone-database/pinecone");
let OpenAIService = class OpenAIService {
    embeddings;
    llm;
    pinecone;
    pineconeStore;
    constructor() {
        this.embeddings = new openai_2.OpenAIEmbeddings({
            apiKey: process.env.OPENAI_API_KEY || '',
            model: 'text-embedding-3-small',
            dimensions: 512,
        });
        this.llm = new openai_1.ChatOpenAI({
            model: 'gpt-4o-mini',
            apiKey: process.env.OPENAI_API_KEY || '',
        });
        this.pinecone = new pinecone_1.Pinecone({
            apiKey: process.env.PINECONE_API_KEY || '',
        });
    }
    process(prompt) {
        throw new common_1.NotImplementedException('Method not implemented');
    }
};
exports.OpenAIService = OpenAIService;
exports.OpenAIService = OpenAIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OpenAIService);
//# sourceMappingURL=@openai.service.js.map