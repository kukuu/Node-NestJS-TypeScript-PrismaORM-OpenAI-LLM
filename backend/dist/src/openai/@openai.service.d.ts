export declare class OpenAIService {
    private embeddings;
    private llm;
    private pinecone;
    private pineconeStore;
    constructor();
    process(prompt: string): Promise<string>;
}
