import type { ChatCompletionRequest } from "./llm.types.js";
import { config } from "../../config/env.ts";
import { GoogleGenAI, type GenerateContentParameters } from "@google/genai";

export class GeminiLLM {
  private client: GoogleGenAI;

  constructor() {
    if (!config?.gemini?.apiKey) {
      throw new Error("Gemini API key is not defined");
    }
    this.client = new GoogleGenAI({
      apiKey: config.gemini.apiKey,
    });
  }

  async generateResponse(requestBody: ChatCompletionRequest): Promise<any> {
    const googleParams: GenerateContentParameters = {
      model: "gemini-2.0-flash-001",
      contents: "Why is the sky blue?",
    };

    let response = await this.client.models.generateContent(googleParams);
    console.log("Gemini LLM response:", response);

    return response.contents[0].text || "No response generated";
  }
}
