import { CommonRoutesConfig } from '../common/common.routes.config';
import UsersController from './controllers/users.controller';
import UsersMiddleware from './middleware/users.middleware';
import express from 'express';
import { body } from 'express-validator';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import jwtMiddleware from '../auth/middleware/jwt.middleware';

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes() {
    this.app
      .route(`/business_owner_profile`)
      .patch(jwtMiddleware.validJWTNeeded, UsersController.patchBusinessOwner);

    this.app
      .route(`/business_owner_profile/my_profile`)
      .get(jwtMiddleware.validJWTNeeded, UsersController.getUserById);

    this.app
      .route(`/business_owner_profile/send_otp_code`)
      .post(jwtMiddleware.validJWTNeeded, UsersController.sendOtpCode);

    this.app
      .route(`/community_member_profile`)
      .patch(
        jwtMiddleware.validJWTNeeded,
        UsersController.patchCommunityMember
      );

    this.app
      .route(`/community_member_profile/my_profile`)
      .get(jwtMiddleware.validJWTNeeded, UsersController.getUserById);

    this.app
      .route(`/non_profit_organisation_profile`)
      .patch(
        jwtMiddleware.validJWTNeeded,
        UsersController.patchNonProfitOrganization
      );

    this.app
      .route(`/non_profit_organisation_profile/my_profile`)
      .get(jwtMiddleware.validJWTNeeded, UsersController.getUserById);

    this.app
      .route(`/financial_guide_profile`)
      .patch(jwtMiddleware.validJWTNeeded, UsersController.patchFinancialGuide);

    this.app
      .route(`/financial_guide_profile/my_profile`)
      .get(jwtMiddleware.validJWTNeeded, UsersController.getUserById);

    return this.app;
  }
}
