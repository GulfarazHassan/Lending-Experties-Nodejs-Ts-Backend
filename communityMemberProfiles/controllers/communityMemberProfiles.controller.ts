import express from 'express';
import communityMemberProfilesService from '../services/communityMemberProfiles.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class CommunityMemberProfilesController {
  constructor() {}

  async patch(req: express.Request, res: express.Response) {
    const { user_id } = res.locals.jwt;

    const updatedProfile = await communityMemberProfilesService.patchById(
      user_id,
      req.body
    );
    console.log('updatedProfile :: ', updatedProfile);
    return res.status(200).json({
      message: 'Community Member Profile Updated',
      profile: updatedProfile,
    });
  }
}

export default new CommunityMemberProfilesController();
