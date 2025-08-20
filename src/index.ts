import express, { type Express } from "express";
import { connectToDatabase } from "./config/database.ts";
const app: Express = express();
const PORT = process.env.PORT || 3000;

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  