const Joi = require("joi");
const { validateRequest } = require("../helper/common-functions.helper");

module.exports = {
  workspaceSchema: async (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      description: Joi.string().min(5).required(),
    });

    validateRequest(req, res, next, schema, "body");
  },

  addUserWorkspaceSchema: async (req, res, next) => {
    const schema = Joi.object({
      workspaceId: Joi.string().guid().required(),
      userId: Joi.string().guid().required(),
    });

    validateRequest(req, res, next, schema, "body");
  },

  updateWorkspaceSchema: async (req, res, next) => {
    const schema = Joi.object({
      description: Joi.string().min(5).required(),
    });

    validateRequest(req, res, next, schema, "body");
  },

  updateDesignationWorkspaceSchema: async (req, res, next) => {
    const schema = Joi.object({
      designationId: Joi.string().guid().required(),
      userId: Joi.string().guid().required(),
    });

    validateRequest(req, res, next, schema, "body");
  },

  removeUserWorkspaceSchema: async (req, res, next) => {
    const schema = Joi.object({
      userId: Joi.string().guid().required(),
    });

    validateRequest(req, res, next, schema, "body");
  },
};