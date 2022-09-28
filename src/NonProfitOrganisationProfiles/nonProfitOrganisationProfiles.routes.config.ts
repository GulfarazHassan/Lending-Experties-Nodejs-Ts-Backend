import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import NonProfitOrganisationProfiles from './controllers/nonProfitOrganisationProfiles.controller';
import jwtMiddleware from '../auth/middleware/jwt.middleware';

export class NonProfitOrganisationProfilesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'NonProfitOrganisationProfilesRoutes');
  }

  configureRoutes() {
    this.app
      .route(`/non_profit_organisation_profile`)
      .patch(jwtMiddleware.validJWTNeeded, NonProfitOrganisationProfiles.patch);

    this.app
      .route(`/non_profit_organisation_profile/my_profile`)
      .get(
        jwtMiddleware.validJWTNeeded,
        NonProfitOrganisationProfiles.getMyProfileFromToken
      );

    return this.app;
  }
}
