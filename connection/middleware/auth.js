import jwt from "jsonwebtoken";
import userModel from "../../models/userModel.js";
import { decrypt } from "./encyptor.js";

export const auth = async (req, res, next) => {
  try {
    // get the token from the authorization header
    const token = await req.headers.authorization.split(" ")[1];

    // check for a matchin the token name
    const decodedToken = await jwt.verify(token, "LOGIN-TOKEN");

    // retrieve the user details
    const user = await decodedToken;

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({
      error,
    });
  }
};

export const localVariables = (req, res, next) => {
  req.app.locals = {
    OTP: null,
    PASS_TOKEN: null,
    VERTOKEN: null,
    resetSession: false,
    IV: null,
    PASS_SECRET: null,
  };

  next();
};

export const resetCheck = (req, res, next) => {
  if (req.app.locals.PASS_SECRET === null) {
    res.status(422).send({
      message: "This action is unauthorized",
    });
  }

  next();
};

/**
 * this validates the token sent for the password reset
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const passwordTokenCheck = async (req, res, next) => {
  const { token } = req.query;

  if (req.app.locals.IV === null || req.app.locals.PASS_SECRET === null) {
    res.status(422).send({
      message: "This action is unauthorized",
    });
  }
  try {
    // decrypt and verify the token
    const iv = req.app.locals.IV;
    const secret = req.app.locals.PASS_SECRET;
    let valueParams = await decrypt(token, secret, iv);

    req.temp_user = await valueParams;

    next();
  } catch (error) {
    res.status(503).send({
      message: "Token Verification Error",
      error,
      varialbles: {},
    });
  }

  next();
};

export const regVerificationCheck = async (req, res, next) => {
  try {
    const { email } = req.body;

    await userModel
      .findOne({ email: email })
      .then((user) => {
        if (user?.active === 1) {
          next();
        } else {
          res.status(422).send({
            message: "Incomplete user verification",
          });
          next();
        }
      })
      .catch((error) => {
        return res.status(400).send({
          message: "User does not exist",
        });
      });
  } catch (error) {
    return res.status(503).send({
      error,
    });
  }
};
