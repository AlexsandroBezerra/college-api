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

    const { id: refreshToken } = await prismaClient.token.create({
      data: { professorId: professor.id },
      select: { id: true },
    });

    return response.json({ token, refreshToken });
  },

  async update(request, response) {
    const id = request.user?.id;
    const { refreshToken } = request.body;

    const isValidToken = await prismaClient.token.findFirst({
      where: { id: refreshToken, professorId: id },
    });

    if (!isValidToken) {
      throw new AppError("Invalid refreshToken", 401);
    }

    await prismaClient.token.delete({
      where: {
        id: refreshToken,
      },
    });

    const token = jwt.sign({}, authConfigs.jwt.secret, {
      subject: String(id),
      expiresIn: authConfigs.jwt.expiredIn,
    });

    const { id: newRefreshToken } = await prismaClient.token.create({
      data: { professorId: id as number },
      select: { id: true },
    });

    return response.json({
      token,
      refreshToken: newRefreshToken,
    });
  },
};
