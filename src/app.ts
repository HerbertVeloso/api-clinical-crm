import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";

import { accountRoutes } from "./routes/AccountRoutes";
import { usersRoutes } from "./routes/UsersRoutes";
import { patientsRoutes } from "./routes/PatientsRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(accountRoutes);
app.use(usersRoutes);
app.use(patientsRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

export { app };
