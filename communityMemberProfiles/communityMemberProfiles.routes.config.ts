import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import CommunityMemberProfilesController from './controllers/communityMemberProfiles.controller';
import jwtMiddleware from '../auth/middleware/jwt.middleware';

export class CommunityMemberProfilesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes() {
    this.app
      .route(`/community_member_profile`)
      .patch(
        jwtMiddleware.validJWTNeeded,
        CommunityMemberProfilesController.patch
      );

    return this.app;
  }
}
