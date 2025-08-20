export interface Tool {
  type: "function";
  function: {
    name: string;
    description?: string;
    parameters?: Record<string, any>; // JSON Schema
  };
}

export interface ToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string; // JSON string of arguments
  };
}

interface BaseChatMessage {
  name?: string; 
}

export interface SystemChatMessage extends BaseChatMessage {
  role: "system";
  content: string; 
}

export interface UserChatMessage extends BaseChatMessage {
  role: "user";
  content: string;
}

export interface AssistantChatMessage extends BaseChatMessage {
  role: "assistant";
  content: string | null;
  tool_calls?: ToolCall[];
}

export interface ToolChatMessage extends BaseChatMessage {
  role: "tool";
  tool_call_id: string | null;
  content: string | null;
}

export type ChatMessage =
  | SystemChatMessage
  | UserChatMessage
  | AssistantChatMessage
  | ToolChatMessage;

export interface ChatCompletionRequest {
  model: string;
  platform: string;
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  stop?: string | string[];
  stream?: boolean;
  tools?: Tool[];
  tool_choice?:
    | "none"
    | "auto"
    | { type: "function"; function: { name: string } };
}
