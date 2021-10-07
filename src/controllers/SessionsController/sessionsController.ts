import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { authConfigs } from "../../configs";
import { prismaClient } from "../../database";
import { AppError } from "../../errors";
import { SessionsController } from "./types";

export const sessionsController: SessionsController = {
  async create(request, response) {
    const { email, password } = request.body;

    const professor = await prismaClient.professor.findFirst({
      where: { email },
    });

    if (!professor) {
      throw new AppError("Invalid email/password combination", 401);
    }

    const passwordCompare = await bcrypt.compare(password, professor.password);

    if (!passwordCompare) {
      throw new AppError("Invalid email/password combination", 401);
    }

    const token = jwt.sign({}, authConfigs.jwt.secret, {
      subject: String(professor.id),
      expiresIn: authConfigs.jwt.expiredIn,
    });

    return response.json({ token });
  },
};
