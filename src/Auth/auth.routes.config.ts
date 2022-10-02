import { CommonRoutesConfig } from '../common/common.routes.config';
import authController from './controllers/auth.controller';
import userController from '../users/controllers/users.controller';
import authMiddleware from './middleware/auth.middleware';
import express from 'express';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import jwtMiddleware from './middleware/jwt.middleware';
import { body } from 'express-validator';

export class AuthRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'AuthRoutes');
  }

  configureRoutes(): express.Application {
    this.app.post(`/auth/login`, [
      body('email').isEmail(),
      body('password').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      authMiddleware.verifyUserPassword,
      authController.createJWT,
    ]);

    this.app.post(`/auth/signup`, [
      body('email').isEmail(),
      body('password').isString(),
      body('user_type').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      authMiddleware.validateSameEmailDoesntExist,
      authController.signupUser,
    ]);

    this.app.post(`/auth/reset_Password`, [
      body('current_password').isString(),
      body('new_password').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      jwtMiddleware.validJWTNeeded,
      authController.resetPassword,
    ]);

    this.app.post(`/auth/common/send_otp_code`, [
      body('phone_number').isString(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      jwtMiddleware.validJWTNeeded,
      userController.sendOtpCode,
    ]);

    this.app.post(`/auth/common/verify_otp_code`, [
      body('otp_code').isNumeric(),
      BodyValidationMiddleware.verifyBodyFieldsErrors,
      jwtMiddleware.validJWTNeeded,
      userController.verifyOtp,
    ]);

    return this.app;
  }
}
