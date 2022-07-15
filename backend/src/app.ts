// Imports
import express, { Application } from "express";
import { config } from "dotenv";
import cors from "cors";
import dbConnect from "./db";
import { errorHandler, httpErrorHandler } from "./errorHandlers";
import indexRoutes from "./routes/indexRoutes";

// Initialize App
config();
dbConnect();
const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", indexRoutes);

// Error Handlers
app.use(errorHandler);
app.use(httpErrorHandler);

// Server
export const port: string | number = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port: ${port}`));

// npm i express dotenv cors mongoose http-errors
// npm i -D typescript ts-node nodemon @types/express @types/cors @types/mongoose @types/node @types/http-errors
// npx tsc --init
