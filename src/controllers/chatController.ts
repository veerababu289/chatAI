import type { Request, Response } from "express";
import type { ChatCompletionRequest } from "../services/llm/llm.types.js";
import { StatusCodes } from "http-status-codes";
import { ChatService } from "../services/chat/chatService.js";

const chatService = new ChatService();

export const ChatController = {
  getMessages: async (req: Request, res: Response) => {
    // Logic to get chat messages
  },

  sendMessage: async (req: Request, res: Response) => {
    try {
      const requestBody = req.body as ChatCompletionRequest;
      const response = await chatService.sendMessage(requestBody);
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error("Error occurred while sending message:", error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to send message" });
    }
  },
};
