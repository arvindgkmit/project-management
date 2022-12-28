const { commonErrorHandler } = require("../helper/error-handler.helper");
const userService = require("../services/user.service");

const createUser = async (req, res, next) => {
  try {
    const { body: payload } = req;
    const response = await userService.createUser(payload);
    if (response.error) {
      throw new Error(response.error.message);
    }
    res.data = response;
    next();
  } catch (error) {
    commonErrorHandler(req, res, error.message, 400, error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { body: payload } = req;
    const response = await userService.loginUser(payload);
    res.data = response;
    next();
  } catch (error) {
    commonErrorHandler(req, res, error.message, 400, error);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const { query } = req;
    const data = await userService.getAllUser(query);
    res.data = data;
    next();
  } catch (error) {
    commonErrorHandler(req, res, error.message, 400, error);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const { params } = req;
    const payload = {
      userId: params.userId,
    };

    const data = await userService.getSingleUser(payload);
    res.data = data;
    next();
  } catch (error) {
    commonErrorHandler(req, res, error.message, 400, error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const { body: payload, user } = req;
    const data = await userService.resetPassword(payload, user);
    res.data = data;
    next();
  } catch (error) {
    commonErrorHandler(req, res, error.message, 400, error);
  }
};

const forgetPassword = async (req, res, next) => {
  try {
    const { body: payload } = req;
    const data = await userService.forgetPassword(payload);
    res.data = data;
    next();
  } catch (error) {
    commonErrorHandler(req, res, error.message, 400, error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { body: payload } = req.body;

    const data = await services.userService.refreshToken(payload);
    res.data = data;
    next();
  } catch (error) {
    commonErrorHandler(req, res, error.message, 400, error);
  }
};

module.exports = {
  createUser,
  loginUser,
  getAllUser,
  getSingleUser,
  resetPassword,
  forgetPassword,
  refreshToken,
};
