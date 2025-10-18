import { Injectable, NotImplementedException } from '@nestjs/common';
import { ChatOpenAI } from '@langchain/openai';
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { Pinecone } from '@pinecone-database/pinecone';

@Injectable()
export class OpenAIService {
  private embeddings: OpenAIEmbeddings;
  private llm: ChatOpenAI;
  private pinecone: Pinecone;
  private pineconeStore: PineconeStore;

  constructor() {
    // Only initialize if API keys are available
    const openAIApiKey = process.env.OPENAI_API_KEY;
    const pineconeApiKey = process.env.PINECONE_API_KEY;

    if (openAIApiKey) {
      this.embeddings = new OpenAIEmbeddings({
        apiKey: openAIApiKey,
        model: 'text-embedding-3-small',
        dimensions: 512,
      });

      this.llm = new ChatOpenAI({
        model: 'gpt-4o-mini',
        apiKey: openAIApiKey,
      });
    }

    if (pineconeApiKey) {
      this.pinecone = new Pinecone({
        apiKey: pineconeApiKey,
      });
    }
  }

  async process(prompt: string): Promise<string> {
    // Simple fallback implementation without OpenAI
    return this.fallbackResponse(prompt);
  }

  private fallbackResponse(prompt: string): string {
    const lowerPrompt = prompt.toLowerCase();

    // Simple keyword-based responses
    if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('hey')) {
      return 'Hello! I can help you with Star Wars character information.';
    } else if (lowerPrompt.includes('star wars') || lowerPrompt.includes('character')) {
      return 'I can provide information about Star Wars characters from the database.';
    } else if (lowerPrompt.includes('help')) {
      return `I can help you search through Star Wars characters. Try asking about:
• Character heights and attributes
• Gender information
• Appearance details
• Character lists

Note: Advanced AI features are currently disabled.`;
    } else {
      return 'I understand you\'re asking about Star Wars characters. For detailed responses, please enable AI features with an API key.';
    }
  }
}