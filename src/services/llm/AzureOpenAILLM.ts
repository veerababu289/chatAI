import type { ChatCompletionRequest } from "./llm.types.js";

export class AzureOpenAILLM {
  async generateResponse(requestBody: ChatCompletionRequest): Promise<string> {
    // Logic to generate response using Azure OpenAI LLM
    return "This is a response from the AzureOpenAILLM.";
  }
}
