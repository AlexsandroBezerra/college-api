import "dotenv/config";
import express from "express";
import { PrismaClient } from ".prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = Number(process.env.API_PORT) || 3333;

app.use(express.json());

app.get("/professors", async (_, response) => {
  const professors = await prisma.professor.findMany({
    select: {
      id: true,
      email: true,
      // password: true,
    },
  });

  return response.json(professors);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
