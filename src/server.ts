import "dotenv/config";
import express from "express";
import "express-async-errors";

import { routes } from "./routes";
import { errorHandler } from "./errors";

const app = express();
const PORT = Number(process.env.API_PORT) || 3333;

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
