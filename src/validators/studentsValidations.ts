import Joi from "joi";

export const createStudentsValidator = {
  registration: Joi.number().required(),
  name: Joi.string().required(),
};
