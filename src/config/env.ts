import dotenv from 'dotenv'
dotenv.config()
export const config = {
  gemini: {
    apiKey: process.env.GEMINI_API_KEY || "",
    apiUrl: process.env.GEMINI_API_URL || "",
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY || "",
    apiUrl: process.env.OPENAI_API_URL || "",
  },
  azure: {
    apiKey: process.env.AZURE_API_KEY || "",
    apiUrl: process.env.AZURE_API_URL || "",
  },
  tokenSecretKey: process.env.TOKEN_SECRET_KEY || "",
  mongoUri: process.env.MONGO_URI || "",
};
