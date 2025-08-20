import type { ChatCompletionRequest } from "../llm/llm.types.js";
import { GeminiLLM } from "../llm/GeminiLLm.js";
import { OpenAILLM } from "../llm/OpenAILLM.js";
import { AzureOpenAILLM } from "../llm/AzureOpenAILLM.js";
export class ChatService {
  private geminiLLM: GeminiLLM;
  private openAILLM: OpenAILLM;
  private azureOpenAILLM: AzureOpenAILLM;

  constructor() {
    this.geminiLLM = new GeminiLLM();
    this.openAILLM = new OpenAILLM();
    this.azureOpenAILLM = new AzureOpenAILLM();
  }

  async sendMessage(requestBody: ChatCompletionRequest) {
    try {
      let platform = requestBody.platform;

      let response;
      switch (platform) {
        case "gemini":
          response = await this.geminiLLM.generateResponse(requestBody);
          break;
        case "openai":
          response = await this.openAILLM.generateResponse(requestBody);
          break;
        case "azure_openai":
          response = await this.azureOpenAILLM.generateResponse(requestBody);
          break;
        default:
          throw new Error(`Unknown platform: ${platform}`);
      }

      return {
        response,
      };
    } catch (error) {
      console.error("Error occurred while generating response:", error);
      throw new Error("Failed to generate response");
    }
  }
}
