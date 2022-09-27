import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import CommunityMemberProfilesController from './controllers/communityMemberProfiles.controller';
import jwtMiddleware from '../Auth/middleware/jwt.middleware';

export class CommunityMemberProfilesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'CommunityMemberProfilesRoutes');
  }

  configureRoutes() {
    this.app
      .route(`/community_member_profile`)
      .patch(
        jwtMiddleware.validJWTNeeded,
        CommunityMemberProfilesController.patch
      );

    this.app
      .route(`/community_member_profile/my_profile`)
      .get(
        jwtMiddleware.validJWTNeeded,
        CommunityMemberProfilesController.getMyProfileFromToken
      );

    return this.app;
  }
}
