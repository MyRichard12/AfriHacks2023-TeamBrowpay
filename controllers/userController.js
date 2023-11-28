import mongoose from "mongoose";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import { encrypt, randomizer } from "../connection/middleware/encyptor.js";
import crypto from 'crypto'

export const registerUser = async (req, res) => {
  try {
    const { formData } = req.body;

    const salter = await bcrypt.genSalt(10);

    const result = await bcrypt.hash(formData.password, salter);

    let encForm = { ...formData, password: result };

    const dataInstance = new userModel({ ...encForm });

    await dataInstance.save();

    const token = jwt.sign(
      {
        id: dataInstance._id,
        email: dataInstance.email,
      },
      "LOGIN-TOKEN",
      {
        expiresIn: "24hrs",
      }
    );

    res.status(200).json({
      data: {
        user: dataInstance,
        token,
      },
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      error: err.message || "Something went wrong",
      message: "Email already exists",
    });
  }
};

export const genRegToken = async (req, res) => {
  try {
    const { email } = req.query;

    if (email != null) {
      await userModel
        .findOne({ email: email })
        .then(async (user) => {
          if (user?.active === 0) {
            req.app.locals.VERTOKEN = await otpGenerator.generate(18, {
              specialChars: false,
            });

            res.status(200).json({
              token: req.app.locals.VERTOKEN,
            });
          }
          res.status(201).send({
            message: "Verification status cannot be fetched",
          });
        })
        .catch((error) => {
          return res.status(404).send({
            message: "user not found",
            error,
          });
        });
    } else {
      res.status(400).json({
        message: email,
      });
    }
  } catch (error) {
    return res.status(503).send({
      error,
    });
  }
};

export const verifyRegToken = async (req, res) => {
  try {
    const { token, email } = req.query;
    if (req.app.locals.VERTOKEN === token) {
      req.app.locals.VERTOKEN = null;
      req.app.locals.resetSession = true;

      await userModel
        .findOne({ email })
        .then(async (user) => {
          userModel.updateOne(
            { email: user.email },
            { active: 1 },
            function (err, data) {
              if (err) throw err;
              return res.status(200).send({
                message: "User Activated Successfully!",
              });
            }
          );
        })
        .catch((error) => {
          res.status(500).send({
            error,
          });
        });

      return res.status(201).send({
        message: "Verification Successful",
      });
    }
  } catch (error) {}
};

export const loginUser = async (req, res) => {
  try {
    await userModel
      .findOne({ email: req.body.email })
      .then(async (user) => {
        await bcrypt
          .compare(req.body.password, user.password)
          .then((passwordCheck) => {
            if (!passwordCheck) {
              return res.status(400).send({
                message: "passwords does not match",
              });
            }
            // create JWT
            const token = jwt.sign(
              {
                id: user._id,
                email: user.email,
              },
              "LOGIN-TOKEN",
              {
                expiresIn: "24h",
              }
            );

            res.status(200).json({
              status: true,
              message: "Login Successful",
              data: { email: user.email, token },
            });
          })
          .catch((e) => {
            res.status(400).send({
              message: "password does not match",
              e,
            });
          });
      })
      .catch((e) => {
        res.status(404).send({
          message: "User does not exist",
          e,
        });
      });
  } catch (error) {
    res.status(503).send({
      error,
    });
  }
};

export const generateOTP = async (req, res) => {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  res.status(201).send({
    code: req.app.locals.OTP,
  });
};

export const verifyOTP = async (req, res) => {
  const { code } = req.query;

  if (req.app.locals.OTP === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;

    return res.status(201).send({
      message: "Verification Successful",
    });
  }

  return res.status(400).send({
    error: "invalid OTP",
  });
};

export const createResetSession = async (req, res) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false; //allow access once

    return res.status(201).send({ message: "access granted" });
  }

  return res.status(440).send({ error: "Session expired" });
};


// generate or sign a token that warrants a password reset session
export const initiatePasswordReset = async (req, res) => {
  try {
    // check if the user exists first
    const { email } = req.query

    await userModel.findOne({email}).then((user) => {

      // const token = jwt.sign({ email: user.email, name: user.name }, "PASSWORDRESETER", { expiresIn: "5m" })

      // add five minutes
      try{
        const expiration = Math.floor(Date.now() / 1000) + (5 * 60); 

      let value = {
        email: user.email,
        name: user.name,
        expiresIn: expiration
      }

      let iv = crypto.randomBytes(16)
      let secretKey = randomizer(32);

      let token = encrypt(value, secretKey, iv)

      req.app.locals = {
        IV: iv, PASS_SECRET: secretKey
      }
      

      res.status(200).send({
        message: 'User Found Successfully',
        token
      })
    }catch(error){
      res.status(500).send({
        message: 'Tokenization Error',
        error, secretKey
      })
    }
      
    }).catch(error => {
      res.status(404).send({
        error,
        message: 'User not found'
      })
    })
    
  } catch (error) {
    res.status(503).send({
      message: 'Service Unavailable'
    })
  }
}

export const verifyPassToken = async (req, res) => {

  try{
  // check if the token has not expired
  const {expiresIn} = req.tempUser
  const currentTime = Math.floor(Date.now() /1000)
  if(expiresIn < currentTime){
    res.status(422).send({
      message: 'Token has Expired'
    })
  }

  res.status(200).send({
    message: 'Token Verified Successfully',
    data: req.tempUser
  })


  }catch(error){

  }



}


export const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const { email } = req.passSession
    try {
      await userModel
        .findOne({ email })
        .then((user) => {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              userModel.updateOne(
                { email: user.email },
                {
                  password: hashedPassword,
                },
                function (err, data) {
                  if (err) throw err;
                  return res.status(201).send({
                    message: "User Updated Successfully",
                  });
                }
              );
            })
            .catch((e) => {
              return res.status(500).send({
                error: "Unable to encrypt password",
              });
            });
        })
        .catch((error) => {
          return res.status(404).send({
            message: "user not found",
          });
        });
    } catch (error) {
      return res.status(401).send({ error });
    }
  } catch (error) {
    return res.status(401).send({ error });
  }
};
