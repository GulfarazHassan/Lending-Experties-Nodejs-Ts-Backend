import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import BusinessOwnerProfiles from './controllers/businessOwnerProfiles.controller';
import jwtMiddleware from '../Auth/middleware/jwt.middleware';

export class BusinessOwnerProfilesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'BusinessOwnerProfilesRoutes');
  }

  configureRoutes() {
    this.app
      .route(`/business_owner_profile`)
      .patch(jwtMiddleware.validJWTNeeded, BusinessOwnerProfiles.patch);

    this.app
      .route(`/business_owner_profile/my_profile`)
      .get(
        jwtMiddleware.validJWTNeeded,
        BusinessOwnerProfiles.getMyProfileFromToken
      );

    return this.app;
  }
}
