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
        const openAIApiKey = process.env.OPENAI_API_KEY;
        const pineconeApiKey = process.env.PINECONE_API_KEY;
        if (openAIApiKey) {
            this.embeddings = new openai_2.OpenAIEmbeddings({
                apiKey: openAIApiKey,
                model: 'text-embedding-3-small',
                dimensions: 512,
            });
            this.llm = new openai_1.ChatOpenAI({
                model: 'gpt-4o-mini',
                apiKey: openAIApiKey,
            });
        }
        if (pineconeApiKey) {
            this.pinecone = new pinecone_1.Pinecone({
                apiKey: pineconeApiKey,
            });
        }
    }
    async process(prompt) {
        return this.fallbackResponse(prompt);
    }
    fallbackResponse(prompt) {
        const lowerPrompt = prompt.toLowerCase();
        if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('hey')) {
            return 'Hello! I can help you with Star Wars character information.';
        }
        else if (lowerPrompt.includes('star wars') || lowerPrompt.includes('character')) {
            return 'I can provide information about Star Wars characters from the database.';
        }
        else if (lowerPrompt.includes('help')) {
            return `I can help you search through Star Wars characters. Try asking about:
• Character heights and attributes
• Gender information
• Appearance details
• Character lists

Note: Advanced AI features are currently disabled.`;
        }
        else {
            return 'I understand you\'re asking about Star Wars characters. For detailed responses, please enable AI features with an API key.';
        }
    }
};
exports.OpenAIService = OpenAIService;
exports.OpenAIService = OpenAIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OpenAIService);
//# sourceMappingURL=openai.service.js.map