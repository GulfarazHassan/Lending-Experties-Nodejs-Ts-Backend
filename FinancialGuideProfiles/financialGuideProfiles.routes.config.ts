import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import BusinessOwnerProfiles from './controllers/financialGuideProfiles.controller';
import jwtMiddleware from '../Auth/middleware/jwt.middleware';

export class FinancialGuideProfilesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'FinancialGuideProfilesRoutes');
  }

  configureRoutes() {
    this.app
      .route(`/financial_guide_profile`)
      .patch(jwtMiddleware.validJWTNeeded, BusinessOwnerProfiles.patch);

    this.app
      .route(`/financial_guide_profile/my_profile`)
      .get(
        jwtMiddleware.validJWTNeeded,
        BusinessOwnerProfiles.getMyProfileFromToken
      );

    return this.app;
  }
}
