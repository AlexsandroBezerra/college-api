import Joi from "joi";

export const createTaskValidator = {
  title: Joi.string().required(),
  reward: Joi.number().required(),
};
