import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function bodyValidator(schemaObject: Joi.PartialSchemaMap<any>) {
  const schema = Joi.object(schemaObject);

  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  return (request: Request, response: Response, next: NextFunction) => {
    const { error, value } = schema.validate(request.body, options);

    if (!error) {
      request.body = value;
      return next();
    }

    return response.status(422).json({
      status: "error",
      message: "Validation errors",
      fields: error.details,
    });
  };
}
